import React, { useState } from 'react';
import { 
  FileText, 
  CalendarCheck, 
  MessageSquareHeart, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldAlert, 
  Send, 
  Sparkles,
  Printer,
  Clock
} from 'lucide-react';
import { ServiceType, CertificateApplicationSubmission, LeaveApplicationSubmission, AnonymousFeedbackSubmission } from '../types';

interface PublicServicesProps {
  initialService?: ServiceType;
}

export const PublicServices: React.FC<PublicServicesProps> = ({ initialService = 'certificate' }) => {
  const [activeTab, setActiveTab] = useState<ServiceType>(initialService);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Certificate Application Form State
  const [certForm, setCertForm] = useState({
    applicantName: '',
    fatherName: '',
    certificateType: 'Character Certificate' as CertificateApplicationSubmission['certificateType'],
    classEnrolled: '',
    rollNumber: '',
    reason: '',
    contactNumber: '',
  });
  const [certReceipt, setCertReceipt] = useState<CertificateApplicationSubmission | null>(null);

  // Leave Application Form State
  const [leaveForm, setLeaveForm] = useState({
    applicantName: '',
    fatherName: '',
    classEnrolled: '',
    leaveType: 'Medical / Sickness' as LeaveApplicationSubmission['leaveType'],
    startDate: '',
    endDate: '',
    reason: '',
    contactNumber: '',
  });
  const [leaveReceipt, setLeaveReceipt] = useState<LeaveApplicationSubmission | null>(null);

  // Anonymous Feedback Form State
  const [feedbackForm, setFeedbackForm] = useState({
    feedbackType: 'Suggestion' as AnonymousFeedbackSubmission['feedbackType'],
    category: 'Academics & Classroom' as AnonymousFeedbackSubmission['category'],
    message: '',
  });
  const [feedbackReceipt, setFeedbackReceipt] = useState<AnonymousFeedbackSubmission | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certForm.applicantName || !certForm.fatherName || !certForm.classEnrolled || !certForm.reason || !certForm.contactNumber) {
      return;
    }
    const submissionId = `PSP-CERT-${Math.floor(100000 + Math.random() * 900000)}`;
    const newSubmission: CertificateApplicationSubmission = {
      id: submissionId,
      ...certForm,
      submittedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Received',
    };
    setCertReceipt(newSubmission);
  };

  const handleLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leaveForm.applicantName || !leaveForm.fatherName || !leaveForm.classEnrolled || !leaveForm.startDate || !leaveForm.endDate || !leaveForm.reason || !leaveForm.contactNumber) {
      return;
    }
    const submissionId = `PSP-LEAVE-${Math.floor(100000 + Math.random() * 900000)}`;
    const newSubmission: LeaveApplicationSubmission = {
      id: submissionId,
      ...leaveForm,
      submittedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Received',
    };
    setLeaveReceipt(newSubmission);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackForm.message) {
      return;
    }
    const submissionId = `PSP-ANON-${Math.floor(100000 + Math.random() * 900000)}`;
    const newSubmission: AnonymousFeedbackSubmission = {
      id: submissionId,
      ...feedbackForm,
      submittedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Delivered (Anonymous)',
    };
    setFeedbackReceipt(newSubmission);
  };

  return (
    <section id="public-services-section" className="py-16 sm:py-20 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Official Public Facilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Online Applications & Anonymous Feedback
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
            Direct public facilities for students, parents, and community members. Submit verified applications or anonymous feedback directly to the administration.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <button
            id="tab-certificate-service"
            onClick={() => setActiveTab('certificate')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              activeTab === 'certificate'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Certificate Application</span>
          </button>

          <button
            id="tab-leave-service"
            onClick={() => setActiveTab('leave')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              activeTab === 'leave'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Leave Application</span>
          </button>

          <button
            id="tab-feedback-service"
            onClick={() => setActiveTab('feedback')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              activeTab === 'feedback'
                ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            <MessageSquareHeart className="w-4 h-4 text-amber-400" />
            <span>Anonymous Feedback (Twice / Week)</span>
          </button>
        </div>

        {/* Tab 1: Certificate Application */}
        {activeTab === 'certificate' && (
          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Student Certificate Application
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Request Character, Bonafide, Leaving, or Enrollment certificates from PSP School (EMS).
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 self-start sm:self-auto">
                Official Student Service
              </span>
            </div>

            {certReceipt ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-200">
                        Application Received Successfully
                      </h4>
                      <p className="text-xs text-emerald-800 dark:text-emerald-300">
                        Your application has been stored and assigned an official tracking reference ID.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-emerald-300 dark:border-emerald-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Receipt</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white dark:bg-zinc-900 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800/60 text-xs">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Tracking Reference ID</span>
                    <div className="flex items-center gap-2 font-mono font-bold text-sm text-emerald-700 dark:text-emerald-400">
                      <span>{certReceipt.id}</span>
                      <button
                        onClick={() => handleCopy(certReceipt.id)}
                        className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                        title="Copy Reference ID"
                      >
                        {copiedId === certReceipt.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Applicant / Student</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{certReceipt.applicantName} s/o {certReceipt.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Certificate Type</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{certReceipt.certificateType}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Class Enrolled</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{certReceipt.classEnrolled}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Submission Timestamp</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{certReceipt.submittedAt}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Current Status</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {certReceipt.status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Keep your Tracking Reference ID safe to check with the administration office during visiting hours.
                  </p>
                  <button
                    onClick={() => {
                      setCertReceipt(null);
                      setCertForm({
                        applicantName: '',
                        fatherName: '',
                        certificateType: 'Character Certificate',
                        classEnrolled: '',
                        rollNumber: '',
                        reason: '',
                        contactNumber: '',
                      });
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCertSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="cert-applicant-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Student / Applicant Name *
                    </label>
                    <input
                      id="cert-applicant-name"
                      type="text"
                      required
                      value={certForm.applicantName}
                      onChange={(e) => setCertForm({ ...certForm, applicantName: e.target.value })}
                      placeholder="Enter student full name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cert-father-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Father's / Guardian's Name *
                    </label>
                    <input
                      id="cert-father-name"
                      type="text"
                      required
                      value={certForm.fatherName}
                      onChange={(e) => setCertForm({ ...certForm, fatherName: e.target.value })}
                      placeholder="Enter father or guardian name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cert-type-select" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Certificate Requested *
                    </label>
                    <select
                      id="cert-type-select"
                      value={certForm.certificateType}
                      onChange={(e) => setCertForm({ ...certForm, certificateType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Character Certificate">Character Certificate</option>
                      <option value="Bonafide Certificate">Bonafide Certificate</option>
                      <option value="Leaving / Transfer Certificate">Leaving / Transfer Certificate</option>
                      <option value="Enrollment Verification">Enrollment Verification</option>
                      <option value="Other">Other Certificate</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cert-class" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Class Enrolled *
                    </label>
                    <input
                      id="cert-class"
                      type="text"
                      required
                      value={certForm.classEnrolled}
                      onChange={(e) => setCertForm({ ...certForm, classEnrolled: e.target.value })}
                      placeholder="e.g., Nursery, KG, Class 1, etc."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cert-roll" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Roll Number / G.R. No. (Optional)
                    </label>
                    <input
                      id="cert-roll"
                      type="text"
                      value={certForm.rollNumber}
                      onChange={(e) => setCertForm({ ...certForm, rollNumber: e.target.value })}
                      placeholder="Optional reference number"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="cert-contact" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Contact Mobile Number *
                    </label>
                    <input
                      id="cert-contact"
                      type="tel"
                      required
                      value={certForm.contactNumber}
                      onChange={(e) => setCertForm({ ...certForm, contactNumber: e.target.value })}
                      placeholder="e.g. 0300-XXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cert-reason" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Reason for Application *
                  </label>
                  <textarea
                    id="cert-reason"
                    required
                    rows={3}
                    value={certForm.reason}
                    onChange={(e) => setCertForm({ ...certForm, reason: e.target.value })}
                    placeholder="State the purpose for requesting this certificate..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    * Required information for institutional record verification
                  </span>
                  <button
                    type="submit"
                    id="btn-submit-cert-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-md shadow-emerald-900/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Certificate Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Leave Application */}
        {activeTab === 'leave' && (
          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Student Leave Notice & Application
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Submit official notification of student absence for medical or urgent personal reasons.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 self-start sm:self-auto">
                Official Attendance Record
              </span>
            </div>

            {leaveReceipt ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-200">
                        Leave Application Logged
                      </h4>
                      <p className="text-xs text-emerald-800 dark:text-emerald-300">
                        Your leave notice has been stored for verification against classroom attendance.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-emerald-300 dark:border-emerald-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Receipt</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-white dark:bg-zinc-900 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800/60 text-xs">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Tracking Reference ID</span>
                    <div className="flex items-center gap-2 font-mono font-bold text-sm text-emerald-700 dark:text-emerald-400">
                      <span>{leaveReceipt.id}</span>
                      <button
                        onClick={() => handleCopy(leaveReceipt.id)}
                        className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                        title="Copy Reference ID"
                      >
                        {copiedId === leaveReceipt.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Student Name</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{leaveReceipt.applicantName} s/o {leaveReceipt.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Leave Duration</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{leaveReceipt.startDate} to {leaveReceipt.endDate}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Leave Nature</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{leaveReceipt.leaveType}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Class Enrolled</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{leaveReceipt.classEnrolled}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Status</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {leaveReceipt.status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    The designated class teacher will review the leave record upon resumption of classes.
                  </p>
                  <button
                    onClick={() => {
                      setLeaveReceipt(null);
                      setLeaveForm({
                        applicantName: '',
                        fatherName: '',
                        classEnrolled: '',
                        leaveType: 'Medical / Sickness',
                        startDate: '',
                        endDate: '',
                        reason: '',
                        contactNumber: '',
                      });
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
                  >
                    Submit Another Leave Notice
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLeaveSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="leave-student-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Student Name *
                    </label>
                    <input
                      id="leave-student-name"
                      type="text"
                      required
                      value={leaveForm.applicantName}
                      onChange={(e) => setLeaveForm({ ...leaveForm, applicantName: e.target.value })}
                      placeholder="Student full name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="leave-father-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Father's Name *
                    </label>
                    <input
                      id="leave-father-name"
                      type="text"
                      required
                      value={leaveForm.fatherName}
                      onChange={(e) => setLeaveForm({ ...leaveForm, fatherName: e.target.value })}
                      placeholder="Father's name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="leave-class" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Class Enrolled *
                    </label>
                    <input
                      id="leave-class"
                      type="text"
                      required
                      value={leaveForm.classEnrolled}
                      onChange={(e) => setLeaveForm({ ...leaveForm, classEnrolled: e.target.value })}
                      placeholder="e.g. Nursery, KG, Class 2"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="leave-type-select" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Reason Category *
                    </label>
                    <select
                      id="leave-type-select"
                      value={leaveForm.leaveType}
                      onChange={(e) => setLeaveForm({ ...leaveForm, leaveType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Medical / Sickness">Medical / Sickness</option>
                      <option value="Urgent Personal Affair">Urgent Personal Affair</option>
                      <option value="Family Emergency">Family Emergency</option>
                      <option value="Other">Other Reason</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="leave-start-date" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      From Date *
                    </label>
                    <input
                      id="leave-start-date"
                      type="date"
                      required
                      value={leaveForm.startDate}
                      onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="leave-end-date" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      To Date (Inclusive) *
                    </label>
                    <input
                      id="leave-end-date"
                      type="date"
                      required
                      value={leaveForm.endDate}
                      onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="leave-reason-text" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Detailed Reason *
                    </label>
                    <textarea
                      id="leave-reason-text"
                      required
                      rows={3}
                      value={leaveForm.reason}
                      onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
                      placeholder="Briefly state the reason for student absence..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="leave-contact-phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Parent Contact Phone *
                    </label>
                    <input
                      id="leave-contact-phone"
                      type="tel"
                      required
                      value={leaveForm.contactNumber}
                      onChange={(e) => setLeaveForm({ ...leaveForm, contactNumber: e.target.value })}
                      placeholder="e.g. 0300-XXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    * Required for student attendance reconciliation
                  </span>
                  <button
                    type="submit"
                    id="btn-submit-leave-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-md shadow-emerald-900/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Leave Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: Anonymous Feedback & Suggestions */}
        {activeTab === 'feedback' && (
          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6">
            
            {/* Twice Per Week Availability Notice Banner */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500 text-white flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-amber-950 dark:text-amber-200 flex items-center gap-2">
                    <span>Twice-per-Week Anonymous Submission Window</span>
                    <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100">
                      Confirmed Policy
                    </span>
                  </div>
                  <p className="text-xs text-amber-800 dark:text-amber-300/90 mt-0.5 leading-relaxed">
                    Under the School Program specification, anonymous complaints and suggestions are reviewed twice per week. Your submission requires <strong>zero identity disclosure</strong> and is stored securely without student/parent identification.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Anonymous Feedback & Suggestion Box
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Direct submission channel for constructive improvements, complaints, or feedback.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                100% Identity Protected
              </span>
            </div>

            {feedbackReceipt ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-950 dark:text-emerald-200">
                        Anonymous Submission Delivered
                      </h4>
                      <p className="text-xs text-emerald-800 dark:text-emerald-300">
                        Your submission has been queued for institutional review in the upcoming semi-weekly review cycle.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white dark:bg-zinc-900 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800/60 text-xs">
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Anonymous Receipt Token</span>
                    <div className="flex items-center gap-2 font-mono font-bold text-sm text-emerald-700 dark:text-emerald-400">
                      <span>{feedbackReceipt.id}</span>
                      <button
                        onClick={() => handleCopy(feedbackReceipt.id)}
                        className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                        title="Copy Reference Token"
                      >
                        {copiedId === feedbackReceipt.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Category</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{feedbackReceipt.category} ({feedbackReceipt.feedbackType})</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 dark:text-zinc-400 block mb-0.5">Status</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {feedbackReceipt.status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    No personal identifier was collected or stored with this transmission.
                  </p>
                  <button
                    onClick={() => {
                      setFeedbackReceipt(null);
                      setFeedbackForm({
                        feedbackType: 'Suggestion',
                        category: 'Academics & Classroom',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
                  >
                    Submit Another Anonymous Feedback
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="feedback-type" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Nature of Submission *
                    </label>
                    <select
                      id="feedback-type"
                      value={feedbackForm.feedbackType}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, feedbackType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Suggestion">Constructive Suggestion</option>
                      <option value="Complaint">Formal Concern / Complaint</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="feedback-category" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Focus Area / Category *
                    </label>
                    <select
                      id="feedback-category"
                      value={feedbackForm.category}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, category: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Academics & Classroom">Academics & Classroom</option>
                      <option value="Campus Environment">Campus Environment</option>
                      <option value="Facilities">Facilities & Cleanliness</option>
                      <option value="Administration">Administration & Scheduling</option>
                      <option value="Other">Other Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="feedback-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Anonymous Message / Suggestion *
                  </label>
                  <textarea
                    id="feedback-message"
                    required
                    rows={4}
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                    placeholder="Provide your constructive feedback or complaint without including your personal identifying information..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>Transmitted without sender credentials or identity tracking.</span>
                  </div>
                  <button
                    type="submit"
                    id="btn-submit-feedback-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-md shadow-emerald-900/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Anonymously</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
