"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-muted-foreground mb-4">
          I'm a full stack developer with a passion for creating efficient and user-friendly applications. With over
          4 years of experience in the field, I've developed a strong foundation in both frontend and backend
          technologies.
        </p>
        <p className="text-muted-foreground mb-4">
          My journey in web development began at UMass Amherst, and since then, I've been continuously learning and
          adapting to new technologies. I'm particularly interested in building scalable and maintainable applications that provide value to users.
        </p>
        <p className="text-muted-foreground">
          When I'm not coding, you can find me playing video games, djing, or reading books. I'm constantly seeking new ways to challenge myself and expand my skill set. I'm currently looking for new (grad) opportunities to work on exciting projects with a team of talented individuals.
        </p>
      </motion.div>
    </section>
  )
}

export default About

