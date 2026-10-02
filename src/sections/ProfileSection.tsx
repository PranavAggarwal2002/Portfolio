import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ProfileSection() {
  const roles = ["Full-Stack Development", "Machine Learning", "Cloud Architecture", "Microsoft Data Engineer"]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="profile" className="pt-32 pb-16 min-h-[90vh] flex flex-col justify-center">
      <div className="mb-4 font-mono font-bold text-sm text-muted-fg tracking-widest">
        [00] PROFILE
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Left Column */}
        <div>
          <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs font-bold">
            <span className="brutal-border px-2 py-1">FULL-STACK DEVELOPER</span>
            <span className="brutal-border px-2 py-1 bg-accent text-accent-fg">AI / ML ENGINEER</span>
            <span className="brutal-border px-2 py-1">AWS CERTIFIED CLOUD PRACTITIONER</span>
            <span className="brutal-border px-2 py-1 bg-accent text-accent-fg">MICROSOFT CERTIFIED FABRIC DATA ENGINEER</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.1] mb-6">
            Building scalable systems <br/>
            <span className="inline-block mt-2 min-h-[1.2em] text-muted-fg font-mono tracking-normal text-xl sm:text-2xl md:text-3xl xl:text-4xl whitespace-nowrap">
              [ <motion.span 
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="inline-block text-foreground"
                >
                  {roles[roleIndex]}
                </motion.span> ]
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-xl font-medium leading-relaxed mb-10">
            I am a Full-Stack Developer and ML enthusiast skilled in React, Node.js, Python, and AWS. I build responsive frontend applications, scalable backend services, and apply machine learning to develop practical, data-driven solutions.
          </p>

          <div className="font-mono text-xs font-bold border-2 border-border p-4 bg-background">
            <div className="text-muted-fg mb-4">SYSTEM PIPELINE_</div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 justify-between relative">
              <div className="hidden sm:block absolute top-1/2 left-0 w-full h-[2px] bg-border -z-10 -translate-y-1/2"></div>
              
              <div className="bg-background border-2 border-border px-3 py-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground animate-pulse"></div>
                01 DATA ACQUISITION
              </div>
              <div className="bg-background border-2 border-border px-3 py-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-foreground animate-pulse"></div>
                02 SYSTEM ARCHITECTURE
              </div>
              <div className="bg-accent text-accent-fg border-2 border-border px-3 py-1 flex items-center gap-2">
                <div className="w-2 h-2 bg-background animate-pulse"></div>
                03 DEPLOYMENT
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Profile Card) */}
        <div className="lg:pl-12">
          <div className="brutal-card relative group">
            <div className="absolute -top-3 -right-3 bg-accent text-accent-fg font-mono text-xs font-bold px-2 py-1 brutal-border z-10">
              FIG. 00
            </div>
            <div className="aspect-square bg-muted brutal-border mb-6 flex items-center justify-center overflow-hidden grayscale-0 hover:grayscale dark:grayscale dark:hover:grayscale-0 transition-all duration-500">
               <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Pranav Aggarwal" className="object-cover w-full h-full" />
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="border-t-2 border-border pt-4">
                <div className="text-muted-fg font-bold mb-1">EDUCATION</div>
                <div>IIT Madras - BS Data Science</div>
                <div>J.C. Bose UST - B.Tech IoT</div>
              </div>
              <div className="border-t-2 border-border pt-4">
                <div className="text-muted-fg font-bold mb-1">CERTIFICATIONS</div>
                <div>AWS Cloud Practitioner</div>
                <div>Microsoft Fabric Data Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
