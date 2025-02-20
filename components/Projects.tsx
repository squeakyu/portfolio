"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Fitness Tracker App",
    description:
      "A fitness tracker application allowing users to monitor activities, manage data offline, and track workouts.",
    image: "/fitness.jpg",
    technologies: ["MongoDB", "Express.js", "Node.js", "React", "Tailwind CSS"],
    demoLink: "",
    codeLink: "",
  },
  {
    title: "Task Management App",
    description: "An application for managing tasks and projects, with features such as CRUD, secure user authentication, and progress tracking.",
    image: "/task-management-app.jpg",
    technologies: ["React", "PostgreSQL", "Node.js", "Express.js", "Tailwind CSS"],
    demoLink: "",
    codeLink: "",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-secondary p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:flex md:space-x-6">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {/* <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-accent-foreground px-4 py-2 rounded hover:bg-accent/80 transition-colors"
                  >
                    View Code
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

