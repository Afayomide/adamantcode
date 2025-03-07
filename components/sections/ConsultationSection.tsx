"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer, itemFadeIn, slideFromLeft, slideFromRight } from "@/components/animations/variants"

export default function ConsultationSection() {
  const consultationRef = useRef(null)
  const consultationInView = useInView(consultationRef, { once: true, amount: 0.3 })

  const consultationPoints = [
    "How AI can automate your repetitive tasks",
    "Ways to enhance customer engagement with AI chatbots",
    "Strategies to generate more leads using AI tools",
    "A personalized roadmap for implementing AI in your business",
  ]

  return (
    <section ref={consultationRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={consultationInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={slideFromLeft}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeIn}>
              Book a Consultation with Luka
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8" variants={fadeIn}>
              Luka is our AI expert who will help you understand how AI can transform your business. In this 30-minute
              consultation, you'll discover:
            </motion.p>
            <motion.ul className="space-y-4 mb-8" variants={staggerContainer}>
              {consultationPoints.map((item, index) => (
                <motion.li key={index} className="flex items-start gap-3" variants={itemFadeIn}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={consultationInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3, type: "spring" }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 relative overflow-hidden group">
                <span className="relative z-10">Schedule Your Free Consultation</span>
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
                <span className="absolute inset-0 bg-primary/20 w-0 group-hover:w-full transition-all duration-300" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="relative" variants={slideFromRight}>
            <motion.div
              className="aspect-square max-w-md mx-auto relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={
                consultationInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }
              }
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Image
                src="https://cdn.prod.website-files.com/65477692addfee239dda0d4f/6547c4ea68fb6e73e3380125_avatar-(ProfilePictureMaker.com)%20(1)-p-500.png"
                alt="Luka, AI Consultant"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-3 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={consultationInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-medium">30-minute consultation</p>
              <p className="text-xl font-bold">100% Free</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

