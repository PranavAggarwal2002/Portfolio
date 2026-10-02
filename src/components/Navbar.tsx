import { Moon, Sun, Search } from "lucide-react"

export function Navbar({ toggleTheme, isDark, openCmdk }: { toggleTheme: () => void, isDark: boolean, openCmdk: () => void }) {
  return (
    <nav className="fixed top-0 w-full z-40 border-b-2 border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg tracking-tighter">PRANAV AGGARWAL</span>
          <span className="hidden md:inline-block bg-accent text-accent-fg px-2 py-1 text-xs font-bold brutal-border">FULL-STACK / ML</span>
        </div>
        
        <div className="hidden lg:flex gap-6 font-semibold">
          {["PROFILE", "FLAGSHIP", "WORK", "EXPERIENCE", "NOW", "COLLABORATE"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline underline-offset-4 decoration-2 decoration-border">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={openCmdk} className="brutal-btn flex items-center gap-2 !px-3 !py-1.5 text-xs">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">SEARCH ⌘K</span>
          </button>
          <button onClick={toggleTheme} className="brutal-btn !px-2 !py-1.5">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
