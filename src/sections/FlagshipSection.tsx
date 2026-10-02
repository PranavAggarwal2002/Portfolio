import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Server, ShieldAlert, Cpu, CheckCircle } from "lucide-react"
import * as Accordion from "@radix-ui/react-accordion"

export function FlagshipSection() {
  const [step, setStep] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setStep(s => s >= 4 ? 1 : s + 1)
    }, 3000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const steps = [
    { id: 1, title: "01 Intake", desc: "Vendor sends payment request to AWS Risk Engine.", icon: <Server className="w-6 h-6" /> },
    { id: 2, title: "02 Analysis", desc: "Engine compares request against historical behavioral profile (amount, velocity, location).", icon: <Cpu className="w-6 h-6" /> },
    { id: 3, title: "03 Classification", desc: "System scores risk (LOW = Auto-approve; MED/HIGH/CRITICAL = Pending Review).", icon: <ShieldAlert className="w-6 h-6" /> },
    { id: 4, title: "04 Human Decision", desc: "Finance team reviews flagged requests via SNS alerts on dashboard.", icon: <CheckCircle className="w-6 h-6" /> }
  ]

  return (
    <section id="flagship" className="py-24 border-t-2 border-border">
      <div className="mb-8 font-mono font-bold text-sm text-muted-fg tracking-widest">
        [01] CURRENT BUILD
      </div>

      <div className="brutal-card bg-foreground text-background mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">FinSight</h2>
          <p className="font-mono text-background/80">Cloud-Based Financial Risk Intelligence Platform on AWS.</p>
        </div>
        <button className="brutal-btn bg-background text-foreground shrink-0 border-background flex items-center gap-2">
          Explore Architecture <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="font-mono font-bold text-lg border-b-2 border-border pb-4 mb-4">PROBLEM_STATEMENT</div>
          <p className="mb-8 leading-relaxed">
            Organizations process massive vendor payment requests. Manual review delays legitimate payments, while sophisticated anomalies slip through basic filters.
          </p>

          <Accordion.Root type="single" collapsible className="w-full">
            <Accordion.Item value="item-1" className="brutal-border mb-2 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full bg-background flex items-center justify-between p-4 font-mono font-bold hover:bg-accent hover:text-accent-fg transition-colors">
                  TECH STACK
                  <span className="text-xl leading-none">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="p-4 bg-muted border-t-2 border-border font-mono text-sm leading-relaxed overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                AWS Lambda, API Gateway, S3, DynamoDB, SNS, CloudWatch, IAM.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>

        <div className="lg:col-span-8 brutal-card p-0 overflow-hidden flex flex-col">
          <div className="border-b-2 border-border p-4 bg-muted flex items-center justify-between font-mono font-bold text-sm">
            <span>INTERACTIVE_ARCHITECTURE_VIEW</span>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2 py-1 brutal-border bg-background hover:bg-accent hover:text-accent-fg"
            >
              {isPlaying ? "PAUSE ||" : "PLAY ▶"}
            </button>
          </div>
          
          <div className="p-6 md:p-10 flex-1 relative min-h-[300px] flex items-center justify-center bg-background">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--border) 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background brutal-border p-6 shadow-[8px_8px_0_0_var(--border)]"
                >
                  <div className="flex items-center gap-4 mb-4 text-accent">
                    <div className="p-3 bg-border text-background rounded-none">
                      {steps[step - 1].icon}
                    </div>
                    <h3 className="text-xl font-bold font-mono">{steps[step - 1].title}</h3>
                  </div>
                  <p className="font-medium">{steps[step - 1].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t-2 border-border flex">
            {steps.map((s) => (
              <button 
                key={s.id}
                onClick={() => { setStep(s.id); setIsPlaying(false); }}
                className={`flex-1 p-3 font-mono text-xs font-bold border-r-2 border-border last:border-0 transition-colors ${step === s.id ? 'bg-accent text-accent-fg' : 'bg-background hover:bg-muted'}`}
              >
                {s.id.toString().padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
