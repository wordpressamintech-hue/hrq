import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AdminLogin } from './admin/AdminLogin';
import { AdminLayout } from './admin/AdminLayout';
import { ContactsManager } from './admin/ContactsManager';
import { JobsManager } from './admin/JobsManager';
import { ApplicationsManager } from './admin/ApplicationsManager';
import { DatabaseStatus } from './DatabaseStatus';

export function AdminPanel() {
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState<'contacts' | 'jobs' | 'applications' | 'database'>('contacts');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'contacts':
        return <ContactsManager />;
      case 'jobs':
        return <JobsManager />;
      case 'applications':
        return <ApplicationsManager />;
      case 'database':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Database Status</h2>
              <p className="text-gray-600 mb-6">Monitor database connectivity and test form submissions</p>
            </div>
            <div className="flex justify-center">
              <DatabaseStatus />
            </div>
          </div>
        );
      default:
        return <ContactsManager />;
    }
  };

  return (
    <AdminLayout 
      activeSection={activeSection} 
      onSectionChange={setActiveSection}
    >
      {renderActiveSection()}
    </AdminLayout>
  );
}