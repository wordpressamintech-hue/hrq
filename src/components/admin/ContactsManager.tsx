import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useAuth } from '../../hooks/useAuth';
import { Search, Mail, Phone, Building, Clock, User, MessageSquare, Briefcase, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  service: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  createdAt: string;
  updatedAt?: string;
}

export function ContactsManager() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // Load contacts from localStorage for fallback
      console.log('Loading contacts from localStorage');
      const storedContacts = localStorage.getItem('contact_submissions');
      const localContacts = storedContacts ? JSON.parse(storedContacts) : [];

      // Add mock data if no local data exists
      if (localContacts.length === 0) {
        const mockContacts: Contact[] = [
          {
            id: 'contact_1',
            name: 'John Smith',
            email: 'john.smith@example.com',
            company: 'Tech Corp',
            phone: '+1-234-567-8900',
            industry: 'Technology',
            service: 'HR Outsourcing',
            message: 'We are interested in your HR outsourcing services for our growing tech company.',
            status: 'new',
            createdAt: new Date().toISOString(),
          },
          {
            id: 'contact_2',
            name: 'Sarah Johnson',
            email: 'sarah.j@healthcare.com',
            company: 'Healthcare Solutions',
            phone: '+1-234-567-8901',
            industry: 'Healthcare',
            service: 'Recruitment',
            message: 'Looking for recruitment services to expand our healthcare team.',
            status: 'contacted',
            createdAt: new Date(Date.now() - 86400000).toISOString(),
          }
        ];
        setContacts(mockContacts);
      } else {
        // Convert localStorage format to Contact format
        const formattedContacts = localContacts.map((contact: any, index: number) => ({
          id: `contact_${index + 3}`,
          name: contact.name || 'Unknown',
          email: contact.email || '',
          company: contact.company || '',
          phone: contact.phone || '',
          industry: contact.industry || '',
          service: Array.isArray(contact.services) ? contact.services.join(', ') : (contact.service || ''),
          message: contact.message || '',
          status: 'new' as const,
          createdAt: contact.timestamp || new Date().toISOString(),
        }));
        setContacts(formattedContacts);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (contactId: string, status: Contact['status']) => {
    try {
      console.log('Updating contact status locally');
      const updatedContact = { ...selectedContact!, status, updatedAt: new Date().toISOString() };
      setContacts(prev => prev.map(contact => 
        contact.id === contactId ? updatedContact : contact
      ));
      setSelectedContact(updatedContact);
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Contact['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'contacted': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusVariant = (status: Contact['status']) => {
    switch (status) {
      case 'new': return 'default';
      case 'contacted': return 'secondary';
      case 'resolved': return 'outline';
      default: return 'outline';
    }
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
          <h2 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h2>
          <p className="text-gray-600">Manage and respond to customer inquiries</p>
        </div>
        <Badge variant="outline" className="text-sm">
          {contacts.length} Total Contacts
        </Badge>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search contacts by name, email, company, industry, or service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'New', count: contacts.filter(c => c.status === 'new').length, color: 'blue' },
          { label: 'Contacted', count: contacts.filter(c => c.status === 'contacted').length, color: 'yellow' },
          { label: 'Resolved', count: contacts.filter(c => c.status === 'resolved').length, color: 'green' },
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

      {/* Contacts List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Contact List</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  selectedContact?.id === contact.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-900">{contact.name}</span>
                  </div>
                  <Badge variant={getStatusVariant(contact.status)} className="text-xs">
                    {contact.status}
                  </Badge>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3" />
                    <span>{contact.email}</span>
                  </div>
                  {contact.company && (
                    <div className="flex items-center space-x-2">
                      <Building className="w-3 h-3" />
                      <span>{contact.company}</span>
                    </div>
                  )}
                  {contact.industry && (
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-3 h-3" />
                      <span>{contact.industry}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div>
          {selectedContact ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{selectedContact.name}</CardTitle>
                    <p className="text-gray-600">{selectedContact.email}</p>
                  </div>
                  <Badge variant={getStatusVariant(selectedContact.status)}>
                    {selectedContact.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedContact.company && (
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{selectedContact.company}</span>
                    </div>
                  )}
                  {selectedContact.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{selectedContact.phone}</span>
                    </div>
                  )}
                  {selectedContact.industry && (
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Industry: {selectedContact.industry}</span>
                    </div>
                  )}
                  {selectedContact.service && (
                    <div className="flex items-center space-x-2">
                      <Settings className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Service: {selectedContact.service}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">Message</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {selectedContact.status === 'new' && (
                    <Button
                      size="sm"
                      onClick={() => updateContactStatus(selectedContact.id, 'contacted')}
                      className="bg-yellow-600 hover:bg-yellow-700"
                    >
                      Mark as Contacted
                    </Button>
                  )}
                  {selectedContact.status === 'contacted' && (
                    <Button
                      size="sm"
                      onClick={() => updateContactStatus(selectedContact.id, 'resolved')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark as Resolved
                    </Button>
                  )}
                  {selectedContact.status !== 'new' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateContactStatus(selectedContact.id, 'new')}
                    >
                      Mark as New
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-gray-500">Select a contact to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}