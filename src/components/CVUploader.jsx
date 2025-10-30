import { useState, useMemo } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

const ACCEPTED = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"]; // pdf, doc, docx, txt

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB"]; 
  if (bytes === 0) return "0 Byte"; 
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
}

function extractPlainText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function quickScore(text, keywords) {
  if (!text) return 0;
  const hay = text.toLowerCase();
  const hits = keywords.filter(k => hay.includes(k.toLowerCase())).length;
  return Math.round((hits / Math.max(1, keywords.length)) * 100);
}

export default function CVUploader() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [score, setScore] = useState(null);

  const jobKeywords = useMemo(() => [
    "react", "javascript", "typescript", "frontend", "ui", "css", "tailwind", "testing", "accessibility"
  ], []);

  const onDrop = async (e) => {
    e.preventDefault();
    setError("");
    setText("");
    setScore(null);

    const f = e.dataTransfer?.files?.[0] || e.target.files?.[0];
    if (!f) return;

    // validation
    if (!ACCEPTED.includes(f.type)) {
      setError("Unsupported file type. Please upload PDF, DOC, DOCX, or TXT.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setError("File too large. Max 5MB.");
      return;
    }

    setFile(f);

    try {
      if (f.type === "text/plain") {
        const content = await extractPlainText(f);
        setText(content.slice(0, 4000));
        const s = quickScore(content, jobKeywords);
        setScore(s);
      } else {
        // For PDF/DOC/DOCX we showcase the local-first flow without external libs.
        // Parsing libraries (PDF.js/Mammoth) can be added later; UI stays the same.
        setText("");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to read file. Please try another document.");
    }
  };

  return (
    <section id="uploader" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center transition hover:border-indigo-400"
          >
            <input
              type="file"
              accept={ACCEPTED.join(",")}
              onChange={onDrop}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              aria-label="Upload CV"
            />
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <Upload />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Upload your CV</h3>
            <p className="mt-1 text-sm text-slate-600">Drag & drop or click to upload PDF/DOC/DOCX/TXT. Max 5MB.</p>
            {file && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
                <FileText size={14} /> {file.name} · {bytesToSize(file.size)}
              </div>
            )}
            {error && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                <AlertCircle size={16} /> {error}
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium text-indigo-600">Local AI Preview</p>
              {text ? (
                <>
                  <p className="mt-2 text-sm text-slate-600">Extracted text (first 500 chars):</p>
                  <pre className="mt-2 max-h-40 overflow-auto rounded-md bg-slate-50 p-3 text-xs text-slate-800 whitespace-pre-wrap">
                    {text.slice(0, 500)}
                  </pre>
                </>
              ) : (
                <p className="mt-2 text-sm text-slate-600">Text preview will appear here after local parsing. TXT is fully supported out of the box.</p>
              )}
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium text-indigo-600">Quick Screening</p>
              {score !== null ? (
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-600"><CheckCircle2 size={18} /> Match score</div>
                  <div className="text-2xl font-extrabold text-slate-900">{score}%</div>
                </div>
              ) : (
                <div className="mt-3 flex items-center gap-2 text-slate-600"><Sparkles size={18} /> Upload to generate a match score</div>
              )}
              <div className="mt-4">
                <p className="text-xs font-medium text-slate-500">Screening keywords</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {jobKeywords.map((k) => (
                    <span key={k} className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700">{k}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Privacy first</p>
            <p className="mt-1 text-sm text-slate-600">Parsing runs entirely in the browser. Your documents never leave your device.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Formats</p>
            <p className="mt-1 text-sm text-slate-600">PDF, DOC, DOCX, and TXT supported. This demo previews TXT immediately.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">Scoring</p>
            <p className="mt-1 text-sm text-slate-600">Simple keyword match to illustrate local screening. Customize for role requirements.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
