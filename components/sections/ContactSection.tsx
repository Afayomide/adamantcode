"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  fadeIn,
  staggerContainer,
  itemFadeIn,
  slideFromLeft,
  slideFromRight,
  scaleIn,
} from "@/components/animations/variants"

export default function ContactSection() {
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  return (
    <section id="contact" ref={contactRef} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={slideFromLeft}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeIn}>
              Ready to transform your business?
            </motion.h2>
            <motion.p className="text-xl text-muted-foreground mb-8" variants={fadeIn}>
              Let's discuss how we can help you leverage AI and cutting-edge technology to achieve your business goals.
            </motion.p>
            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.div
                className="flex items-center gap-3"
                variants={itemFadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <span>hello@adamantcode.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                variants={itemFadeIn}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span>Schedule a quick call</span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={slideFromRight}>
            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
              <form className="space-y-4">
                <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
                  <motion.div className="space-y-2" variants={itemFadeIn}>
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className={cn(
                        "w-full p-2 border rounded-md transition-all duration-300",
                        "focus:ring-2 focus:ring-primary focus:outline-none",
                      )}
                      placeholder="John"
                    />
                  </motion.div>
                  <motion.div className="space-y-2" variants={itemFadeIn}>
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className={cn(
                        "w-full p-2 border rounded-md transition-all duration-300",
                        "focus:ring-2 focus:ring-primary focus:outline-none",
                      )}
                      placeholder="Doe"
                    />
                  </motion.div>
                </motion.div>
                <motion.div className="space-y-2" variants={itemFadeIn}>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={cn(
                      "w-full p-2 border rounded-md transition-all duration-300",
                      "focus:ring-2 focus:ring-primary focus:outline-none",
                    )}
                    placeholder="john@example.com"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={itemFadeIn}>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={cn(
                      "w-full p-2 border rounded-md min-h-[120px] transition-all duration-300",
                      "focus:ring-2 focus:ring-primary focus:outline-none",
                    )}
                    placeholder="Tell us about your project..."
                  />
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="w-full">Send Message</Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

