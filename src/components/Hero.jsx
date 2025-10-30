import { Rocket, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
              <Sparkles size={14} /> Local AI CV Parsing — Private by Design
            </div>
            <h1 className="mt-4 font-extrabold tracking-tight text-slate-900 text-4xl sm:text-5xl leading-tight">
              Hire faster with a privacy‑first recruitment platform
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              TalentHub brings parsing, screening, scheduling, and communication together. Everything runs in the browser—no external APIs or vendor lock‑in.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#uploader" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Rocket size={16} /> Try CV Parser
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
                <Shield size={16} /> Explore Features
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Offline capable</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> No per‑document fees</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Secure & compliant</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Instant processing</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-6">
                <div className="grid h-full grid-cols-2 gap-4">
                  <div className="rounded-lg border border-indigo-200 bg-white/70 p-4 shadow-sm">
                    <p className="text-xs font-medium text-indigo-600">AI Screening</p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">92%</p>
                    <p className="text-xs text-slate-500">Match for Frontend Engineer</p>
                  </div>
                  <div className="rounded-lg border border-indigo-200 bg-white/70 p-4 shadow-sm">
                    <p className="text-xs font-medium text-indigo-600">Skills</p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center justify-between text-xs"><span>React</span><span className="font-semibold">Advanced</span></div>
                      <div className="flex items-center justify-between text-xs"><span>TypeScript</span><span className="font-semibold">Advanced</span></div>
                      <div className="flex items-center justify-between text-xs"><span>UI/UX</span><span className="font-semibold">Intermediate</span></div>
                    </div>
                  </div>
                  <div className="col-span-2 rounded-lg border border-indigo-200 bg-white/70 p-4 shadow-sm">
                    <p className="text-xs font-medium text-indigo-600">Highlights</p>
                    <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <li className="rounded-md bg-indigo-50 px-2 py-1">Led migration to React</li>
                      <li className="rounded-md bg-indigo-50 px-2 py-1">Improved performance 30%</li>
                      <li className="rounded-md bg-indigo-50 px-2 py-1">Mentored 3 engineers</li>
                      <li className="rounded-md bg-indigo-50 px-2 py-1">A11y champion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-200/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
