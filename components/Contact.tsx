"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (form.current) {
        await emailjs.sendForm("service_7gqulhe", "template_4el11a8", form.current, "wn15pNb9Mmf6-YxCx")
        setSubmitStatus("success")
        form.current.reset()
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            required
            placeholder="Your name 📇"
            className="w-full px-3 py-2 text-gray-200 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            required
            placeholder="your.email@example.com"
            className="w-full px-3 py-2 text-gray-200 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Your message 😃"
            className="w-full px-3 py-2 text-gray-200 bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {submitStatus === "success" && <p className="mt-4 text-green-500">Message sent successfully!</p>}
        {submitStatus === "error" && <p className="mt-4 text-red-500">Failed to send message. Please try again.</p>}
      </motion.form>
    </section>
  )
}

export default Contact

