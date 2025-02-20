"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "ProsperOn",
    period: "Jan 2025 - Present",
    responsibilities: [
      "Led frontend optimization initiatives that achieved 30% faster page loads across devices.",
      "Specialized in React development, API integration, and cross-browser compatibility.", 
      "Strong focus on collaborative development through detailed documentation and systematic code reviews to ensure platform stability.",
    ],
  }
]

const Experience = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="bg-secondary p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-accent mb-2">{exp.company}</p>
            <p className="text-muted-foreground mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-muted-foreground">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

