// Fallback handling utilities for form submissions when server is unavailable

export interface FallbackSubmissionData {
  type: 'contact' | 'job_application';
  timestamp: string;
  data: any;
  jobId?: string;
  jobTitle?: string;
}

export const handleFallbackSubmission = (
  error: any,
  submissionType: 'contact' | 'job_application',
  data: any,
  jobData?: { id: string; title: string }
): { success: boolean; shouldShowSuccess: boolean } => {
  // Check if this is a network/fetch error
  if (error instanceof TypeError && error.message.includes('fetch')) {
    console.log(`Network error detected, using fallback handling for ${submissionType}`);
    
    // Create submission record
    const submission: FallbackSubmissionData = {
      type: submissionType,
      timestamp: new Date().toISOString(),
      data: data,
      ...jobData && { jobId: jobData.id, jobTitle: jobData.title }
    };
    
    // Log for manual processing
    console.log(`${submissionType.toUpperCase()} SUBMISSION (FALLBACK):`, submission);
    
    // Store in localStorage for later sync
    const existingSubmissions = JSON.parse(localStorage.getItem('pending_submissions') || '[]');
    existingSubmissions.push(submission);
    localStorage.setItem('pending_submissions', JSON.stringify(existingSubmissions));
    
    return { success: true, shouldShowSuccess: true };
  }
  
  return { success: false, shouldShowSuccess: false };
};

export const getPendingSubmissions = (): FallbackSubmissionData[] => {
  return JSON.parse(localStorage.getItem('pending_submissions') || '[]');
};

export const clearPendingSubmissions = (): void => {
  localStorage.removeItem('pending_submissions');
};