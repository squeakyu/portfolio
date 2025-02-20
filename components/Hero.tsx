"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-accent">Richard Lu</span> 👋
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            I'm a full stack developer based in Boston. I build high-quality web applications with a focus on
            performance and user experience.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/squeakyu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/richard-lu12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[400px] h-[500px]">
            
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-[30px] blur-2xl"></div>

            <div className="relative h-full rounded-[30px] overflow-hidden border border-accent/20 shadow-xl">
              <Image
                src="images/RichardLu.jpg"
                alt="Richard Lu"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

