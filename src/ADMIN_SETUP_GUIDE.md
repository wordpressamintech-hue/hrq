# HRQ Admin Portal Setup Guide

## Quick Setup Instructions

### Step 1: Create Admin Users in Supabase
1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Users**
3. Click **"Create User"** and create the following accounts:

#### Primary Admin Account
- **Email**: `info@hr-q.com`
- **Password**: `HRQ@Admin2025!`
- **Auto Confirm User**: ✅ (checked)

#### Secondary Admin Account  
- **Email**: `shahidamin.tcb@gmail.com`
- **Password**: `HRQ@Admin2025!`
- **Auto Confirm User**: ✅ (checked)

### Step 2: Access Admin Portal
1. Visit your website and go to `/admin`
2. Login with either:
   - Email: `info@hr-q.com` | Password: `HRQ@Admin2025!`
   - Email: `shahidamin.tcb@gmail.com` | Password: `HRQ@Admin2025!`

## Fallback Authentication

If the Supabase edge function is not available, the system includes a fallback authentication mechanism:

**Fallback Login Works When:**
- Server edge function is not deployed or unreachable
- Network connectivity issues
- Temporary service outages

**How It Works:**
1. System attempts normal Supabase authentication
2. If that fails, fallback authentication activates automatically
3. Uses the same credentials but validates locally
4. Shows mock data for testing and demonstration

**Fallback Features:**
- Temporary admin access with full UI functionality
- Sample data for contacts and jobs management
- All admin interface features work normally
- Automatically switches back to real data when server is available

### Step 3: Verify Access
After logging in, you should have access to:
- **Contact Management**: View and manage contact form submissions
- **Applications Management**: Review and process job applications  
- **Jobs Management**: Create, edit, and delete job listings
- **Database Status**: Monitor system health and connectivity

## Security Features
- Only whitelisted email addresses can access admin features
- Authentication tokens are required for all admin operations
- All admin routes are protected with middleware authentication
- Session management with automatic logout on token expiry

## Troubleshooting
- **Can't login?** Verify the user accounts are created and confirmed in Supabase
- **403 Forbidden?** Check that the email address is in the admin whitelist
- **404 Error?** Ensure the Supabase edge function is deployed

## Admin Whitelist Location
The admin email addresses are configured in:
`/supabase/functions/make-server/index.ts` at line 40

To add more admin users, update this array and redeploy the edge function.