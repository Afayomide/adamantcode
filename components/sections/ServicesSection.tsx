"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Zap, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { fadeIn, staggerContainer, scaleIn } from "@/components/animations/variants"

export default function ServicesSection() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })

  const services = [
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "AI Chatbots",
      description:
        "Custom AI chatbots that provide instant support to your customers 24/7, reducing response times and increasing satisfaction.",
      features: ["Natural language processing", "Multi-platform integration", "Analytics dashboard"],
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "AI Lead Generation",
      description:
        "Identify and qualify potential customers with AI, focusing your sales efforts where they matter most.",
      features: ["Predictive lead scoring", "Automated outreach", "CRM integration"],
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "AI Content Creation",
      description: "Generate high-quality, SEO-optimized content that engages your audience and drives conversions.",
      features: ["Blog posts & articles", "Social media content", "Email marketing copy"],
    },
  ]

  return (
    <section id="services" ref={servicesRef} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div initial="hidden" animate={servicesInView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-4" variants={fadeIn}>
            Our Services
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12" variants={fadeIn}>
            We offer a comprehensive suite of AI-powered solutions to help your business thrive in the digital age
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                <div className="p-6 flex-1">
                  <motion.div
                    className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={servicesInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

