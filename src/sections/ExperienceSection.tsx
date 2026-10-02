import * as Accordion from "@radix-ui/react-accordion"

export function ExperienceSection() {
  const experiences = [
    {
      company: "Grant Thornton Bharat LLP",
      role: "Web Developer Associate",
      duration: "6 Mos",
      desc: "Built 8+ treasury-focused concurrent audit modules. Automated validation of 100,000+ financial records. Accelerated audit processing by 80%."
    },
    {
      company: "Json Singh",
      role: "Web Developer Intern",
      duration: "3 Mos",
      desc: "Created map-based applications using React, TypeScript, Tailwind, Node.js, and MapLibre."
    },
    {
      company: "Acintyo Enterprises Pvt. Ltd.",
      role: "App Developer Intern",
      duration: "6 Mos",
      desc: "Developed features for Galarm and Futuregrams Android apps using Kotlin and Python."
    }
  ]

  return (
    <section id="experience" className="py-24 border-t-2 border-border">
      <div className="mb-8 font-mono font-bold text-sm text-muted-fg tracking-widest">
        [03] EXPERIENCE
      </div>

      <div className="relative border-l-2 border-border ml-2 sm:ml-4 lg:ml-8 pl-6 sm:pl-8 lg:pl-12 py-4">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-12 last:mb-0 relative">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] lg:-left-[55px] top-1.5 w-4 h-4 bg-background border-2 border-border"></div>
            
            <Accordion.Root type="single" collapsible defaultValue={i === 0 ? "item-0" : undefined}>
              <Accordion.Item value={`item-${i}`} className="brutal-border bg-background shadow-[4px_4px_0_0_var(--border)] overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full text-left p-4 md:p-6 hover:bg-muted transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="font-bold text-xl md:text-2xl mb-1">{exp.company}</h4>
                      <div className="font-mono text-sm font-bold text-muted-fg">
                        {exp.role} // <span className="text-accent">{exp.duration}</span>
                      </div>
                    </div>
                    <span className="text-2xl leading-none group-data-[state=open]:rotate-45 transition-transform self-end md:self-auto">+</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="border-t-2 border-border p-4 md:p-6 bg-muted/30 font-medium leading-relaxed data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                  {exp.desc}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        ))}
      </div>
    </section>
  )
}
