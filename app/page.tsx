import BlueprintScene from "@/components/BlueprintScene";
import { ArrowRight, Shield, Cpu, Terminal, Wrench, Zap, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans text-machined-silver bg-carbon-steel overflow-y-auto selection:bg-plasma-blue selection:text-black">
      
      {/* Background - Keeping the blueprint but overlaying darkness for the 'Industrial' feel */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 mix-blend-soft-light">
        <BlueprintScene />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-carbon-dark/80 via-carbon-steel/90 to-carbon-dark"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-sm bg-carbon-steel/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-plasma-blue rounded-sm flex items-center justify-center text-black font-black tracking-tighter">CU</div>
          <span className="font-bold tracking-widest text-lg text-white uppercase">Civive Unlimited</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] text-machined-dim">
          <a href="#vindicore" className="hover:text-plasma-blue transition-colors">VINDICORE</a>
          <a href="#agency" className="hover:text-plasma-blue transition-colors">AGENCY</a>
          <a href="#mission" className="hover:text-plasma-blue transition-colors">INTEL</a>
        </div>
        <button className="hidden md:block px-5 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/5 hover:border-plasma-blue hover:text-plasma-blue transition-all">
          Secure Login
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-20 px-6 md:px-24 max-w-8xl mx-auto">
        
        <div className="inline-flex items-center gap-3 px-4 py-2 border-l-4 border-plasma-blue bg-white/5 mb-10">
          <span className="text-plasma-blue uppercase font-mono text-xs tracking-widest">System Status:</span>
          <span className="text-white font-mono text-xs tracking-widest">ONLINE // V 2.0</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.85] uppercase">
          The First AI with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-plasma-blue to-white">
            Grease Under Its
          </span><br/>
          Fingernails.
        </h1>

        <p className="text-xl md:text-3xl text-machined-dim max-w-3xl font-light leading-relaxed mb-12 border-l border-white/10 pl-6">
          We don't build software for silicon valley. <br/>
          We build industrial-grade weaponry for the independent shop owner.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <button className="group px-10 py-5 bg-plasma-blue text-black font-black text-lg uppercase tracking-wider hover:bg-white transition-all flex items-center gap-3 clip-path-button">
            Deploy Vindicore <Zap className="w-5 h-5 group-hover:fill-black" />
          </button>
          <button className="px-10 py-5 border border-white/20 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-all">
            View Schematics
          </button>
        </div>

      </main>

      {/* The "Vindicore" Section */}
      <section id="vindicore" className="relative z-10 px-6 md:px-24 py-24 border-t border-white/10 bg-carbon-dark">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-plasma-blue font-mono text-sm tracking-widest mb-2">FLAGSHIP PRODUCT // VINDICORE</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">Automated Justice.</h3>
            </div>
            <p className="text-machined-dim max-w-md text-right md:text-left mt-6 md:mt-0 font-mono text-sm">
              Warranty companies rely on "Refusal by Friction."<br/>
              Vindicore relies on brute-force intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-white/10 bg-carbon-steel hover:border-plasma-blue/50 transition-colors group">
              <Shield className="w-12 h-12 text-white mb-6 group-hover:text-plasma-blue transition-colors" />
              <h4 className="text-2xl font-bold text-white mb-4 uppercase">Warranty Defense</h4>
              <p className="text-machined-dim leading-relaxed">
                Our LLMs ingest 60-page policy PDFs in seconds, cross-reference exclusion lists, and generate irrefutable technical justification letters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-white/10 bg-carbon-steel hover:border-plasma-blue/50 transition-colors group">
              <Wrench className="w-12 h-12 text-white mb-6 group-hover:text-plasma-blue transition-colors" />
              <h4 className="text-2xl font-bold text-white mb-4 uppercase">Tech-to-Text</h4>
              <p className="text-machined-dim leading-relaxed">
                Technicians hate typing. Vindicore turns rough voice notes into polished, legally-sound repair orders instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-white/10 bg-carbon-steel hover:border-plasma-blue/50 transition-colors group">
              <Lock className="w-12 h-12 text-white mb-6 group-hover:text-plasma-blue transition-colors" />
              <h4 className="text-2xl font-bold text-white mb-4 uppercase">Margin Guard</h4>
              <p className="text-machined-dim leading-relaxed">
                Real-time tracking of every dollar recovered. We don't just save you time; we add direct EBITDA to your bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section id="agency" className="relative z-10 px-6 md:px-24 py-24 bg-carbon-steel border-t border-white/10">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-8xl font-black text-white/5 absolute -ml-20 -mt-20 pointer-events-none select-none">ORIGIN</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 relative">
              "I didn't learn tech in a bootcamp. <br/>
              <span className="text-plasma-blue">I learned systems in the mechanical room."</span>
            </h3>
            <div className="space-y-6 text-lg text-machined-dim">
              <p>
                We are 25-year veterans. We know what it feels like to have a claim denied because of a typo. We know the smell of hydraulic fluid and the stress of payroll.
              </p>
              <p>
                Civive Unlimited isn't a startup. It's an industrial holding company dedicated to digitizing the trades without losing the soul of the work.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
               <div className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono uppercase">25 Years Exp</div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono uppercase">Full Stack</div>
               <div className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono uppercase">Cloud Native</div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-[400px] border border-white/10 bg-carbon-dark relative overflow-hidden group">
             {/* Placeholder for a rugged image or schematic */}
             <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-32 h-32 text-white/10 group-hover:text-plasma-blue/20 transition-all duration-500 scale-100 group-hover:scale-110" />
             </div>
             <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-md border-t border-white/10 flex justify-between font-mono text-xs text-white">
                <span>EST. 2025</span>
                <span>SPRINGFIELD, MO</span>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-carbon-dark text-machined-dim py-12 px-6 border-t border-white/10 font-mono text-xs">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-white text-base tracking-widest uppercase">CIVIVE UNLIMITED</span><br/>
            <span>© 2026. All Systems Nominal.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-plasma-blue uppercase tracking-widest">GitHub</a>
            <a href="#" className="hover:text-plasma-blue uppercase tracking-widest">Twitter</a>
            <a href="#" className="hover:text-plasma-blue uppercase tracking-widest">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
