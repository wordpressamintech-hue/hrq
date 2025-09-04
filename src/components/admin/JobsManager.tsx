import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useAuth } from '../../hooks/useAuth';
import { projectId, publicAnonKey } from '../../utils/supabase/info';
import { Plus, Edit, Trash2, MapPin, Building, Clock, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string;
  benefits: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt?: string;
}

export function JobsManager() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    experience: '',
    description: '',
    requirements: '',
    benefits: '',
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      // Check if using fallback authentication
      if (token?.startsWith('fallback-')) {
        console.log('Using fallback data for jobs');
        // Mock data for fallback authentication
        const mockJobs: Job[] = [
          {
            id: 'job_1',
            title: 'Senior HR Manager',
            department: 'Human Resources',
            location: 'Karachi, Pakistan',
            type: 'full-time',
            experience: '5-8 years',
            description: 'Lead HR initiatives and drive organizational growth across Pakistan market.',
            requirements: 'Bachelor\'s degree in HR or related field\n5+ years of HR experience\nStrong leadership skills',
            benefits: 'Competitive salary\nHealth insurance\nPerformance bonuses',
            status: 'active',
            createdAt: new Date().toISOString(),
          },
          {
            id: 'job_2',
            title: 'Digital Marketing Specialist',
            department: 'Marketing',
            location: 'Dubai, UAE',
            type: 'full-time',
            experience: '3-5 years',
            description: 'Develop and execute digital marketing campaigns to drive brand awareness.',
            requirements: 'Bachelor\'s degree in Marketing\n3+ years in digital marketing\nSEO/SEM knowledge',
            benefits: 'Tax-free salary\nFlexible work arrangements\nProfessional development',
            status: 'active',
            createdAt: new Date(Date.now() - 86400000).toISOString(),
          }
        ];
        setJobs(mockJobs);
        setLoading(false);
        return;
      }

      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/admin/jobs`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setJobs(data.jobs || []);
      } else {
        console.error('Failed to fetch jobs');
        setJobs([]);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingJob 
        ? `https://${projectId}.supabase.co/functions/v1/make-server/admin/jobs/${editingJob.id}`
        : `https://${projectId}.supabase.co/functions/v1/make-server/admin/jobs`;
      
      const method = editingJob ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchJobs();
        resetForm();
        setDialogOpen(false);
      }
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const deleteJob = async (jobId: string) => {
    if (!confirm('Are you sure you want to delete this job listing?')) return;

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/admin/jobs/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        await fetchJobs();
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const toggleJobStatus = async (job: Job) => {
    const newStatus = job.status === 'active' ? 'inactive' : 'active';
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/admin/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        await fetchJobs();
      }
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };

  const openEditDialog = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      description: job.description,
      requirements: job.requirements,
      benefits: job.benefits,
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setEditingJob(null);
    setFormData({
      title: '',
      department: '',
      location: '',
      type: '',
      experience: '',
      description: '',
      requirements: '',
      benefits: '',
    });
  };

  const openCreateDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Job Listings Management</h2>
          <p className="text-gray-600">Create and manage job postings</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="text-sm">
            {jobs.length} Total Jobs
          </Badge>
          <Button onClick={openCreateDialog} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Job
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Active Jobs', count: jobs.filter(j => j.status === 'active').length, color: 'green' },
          { label: 'Inactive Jobs', count: jobs.filter(j => j.status === 'inactive').length, color: 'red' },
          { label: 'Total Postings', count: jobs.length, color: 'blue' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
                </div>
                <div className={`w-3 h-3 rounded-full bg-${stat.color}-500`}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                    {job.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  {job.experience && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-700 line-clamp-3">
                  {job.description}
                </p>
                
                <div className="flex space-x-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEditDialog(job)}
                    className="flex-1"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleJobStatus(job)}
                    className={job.status === 'active' ? 'text-red-600' : 'text-green-600'}
                  >
                    {job.status === 'active' ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteJob(job.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Create/Edit Job Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingJob ? 'Edit Job Listing' : 'Create New Job Listing'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Job Title *</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Senior Software Engineer"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Department *</label>
                <Input
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  placeholder="Engineering"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Location *</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Remote / San Francisco, CA"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Job Type *</label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Experience Level</label>
                <Input
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="3-5 years"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Job Description *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Detailed job description..."
                rows={4}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Requirements</label>
              <Textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="Required skills and qualifications..."
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Benefits</label>
              <Textarea
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                placeholder="Benefits and perks..."
                rows={3}
              />
            </div>
            
            <div className="flex space-x-2 pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                {editingJob ? 'Update Job' : 'Create Job'}
              </Button>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}