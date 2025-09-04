import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { CheckCircle, XCircle, RefreshCw, Database } from 'lucide-react';

export function DatabaseStatus() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error' | 'init'>('checking');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const checkConnection = async () => {
    setLoading(true);
    setStatus('checking');
    setMessage('Checking connection...');

    try {
      // First check health endpoint
      const healthResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/health`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (!healthResponse.ok) {
        throw new Error('Health check failed');
      }

      // Check if we have jobs data
      const jobsResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/jobs`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (jobsResponse.ok) {
        const data = await jobsResponse.json();
        if (data.jobs && data.jobs.length > 0) {
          setStatus('connected');
          setMessage(`Database connected successfully! Found ${data.jobs.length} job listings.`);
        } else {
          setStatus('init');
          setMessage('Database connected but no sample data found. Initialize sample data?');
        }
      } else {
        throw new Error('Jobs endpoint failed');
      }
    } catch (error) {
      console.error('Connection check failed:', error);
      setStatus('error');
      setMessage(`Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const initializeSampleData = async () => {
    setLoading(true);
    setMessage('Initializing sample data...');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/init-sample-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('connected');
        setMessage(data.message || 'Sample data initialized successfully!');
      } else {
        throw new Error(data.error || 'Failed to initialize sample data');
      }
    } catch (error) {
      console.error('Sample data initialization failed:', error);
      setStatus('error');
      setMessage(`Failed to initialize sample data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const testContactForm = async () => {
    setLoading(true);
    setMessage('Testing contact form submission...');

    try {
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        industry: 'technology',
        service: 'recruitment',
        message: 'This is a test contact form submission to verify database connectivity.'
      };

      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(testData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage(`Contact form test successful! Submission ID: ${data.id}`);
      } else {
        throw new Error(data.error || 'Contact form test failed');
      }
    } catch (error) {
      console.error('Contact form test failed:', error);
      setMessage(`Contact form test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case 'checking':
        return <RefreshCw className="w-5 h-5 animate-spin text-blue-500" />;
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'init':
        return <Database className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'checking':
        return <Badge variant="secondary">Checking...</Badge>;
      case 'connected':
        return <Badge className="bg-green-100 text-green-800">Connected</Badge>;
      case 'error':
        return <Badge variant="destructive">Error</Badge>;
      case 'init':
        return <Badge className="bg-yellow-100 text-yellow-800">Needs Initialization</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Database className="w-5 h-5" />
            Database Status
          </CardTitle>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          {getStatusIcon()}
          <p className="text-sm text-gray-600 flex-1">{message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            onClick={checkConnection}
            disabled={loading}
            variant="outline"
            size="sm"
            className="w-full"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-2" />
            )}
            Refresh Status
          </Button>

          {status === 'init' && (
            <Button
              onClick={initializeSampleData}
              disabled={loading}
              size="sm"
              className="w-full"
            >
              Initialize Sample Data
            </Button>
          )}

          {status === 'connected' && (
            <Button
              onClick={testContactForm}
              disabled={loading}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Test Contact Form
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}