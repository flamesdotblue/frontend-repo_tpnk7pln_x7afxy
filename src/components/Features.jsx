import { Shield, Users, Calendar, Mail, FileText, ListChecks, BarChart3, Lock } from "lucide-react";

const features = [
  { icon: BarChart3, title: "AI‑Powered Screening", desc: "Automatically evaluate candidates against job requirements with transparent scoring." },
  { icon: FileText, title: "Local CV Parsing", desc: "Parse PDFs and Word documents in the browser—no external APIs or vendor lock‑in." },
  { icon: Mail, title: "Email Automation", desc: "Send confirmations, rejections, interviews, and offers with branded templates." },
  { icon: Calendar, title: "Interview Scheduling", desc: "Coordinate interviews with integrated calendar flows and reminders." },
  { icon: ListChecks, title: "Application Management", desc: "Track the entire candidate lifecycle with statuses and notes." },
  { icon: Users, title: "Role‑Based Access", desc: "Admin, HR, Interviewer, and Hiring Manager roles with least‑privilege access." },
  { icon: Shield, title: "Assessment Matrix", desc: "Structured evaluation criteria across skills, culture, and potential." },
  { icon: Lock, title: "Privacy‑First", desc: "Data stays on the device during parsing. Export insights without raw CV data." },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Everything you need to hire with confidence</h2>
        <p className="mt-3 text-slate-600">From parsing to offer, TalentHub streamlines every step of the recruitment journey.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
