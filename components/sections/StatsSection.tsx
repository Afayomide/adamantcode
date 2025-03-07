"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { fadeIn, staggerContainer, itemFadeIn } from "@/components/animations/variants"

export default function StatsSection() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  const stats = [
    { number: "10+", text: "Projects Completed" },
    { number: "1,000+", text: "Hours Saved" },
    { number: "$500,000+", text: "Saved per year" },
  ]

  return (
    <section ref={statsRef} className="bg-primary text-primary-foreground py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="flex flex-col items-center" variants={itemFadeIn}>
              <motion.span
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.span>
              <motion.span className="text-primary-foreground/80" variants={fadeIn}>
                {stat.text}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

