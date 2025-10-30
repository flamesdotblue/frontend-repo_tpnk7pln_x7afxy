import { Briefcase, Mail, Calendar, Users } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
            <Briefcase size={20} />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-slate-900 text-xl">TalentHub</p>
            <p className="text-xs text-slate-500">Recruitment Management</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#uploader" className="hover:text-indigo-600 transition-colors">CV Parsing</a>
          <a href="#emails" className="hover:text-indigo-600 transition-colors">Emails</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Calendar size={16} />
            Schedule Demo
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
            <Mail size={16} />
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
