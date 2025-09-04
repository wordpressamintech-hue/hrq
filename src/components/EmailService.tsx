// Email Service Helper
// This component provides email functionality for HRQ website
// For production use, replace the configuration with your actual EmailJS credentials

interface EmailServiceConfig {
  serviceId: string;
  publicKey: string;
}

interface EmailTemplate {
  templateId: string;
  params: Record<string, any>;
}

class EmailService {
  private static config: EmailServiceConfig = {
    // Replace these with your actual EmailJS credentials
    serviceId: 'YOUR_SERVICE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
  };

  static async send(template: EmailTemplate): Promise<{ success: boolean; error?: string }> {
    try {
      // For demo purposes, we'll simulate a successful email send
      // In production, uncomment and use the actual EmailJS API call below
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      /* 
      // Actual EmailJS implementation - uncomment for production use
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: this.config.serviceId,
          template_id: template.templateId,
          user_id: this.config.publicKey,
          template_params: {
            ...template.params,
            to_email: 'info@hr-q.com'
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Email sending failed: ${response.statusText}`);
      }
      */

      return { success: true };
    } catch (error) {
      console.error('Email service error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      };
    }
  }

  // Contact form email template
  static async sendContactForm(formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jobTitle: string;
    industry: string;
    service: string;
    employees: string;
    message: string;
    newsletter: boolean;
    privacy: boolean;
  }): Promise<{ success: boolean; error?: string }> {
    return this.send({
      templateId: 'YOUR_CONTACT_TEMPLATE_ID', // Replace with your actual template ID
      params: {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: `HR Consultation Request from ${formData.firstName} ${formData.lastName} - ${formData.company}`,
        message: `
Contact Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company}
Job Title: ${formData.jobTitle || 'Not provided'}

Company Details:
Industry: ${formData.industry || 'Not specified'}
Number of Employees: ${formData.employees || 'Not specified'}
Service of Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

Additional Preferences:
Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}
Privacy Policy Accepted: ${formData.privacy ? 'Yes' : 'No'}
        `.trim(),
        company: formData.company,
        phone: formData.phone,
        job_title: formData.jobTitle,
        industry: formData.industry,
        service: formData.service,
        employees: formData.employees,
        newsletter: formData.newsletter ? 'Yes' : 'No'
      }
    });
  }

  // Newsletter subscription email template
  static async sendNewsletterSubscription(email: string): Promise<{ success: boolean; error?: string }> {
    return this.send({
      templateId: 'YOUR_NEWSLETTER_TEMPLATE_ID', // Replace with your actual template ID
      params: {
        from_email: email,
        subject: 'Newsletter Subscription Request',
        message: `
New newsletter subscription request:

Email Address: ${email}
Requested on: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

Please add this email to the HRQ newsletter mailing list.
        `.trim(),
        subscriber_email: email,
        subscription_date: new Date().toLocaleDateString()
      }
    });
  }

  // Method to update configuration for production
  static configure(config: EmailServiceConfig) {
    this.config = config;
  }
}

export { EmailService };

/* 
PRODUCTION SETUP INSTRUCTIONS:

1. Sign up for EmailJS (https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create email templates for:
   - Contact form submissions
   - Newsletter subscriptions
4. Replace the placeholder values with your actual:
   - Service ID
   - Template IDs
   - Public Key
5. Call EmailService.configure() in your app initialization with real credentials
6. Uncomment the actual EmailJS API call in the send() method
7. Remove the demo simulation code

Example configuration:
EmailService.configure({
  serviceId: 'service_abc123',
  publicKey: 'user_xyz789'
});
*/