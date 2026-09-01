export type NavSection = 'overview' | 'academics' | 'origin' | 'services' | 'location';

export type ServiceType = 'certificate' | 'leave' | 'feedback';

export type ThemeMode = 'light' | 'dark';

export interface SchoolContextData {
  name: string;
  shortName: string;
  designation: string;
  curriculumSystem: string;
  levelSpan: string;
  location: {
    address: string;
    landmark: string;
    road: string;
    city: string;
    district: string;
    province: string;
    country: string;
  };
}

export interface CertificateApplicationSubmission {
  id: string;
  applicantName: string;
  fatherName: string;
  certificateType: 'Character Certificate' | 'Bonafide Certificate' | 'Leaving / Transfer Certificate' | 'Enrollment Verification' | 'Other';
  classEnrolled: string;
  rollNumber?: string;
  reason: string;
  contactNumber: string;
  submittedAt: string;
  status: 'Received';
}

export interface LeaveApplicationSubmission {
  id: string;
  applicantName: string;
  fatherName: string;
  classEnrolled: string;
  leaveType: 'Medical / Sickness' | 'Urgent Personal Affair' | 'Family Emergency' | 'Other';
  startDate: string;
  endDate: string;
  reason: string;
  contactNumber: string;
  submittedAt: string;
  status: 'Received';
}

export interface AnonymousFeedbackSubmission {
  id: string;
  feedbackType: 'Suggestion' | 'Complaint' | 'General Feedback';
  category: 'Academics & Classroom' | 'Campus Environment' | 'Facilities' | 'Administration' | 'Other';
  message: string;
  submittedAt: string;
  status: 'Delivered (Anonymous)';
}
