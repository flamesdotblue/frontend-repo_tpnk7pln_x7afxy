import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CVUploader from "./components/CVUploader";
import Features from "./components/Features";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <CVUploader />
        <Features />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} TalentHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
