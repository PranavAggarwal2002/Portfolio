import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen } from "lucide-react"

export function NowSection() {
  const [activeTab, setActiveTab] = useState("CLOUD ARCHITECTURE")
  const timestamp = new Date().toISOString()

  const tabs = [
    {
      id: "CLOUD ARCHITECTURE",
      content: "Exploring advanced AWS serverless patterns, focusing on event-driven architectures, DynamoDB single-table design, and scaling real-time WebSocket APIs."
    },
    {
      id: "TIME-SERIES ML",
      content: "Diving deep into state-of-the-art time-series forecasting. Comparing transformer-based architectures against gradient boosting for high-frequency financial data."
    },
    {
      id: "IOT NETWORKS",
      content: "Experimenting with low-power wide-area networks (LPWAN) and edge computing. Building custom telemetry protocols for resource-constrained microcontrollers."
    }
  ]

  const publications = [
    { name: "10th ISFT-2024", title: "Wireless Power Transfer on Roads for Electric Cars" },
    { name: "30th CONIAPS-2024", title: "Gesture Vision Assist" },
    { name: "30th CONIAPS-2024", title: "Intelligent Street Illumination Network" }
  ]

  return (
    <section id="now" className="py-24 border-t-2 border-border">
      <div className="mb-8 font-mono font-bold text-sm text-muted-fg tracking-widest flex items-center justify-between">
        <span>[04] NOW</span>
        <span className="hidden sm:inline bg-border text-background px-2 py-1">{timestamp}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Curious About */}
        <div>
          <h2 className="text-3xl font-bold mb-8">BUILDING, LEARNING, CURIOUS ABOUT</h2>
          
          <div className="flex flex-wrap gap-2 mb-6 font-mono text-sm font-bold">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`brutal-border px-3 py-1.5 transition-colors ${activeTab === tab.id ? 'bg-accent text-accent-fg' : 'bg-background hover:bg-muted'}`}
              >
                {tab.id}
              </button>
            ))}
          </div>

          <div className="brutal-card min-h-[120px] bg-muted/50 flex items-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="font-medium leading-relaxed"
              >
                {tabs.find(t => t.id === activeTab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="text-3xl font-bold mb-8">PUBLICATIONS & RESEARCH</h2>
          
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="flex gap-4 items-start border-b-2 border-border pb-4 last:border-0">
                <div className="mt-1 bg-accent text-accent-fg p-1.5 brutal-border">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight mb-1">{pub.title}</div>
                  <div className="font-mono text-sm text-muted-fg font-bold">{pub.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
