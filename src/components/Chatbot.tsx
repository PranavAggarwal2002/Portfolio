import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{role: 'user'|'ai', content: string}[]>([
    { role: 'ai', content: 'SYSTEM INITIALIZED. Ask me anything about Pranav\'s projects, tech stack, or experience.' }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { role: 'user', content: input }])
    const query = input
    setInput("")
    
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: `Processing query: "${query}". Based on Pranav's profile, he utilizes React, Node.js, and AWS for scalable systems. His Kaggle rank (Top 1.2%) highlights tabular ML expertise.` }])
    }, 800)
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 brutal-btn bg-accent text-accent-fg flex items-center gap-2 !px-4 !py-3 shadow-2xl"
      >
        <MessageSquare className="h-5 w-5" />
        <span>ASK AI ASSISTANT</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 bg-background border-l-2 border-border brutal-shadow flex flex-col font-mono"
          >
            <div className="flex items-center justify-between p-4 border-b-2 border-border bg-accent text-accent-fg">
              <div className="font-bold flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>AI_ASSISTANT_v1.0</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-sm brutal-border ${m.role === 'user' ? 'bg-accent text-accent-fg' : 'bg-background text-foreground'}`}>
                    {m.role === 'ai' && <div className="text-xs mb-1 opacity-50 font-bold">[SYS_MSG]</div>}
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t-2 border-border bg-background">
              <form 
                onSubmit={e => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Query parameters..."
                  className="flex-1 bg-transparent border-2 border-border px-3 py-2 text-sm outline-none placeholder:text-muted-fg focus:bg-accent focus:text-accent-fg transition-colors"
                />
                <button type="submit" className="brutal-btn !px-3">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
