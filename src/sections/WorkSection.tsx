import * as Accordion from "@radix-ui/react-accordion"
import { ArrowUpRight } from "lucide-react"

export function WorkSection() {
  const mlProjects = [
    {
      title: "Heavy Equipment Price Prediction",
      rank: "Top 1.2% Kaggle",
      desc: "Predicted heavy equipment prices using LightGBM/XGBoost. Evaluated on RMSLE.",
      tag: "Tabular ML"
    },
    {
      title: "Smart MCQ Solver Challenge",
      rank: "Top 3.5% IIT Madras",
      desc: "AI system using Siamese Bi-LSTM and RoBERTa to rank top 3 correct answers using MAP@3 evaluation.",
      tag: "NLP"
    },
    {
      title: "ECG Heartbeat Arrhythmia Classification",
      rank: "Research",
      desc: "Multiclass time-series classification of ECG signals into 4 categories using Macro F1-Score.",
      tag: "Time-Series"
    },
    {
      title: "Flight Ticket Price Prediction",
      rank: "Kaggle",
      desc: "Predicted prices using statistical analysis and CatBoost.",
      tag: "Tabular ML"
    }
  ]

  const fsProjects = [
    { id: "01", title: "Trekking Management App", domain: "Web App", stack: "Flask, Vue.js, SQLite, Redis", link: "Repo", linkUrl: "" },
    { id: "02", title: "Placement Portal", domain: "Web App", stack: "Flask, Vue.js, Celery, Redis", link: "Repo", linkUrl: "" },
    { id: "03", title: "Business Analytics Capstone", domain: "Data Eng", stack: "Python, Pandas", link: "Report", linkUrl: "" },
    { id: "04", title: "Smart Baby Monitor", domain: "IoT", stack: "RF Transceivers, Sensors", link: "View", linkUrl: "" },
    { id: "05", title: "Smart Parking System", domain: "Hardware", stack: "Bluetooth, FASTag", link: "View", linkUrl: "" }
  ]

  return (
    <section id="work" className="py-24 border-t-2 border-border">
      <div className="mb-8 font-mono font-bold text-sm text-muted-fg tracking-widest">
        [02] WORK
      </div>
      
      <div className="mb-12">
        <h3 className="font-mono text-2xl font-bold mb-6 border-b-2 border-border pb-2 inline-block">MACHINE_LEARNING & AI</h3>
        
        <Accordion.Root type="single" collapsible className="w-full space-y-4">
          {mlProjects.map((p, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="brutal-border bg-background overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-muted transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <span className="font-mono font-bold text-accent">0{i+1}</span>
                    <span className="font-bold text-lg md:text-xl">{p.title}</span>
                    <span className="inline-block px-2 py-1 bg-accent text-accent-fg font-mono text-xs font-bold border-2 border-border w-fit">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block font-mono text-sm text-muted-fg">{p.rank}</span>
                    <span className="text-2xl leading-none group-data-[state=open]:rotate-45 transition-transform">+</span>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="border-t-2 border-border p-4 md:p-6 bg-muted/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                <div className="md:hidden font-mono text-sm font-bold text-muted-fg mb-2">RANK: {p.rank}</div>
                <p className="font-medium max-w-3xl">{p.desc}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <div>
        <h3 className="font-mono text-2xl font-bold mb-6 border-b-2 border-border pb-2 inline-block">FULL_STACK & HARDWARE</h3>
        
        <div className="overflow-x-auto brutal-border bg-background shadow-[4px_4px_0_0_var(--border)]">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-accent text-accent-fg border-b-2 border-border">
              <tr>
                <th className="p-4 border-r-2 border-border font-bold">INDEX</th>
                <th className="p-4 border-r-2 border-border font-bold">PROJECT</th>
                <th className="p-4 border-r-2 border-border font-bold hidden md:table-cell">DOMAIN</th>
                <th className="p-4 border-r-2 border-border font-bold hidden lg:table-cell">STACK</th>
                <th className="p-4 font-bold">LINK</th>
              </tr>
            </thead>
            <tbody>
              {fsProjects.map((p, i) => (
                <tr key={i} className="border-b-2 border-border last:border-0 hover:bg-muted transition-colors">
                  <td className="p-4 border-r-2 border-border font-bold text-muted-fg">{p.id}</td>
                  <td className="p-4 border-r-2 border-border font-bold">{p.title}
                    <div className="md:hidden mt-1 text-xs text-muted-fg">{p.domain}</div>
                    <div className="lg:hidden mt-1 text-xs text-muted-fg opacity-70">{p.stack}</div>
                  </td>
                  <td className="p-4 border-r-2 border-border hidden md:table-cell">{p.domain}</td>
                  <td className="p-4 border-r-2 border-border hidden lg:table-cell">{p.stack}</td>
                  <td className="p-4">
                    <a href={p.linkUrl || "https://github.com/PranavAggarwal2002"} target="_blank" className="flex items-center gap-1 hover:underline underline-offset-4 decoration-2 decoration-border">
                      {p.link} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
