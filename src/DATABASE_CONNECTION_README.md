# HRQ Database Connection Status

## Overview
The HRQ website is now fully connected to the Supabase database for storing contact form submissions and job applications. This document explains how the system works and how to test it.

## Database Architecture

### Storage Method
- Using Supabase KV Store (Key-Value storage) for data persistence
- All data is stored in the `kv_store_0004e2f8` table
- Data is organized with prefixes: `contact:`, `application:`, `job:`

### API Endpoints
The backend server runs on: `https://{projectId}.supabase.co/functions/v1/make-server/`

**Public Endpoints:**
- `POST /contact` - Submit contact form
- `POST /apply` - Submit job application  
- `GET /jobs` - Get active job listings
- `POST /init-sample-data` - Initialize sample job data
- `GET /health` - Health check

**Admin Endpoints (require authentication):**
- `GET /admin/contacts` - Get all contact submissions
- `PUT /admin/contacts/:id` - Update contact status
- `GET /admin/applications` - Get all job applications
- `PUT /admin/applications/:id` - Update application status
- `POST /admin/jobs` - Create new job listing
- `PUT /admin/jobs/:id` - Update job listing
- `DELETE /admin/jobs/:id` - Delete job listing
- `POST /admin/login` - Admin authentication

## How Forms Connect to Database

### Contact Form (`/pages/ContactPage.tsx`)
1. User fills out contact form with:
   - Name, email, company, phone
   - Industry selection (15 options)
   - Service selection (16 HR service categories)  
   - Message
2. Form submits POST request to `/contact` endpoint
3. Server validates required fields (name, email, message)
4. Data stored in KV store with key `contact:{uniqueId}`
5. Success/error response shown to user

### Job Application Form (`/pages/CareerPage.tsx`)
1. User applies for specific job with:
   - Personal info (first name, last name, email, phone)
   - Location preference
   - Experience details
   - Cover letter
   - Resume file (converted to base64)
2. Form submits POST request to `/apply` endpoint
3. Server validates required fields
4. Data stored in KV store with key `application:{uniqueId}`
5. Success/error response shown to user

## Admin Panel Features

### Database Status Check (`/components/DatabaseStatus.tsx`)
- Real-time connection testing
- Sample data initialization
- Contact form testing capability
- Accessible via Admin Panel → Database Status

### Data Management
- **Contact Manager**: View, filter, and update status of contact submissions
- **Applications Manager**: Review job applications and update candidate status
- **Jobs Manager**: Create, edit, and delete job listings

## Testing the Connection

### Automatic Testing
1. Visit the admin panel at `/admin`
2. Go to "Database Status" section
3. The system automatically checks:
   - Server health endpoint
   - Database connectivity
   - Existing data count

### Manual Testing
1. **Contact Form**: Fill out the form on `/contact` page
2. **Job Application**: Apply for a job on `/careers` page  
3. **Admin Verification**: Check admin panel to see submitted data

### Sample Data Initialization
If no job listings exist, use the "Initialize Sample Data" button in the Database Status section to populate with 3 sample job postings.

## Error Handling & Debugging

### Console Logging
Both contact and job application forms log detailed information to browser console:
- API endpoint URLs
- Request payloads  
- Response status and data
- Error messages

### Common Issues
1. **403 Errors**: Check if Supabase edge function is deployed
2. **Network Errors**: Verify projectId and publicAnonKey in `/utils/supabase/info.tsx`
3. **No Data**: Use sample data initialization or create jobs via admin panel

## Admin Access Setup

### Admin Configuration
The system is configured to allow admin access for users with these email addresses:
- `info@hr-q.com` 
- `shahidamin.tcb@gmail.com`

### Setting Up Admin Access
To access the HRQ Admin Portal:

1. **Create Admin Users in Supabase**:
   - Go to your Supabase project dashboard
   - Navigate to Authentication → Users
   - Click "Create User" and create both accounts:
   
   **Primary Admin Account:**
   - Email: `info@hr-q.com`
   - Password: `HRQ@Admin2025!`
   
   **Secondary Admin Account:**
   - Email: `shahidamin.tcb@gmail.com`
   - Password: `HRQ@Admin2025!`

2. **Admin Portal Access**:
   - **URL**: Visit `/admin` on your website
   - **Email**: Either `info@hr-q.com` or `shahidamin.tcb@gmail.com`
   - **Password**: `HRQ@Admin2025!`

3. **Modify Admin Access** (if needed in future):
   - Update the admin email list in `/supabase/functions/make-server/index.ts` line 40

### Security Notes
- Admin emails are defined in server code for security
- Only users with whitelisted email addresses can access admin features
- All admin routes require valid authentication tokens

## Current Status

✅ **Contact Form**: Fully connected and storing data
✅ **Job Applications**: Fully connected and storing data  
✅ **Admin Panel**: Full CRUD operations for all data types
✅ **Database Health Monitoring**: Real-time status checking
✅ **Error Handling**: Comprehensive error reporting and fallbacks
✅ **Admin Authentication**: Configured for `info@hr-q.com` and `shahidamin.tcb@gmail.com`

The system is production-ready and all forms are successfully storing data in the Supabase database.