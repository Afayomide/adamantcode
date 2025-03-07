"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Zap, CheckCircle } from "lucide-react"

import { Card } from "@/components/ui/card"
import { staggerContainer, slideFromLeft, slideFromRight } from "@/components/animations/variants"

export default function SuperchargeSection() {
  const superchargeRef = useRef(null)
  const superchargeInView = useInView(superchargeRef, { once: true, amount: 0.3 })

  const superchargePoints = [
    "Every moment you delay in embracing AI is <strong>costing you money and precious time</strong>.",
    "By failing to automate customer support with <strong>AI chatbots</strong>, you're wasting valuable resources and alienating your customers.",
    "Without <strong>AI lead generation</strong> tools, potential clients are slipping through your fingers.",
    "By not using <strong>AI for content generation</strong>, you're falling behind your competition in the ever-evolving digital landscape.",
  ]

  const superchargeCards = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "AI-Powered Chatbots",
      description:
        "Provide instant support to your customers 24/7, reducing response times and increasing satisfaction.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Smart Lead Generation",
      description:
        "Identify and qualify potential customers with AI, focusing your sales efforts where they matter most.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Content Creation",
      description: "Generate high-quality, SEO-optimized content that engages your audience and drives conversions.",
    },
  ]

  return (
    <section ref={superchargeRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={superchargeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          SUPERCHARGE YOUR BUSINESS TODAY!
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="border-l-4 border-primary pl-6 space-y-6"
            initial="hidden"
            animate={superchargeInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {superchargePoints.map((text, index) => (
              <motion.p
                key={index}
                className="text-lg"
                variants={slideFromLeft}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </motion.div>
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={superchargeInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {superchargeCards.map((item, index) => (
              <motion.div key={index} variants={slideFromRight} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={superchargeInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring" }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

