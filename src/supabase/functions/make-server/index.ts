import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/middleware';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.ts';

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const app = new Hono();

// Enable CORS and logging
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use('*', logger(console.log));

// Admin authentication middleware
const adminAuth = async (c: any, next: any) => {
  const token = c.req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return c.json({ error: 'No token provided' }, 401);
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return c.json({ error: 'Invalid token' }, 401);
    }

    // Check if user is admin (you can customize this logic)
    const adminEmails = ['info@hr-q.com', 'shahidamin.tcb@gmail.com']; // HRQ Admin emails
    if (!adminEmails.includes(user.email || '')) {
      return c.json({ error: 'Admin access required' }, 403);
    }

    c.set('user', user);
    await next();
  } catch (error) {
    console.log('Auth error:', error);
    return c.json({ error: 'Authentication failed' }, 401);
  }
};

// Contact Form Routes
app.post('/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, message, phone, industry, service } = body;

    if (!name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Store in KV store with timestamp
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const contactData = {
      id: contactId,
      name,
      email,
      company: company || '',
      phone: phone || '',
      industry: industry || '',
      service: service || '',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    await kv.set(`contact:${contactId}`, contactData);
    
    return c.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: contactId 
    });
  } catch (error) {
    console.log('Contact form error:', error);
    return c.json({ error: 'Failed to submit contact form' }, 500);
  }
});

// Get all contact submissions (Admin only)
app.get('/admin/contacts', adminAuth, async (c) => {
  try {
    const contacts = await kv.getByPrefix('contact:');
    
    // Sort by creation date (newest first)
    const sortedContacts = contacts.sort((a, b) => 
      new Date(b.value.createdAt).getTime() - new Date(a.value.createdAt).getTime()
    );
    
    return c.json({ contacts: sortedContacts.map(item => item.value) });
  } catch (error) {
    console.log('Get contacts error:', error);
    return c.json({ error: 'Failed to fetch contacts' }, 500);
  }
});

// Update contact status (Admin only)
app.put('/admin/contacts/:id', adminAuth, async (c) => {
  try {
    const contactId = c.req.param('id');
    const { status } = await c.req.json();
    
    const existingContact = await kv.get(`contact:${contactId}`);
    if (!existingContact) {
      return c.json({ error: 'Contact not found' }, 404);
    }
    
    const updatedContact = {
      ...existingContact,
      status,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`contact:${contactId}`, updatedContact);
    
    return c.json({ success: true, contact: updatedContact });
  } catch (error) {
    console.log('Update contact error:', error);
    return c.json({ error: 'Failed to update contact' }, 500);
  }
});

// Job Application Routes
app.post('/apply', async (c) => {
  try {
    const body = await c.req.json();
    const { 
      jobId, 
      jobTitle, 
      firstName, 
      lastName, 
      email, 
      phone, 
      location, 
      experience, 
      coverLetter, 
      resume 
    } = body;

    if (!jobId || !jobTitle || !firstName || !lastName || !email) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Store application in KV store
    const applicationId = `application_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const applicationData = {
      id: applicationId,
      jobId,
      jobTitle,
      firstName,
      lastName,
      email,
      phone: phone || '',
      location: location || '',
      experience: experience || '',
      coverLetter: coverLetter || '',
      resume: resume || '',
      status: 'applied',
      createdAt: new Date().toISOString(),
    };

    await kv.set(`application:${applicationId}`, applicationData);
    
    return c.json({ 
      success: true, 
      message: 'Application submitted successfully',
      id: applicationId 
    });
  } catch (error) {
    console.log('Job application error:', error);
    return c.json({ error: 'Failed to submit application' }, 500);
  }
});

// Get all job applications (Admin only)
app.get('/admin/applications', adminAuth, async (c) => {
  try {
    const applications = await kv.getByPrefix('application:');
    
    // Sort by creation date (newest first)
    const sortedApplications = applications.sort((a, b) => 
      new Date(b.value.createdAt).getTime() - new Date(a.value.createdAt).getTime()
    );
    
    return c.json({ applications: sortedApplications.map(item => item.value) });
  } catch (error) {
    console.log('Get applications error:', error);
    return c.json({ error: 'Failed to fetch applications' }, 500);
  }
});

// Update application status (Admin only)
app.put('/admin/applications/:id', adminAuth, async (c) => {
  try {
    const applicationId = c.req.param('id');
    const { status } = await c.req.json();
    
    const existingApplication = await kv.get(`application:${applicationId}`);
    if (!existingApplication) {
      return c.json({ error: 'Application not found' }, 404);
    }
    
    const updatedApplication = {
      ...existingApplication,
      status,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`application:${applicationId}`, updatedApplication);
    
    return c.json({ success: true, application: updatedApplication });
  } catch (error) {
    console.log('Update application error:', error);
    return c.json({ error: 'Failed to update application' }, 500);
  }
});

// Job Listings Management (Admin only)
app.get('/admin/jobs', adminAuth, async (c) => {
  try {
    const jobs = await kv.getByPrefix('job:');
    
    const sortedJobs = jobs.sort((a, b) => 
      new Date(b.value.createdAt).getTime() - new Date(a.value.createdAt).getTime()
    );
    
    return c.json({ jobs: sortedJobs.map(item => item.value) });
  } catch (error) {
    console.log('Get jobs error:', error);
    return c.json({ error: 'Failed to fetch jobs' }, 500);
  }
});

// Create new job listing (Admin only)
app.post('/admin/jobs', adminAuth, async (c) => {
  try {
    const body = await c.req.json();
    const { 
      title, 
      department, 
      location, 
      type, 
      experience, 
      description, 
      requirements, 
      benefits 
    } = body;

    if (!title || !department || !location || !type || !description) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const jobData = {
      id: jobId,
      title,
      department,
      location,
      type,
      experience: experience || '',
      description,
      requirements: requirements || '',
      benefits: benefits || '',
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    await kv.set(`job:${jobId}`, jobData);
    
    return c.json({ 
      success: true, 
      message: 'Job created successfully',
      job: jobData 
    });
  } catch (error) {
    console.log('Create job error:', error);
    return c.json({ error: 'Failed to create job' }, 500);
  }
});

// Update job listing (Admin only)
app.put('/admin/jobs/:id', adminAuth, async (c) => {
  try {
    const jobId = c.req.param('id');
    const updates = await c.req.json();
    
    const existingJob = await kv.get(`job:${jobId}`);
    if (!existingJob) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    const updatedJob = {
      ...existingJob,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(`job:${jobId}`, updatedJob);
    
    return c.json({ success: true, job: updatedJob });
  } catch (error) {
    console.log('Update job error:', error);
    return c.json({ error: 'Failed to update job' }, 500);
  }
});

// Delete job listing (Admin only)
app.delete('/admin/jobs/:id', adminAuth, async (c) => {
  try {
    const jobId = c.req.param('id');
    
    const existingJob = await kv.get(`job:${jobId}`);
    if (!existingJob) {
      return c.json({ error: 'Job not found' }, 404);
    }
    
    await kv.del(`job:${jobId}`);
    
    return c.json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    console.log('Delete job error:', error);
    return c.json({ error: 'Failed to delete job' }, 500);
  }
});

// Get public job listings
app.get('/jobs', async (c) => {
  try {
    const jobs = await kv.getByPrefix('job:');
    
    // Filter only active jobs for public view
    const activeJobs = jobs
      .filter(item => item.value.status === 'active')
      .sort((a, b) => 
        new Date(b.value.createdAt).getTime() - new Date(a.value.createdAt).getTime()
      );
    
    return c.json({ jobs: activeJobs.map(item => item.value) });
  } catch (error) {
    console.log('Get public jobs error:', error);
    return c.json({ error: 'Failed to fetch jobs' }, 500);
  }
});

// Admin login route (simplified)
app.post('/admin/login', async (c) => {
  try {
    const { email, password } = await c.req.json();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }
    
    return c.json({ 
      success: true, 
      token: data.session?.access_token,
      user: data.user 
    });
  } catch (error) {
    console.log('Admin login error:', error);
    return c.json({ error: 'Login failed' }, 500);
  }
});

// Initialize with sample data (for first setup)
app.post('/init-sample-data', async (c) => {
  try {
    // Check if jobs already exist
    const existingJobs = await kv.getByPrefix('job:');
    if (existingJobs.length > 0) {
      return c.json({ message: 'Sample data already exists', jobCount: existingJobs.length });
    }

    // Sample jobs data
    const sampleJobs = [
      {
        title: 'Senior Sales Manager',
        department: 'Sales',
        location: 'Karachi, Pakistan',
        type: 'Onsite',
        experience: '5-8 years',
        description: 'Lead sales initiatives and drive revenue growth across Pakistan market while building strong client relationships.',
        requirements: 'Bachelor\'s degree in Business or related field\n5+ years of B2B sales experience\nProven track record of meeting sales targets\nStrong communication and negotiation skills\nFluency in Urdu and English',
        benefits: 'Competitive salary + commission\nHealth insurance for family\nPerformance bonuses\nCar allowance'
      },
      {
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        location: 'Dubai, UAE',
        type: 'Hybrid',
        experience: '3-5 years',
        description: 'Develop and execute digital marketing campaigns across social media, email, and web platforms to drive brand awareness.',
        requirements: 'Bachelor\'s degree in Marketing or related field\n3+ years in digital marketing\nExperience with Google Ads, Facebook Ads, LinkedIn\nSEO/SEM knowledge\nAnalytics and data analysis skills',
        benefits: 'Tax-free salary\nFlexible work arrangements\nProfessional development budget\nHealth insurance'
      },
      {
        title: 'Full Stack Software Developer',
        department: 'Software Development',
        location: 'London, UK',
        type: 'Hybrid',
        experience: '3-5 years',
        description: 'Build and maintain web applications using modern frameworks while collaborating with cross-functional teams.',
        requirements: 'Bachelor\'s degree in Computer Science or related field\nProficiency in React, Node.js, TypeScript\nDatabase design and management experience\nAgile development methodology knowledge\nGit version control expertise',
        benefits: '£45,000-£60,000 annual salary\nFlexible working hours\nLearning and development budget\nPension scheme'
      }
    ];

    // Store sample jobs
    let createdCount = 0;
    for (const jobData of sampleJobs) {
      const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const job = {
        id: jobId,
        ...jobData,
        status: 'active',
        createdAt: new Date().toISOString(),
      };
      
      await kv.set(`job:${jobId}`, job);
      createdCount++;
    }

    return c.json({ 
      success: true, 
      message: `Successfully initialized ${createdCount} sample jobs`,
      jobCount: createdCount 
    });
  } catch (error) {
    console.log('Init sample data error:', error);
    return c.json({ error: 'Failed to initialize sample data' }, 500);
  }
});

// Health check
app.get('/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);