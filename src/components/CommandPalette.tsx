import { useEffect } from "react"
import { Command } from "cmdk"
import { Search, Moon, Sun, Download, Code, Users, LineChart, FileText } from "lucide-react"

export function CommandPalette({ open, setOpen, toggleTheme, isDark }: { open: boolean, setOpen: (open: boolean) => void, toggleTheme: () => void, isDark: boolean }) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div 
        className="brutal-card w-full max-w-xl bg-background text-foreground shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <Command label="Command Menu" className="flex flex-col outline-none">
          <div className="flex items-center border-b-2 border-border px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input 
              autoFocus
              placeholder="Type a command or search..." 
              className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-fg disabled:cursor-not-allowed disabled:opacity-50 font-mono"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 font-mono">
            <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
            
            <Command.Group heading="Navigate" className="px-2 py-1.5 text-xs font-medium text-muted-fg">
              {["Profile 00", "Flagship 01", "Work 02", "Experience 03", "Now 04", "Collaborate 05"].map((item) => {
                const sectionId = item.split(' ')[0].toLowerCase()
                return (
                  <Command.Item 
                    key={item}
                    onSelect={() => {
                      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
                      setOpen(false)
                    }}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-fg data-[selected=true]:bg-accent data-[selected=true]:text-accent-fg"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    <span>{item}</span>
                  </Command.Item>
                )
              })}
            </Command.Group>

            <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-medium text-muted-fg mt-2">
              <Command.Item 
                onSelect={() => {
                  toggleTheme()
                  setOpen(false)
                }}
                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-fg data-[selected=true]:bg-accent data-[selected=true]:text-accent-fg"
              >
                {isDark ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                <span>Toggle Theme</span>
              </Command.Item>
              <Command.Item onSelect={() => { window.open('https://drive.google.com/file/d/1Hss8v_q5fawOxOV_vOkRbpiy2ygNIrnB/view?usp=sharing', '_blank'); setOpen(false); }} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-fg data-[selected=true]:bg-accent data-[selected=true]:text-accent-fg">
                <Download className="mr-2 h-4 w-4" />
                <span>Download CV</span>
              </Command.Item>
              <Command.Item onSelect={() => { window.open('https://github.com/PranavAggarwal2002', '_blank'); setOpen(false); }} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-fg data-[selected=true]:bg-accent data-[selected=true]:text-accent-fg">
                <Code className="mr-2 h-4 w-4" />
                <span>Open GitHub</span>
              </Command.Item>
              <Command.Item onSelect={() => { window.open('https://www.linkedin.com/in/pranavaggarwal2002/', '_blank'); setOpen(false); }} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-fg data-[selected=true]:bg-accent data-[selected=true]:text-accent-fg">
                <Users className="mr-2 h-4 w-4" />
                <span>Open LinkedIn</span>
              </Command.Item>
              <Command.Item onSelect={() => { window.open('https://www.kaggle.com/navstack', '_blank'); setOpen(false); }} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-fg data-[selected=true]:bg-accent data-[selected=true]:text-accent-fg">
                <LineChart className="mr-2 h-4 w-4" />
                <span>Open Kaggle</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
