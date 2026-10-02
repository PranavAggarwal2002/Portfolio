import { ArrowUpRight, Code, Users, Mail, FileText, GraduationCap } from "lucide-react"

export function CollaborateSection() {
  return (
    <section id="collaborate" className="pt-24 border-t-2 border-border">
      <div className="mb-8 font-mono font-bold text-sm text-muted-fg tracking-widest">
        [05] COLLABORATE
      </div>

      <div className="brutal-card bg-accent text-accent-fg mb-24 px-6 py-12 md:p-16 lg:p-24 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--background) 2px, transparent 2px), linear-gradient(90deg, var(--background) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">
          <div className="flex-1 font-mono font-bold space-y-6 text-lg sm:text-xl md:text-2xl w-full">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-background hidden sm:block"></div>
              <span>Recruiters</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-background hidden sm:block"></div>
              <span>Founders</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-background hidden sm:block"></div>
              <span>Open-source contributors</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              What could we build together?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 font-mono font-bold">
              <a href="mailto:pranawal2002@gmail.com" className="brutal-btn bg-background text-foreground hover:bg-muted inline-flex items-center justify-center gap-2">
                Start a conversation <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://drive.google.com/file/d/1Hss8v_q5fawOxOV_vOkRbpiy2ygNIrnB/view?usp=sharing" target="_blank" className="brutal-btn bg-accent text-accent-fg border-background shadow-[4px_4px_0_0_var(--background)] hover:shadow-[2px_2px_0_0_var(--background)] inline-flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> View Résumé
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-border py-8 flex flex-col justify-center items-center gap-6 font-mono text-sm font-bold">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:pranawal2002@gmail.com" className="p-2 brutal-border hover:bg-accent hover:text-accent-fg transition-colors group relative">
            <Mail className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/pranavaggarwal2002/" target="_blank" className="p-2 brutal-border hover:bg-accent hover:text-accent-fg transition-colors group relative">
            <Users className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
          </a>
          <a href="https://github.com/PranavAggarwal2002" target="_blank" className="p-2 brutal-border hover:bg-accent hover:text-accent-fg transition-colors group relative">
            <Code className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">GitHub</span>
          </a>
          <a href="https://www.kaggle.com/navstack" target="_blank" className="p-2 brutal-border hover:bg-accent hover:text-accent-fg transition-colors group relative flex items-center justify-center w-10 h-10">
            <span className="font-sans font-black text-xl leading-none">k</span>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Kaggle</span>
          </a>
          <a href="https://ds.study.iitm.ac.in/student/21F1001682" target="_blank" className="p-2 brutal-border hover:bg-accent hover:text-accent-fg transition-colors group relative">
            <GraduationCap className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">IITM Profile</span>
          </a>
        </div>
        <div className="text-muted-fg text-center">COPYRIGHT 2026 PRANAV AGGARWAL</div>
      </footer>
    </section>
  )
}
