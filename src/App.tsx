import { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { CommandPalette } from "./components/CommandPalette"
import { Chatbot } from "./components/Chatbot"
import { ProfileSection } from "./sections/ProfileSection"
import { FlagshipSection } from "./sections/FlagshipSection"
import { WorkSection } from "./sections/WorkSection"
import { ExperienceSection } from "./sections/ExperienceSection"
import { NowSection } from "./sections/NowSection"
import { CollaborateSection } from "./sections/CollaborateSection"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [cmdkOpen, setCmdkOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="min-h-screen">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} openCmdk={() => setCmdkOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 lg:px-8">
        <ProfileSection />
        <FlagshipSection />
        <WorkSection />
        <ExperienceSection />
        <NowSection />
        <CollaborateSection />
      </main>

      <CommandPalette 
        open={cmdkOpen} 
        setOpen={setCmdkOpen} 
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
      
      <Chatbot />
    </div>
  )
}

export default App
