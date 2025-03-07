"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { fadeIn, staggerContainer, scaleIn } from "@/components/animations/variants"

export default function ClientsSection() {
  const clientsRef = useRef(null)
  const clientsInView = useInView(clientsRef, { once: true, amount: 0.3 })

  const clientStats = [
    { number: "98%", text: "Client satisfaction rate" },
    { number: "15+", text: "Industries served" },
    { number: "24/7", text: "Support available" },
    { number: "3 years", text: "Average client relationship" },
  ]

  return (
    <section ref={clientsRef} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div initial="hidden" animate={clientsInView ? "visible" : "hidden"} variants={staggerContainer}>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-4" variants={fadeIn}>
            Our Clients
          </motion.h2>
          <motion.p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12" variants={fadeIn}>
            Trusted by innovative companies across various industries
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={clientsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <motion.div className="p-4" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                    <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center p-6">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=Client ${index + 1}`}
                        alt={`Client ${index + 1}`}
                        width={100}
                        height={100}
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CarouselPrevious className="relative static" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CarouselNext className="relative static" />
              </motion.div>
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate={clientsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {clientStats.map((stat, index) => (
            <motion.div key={index} className="flex flex-col items-center text-center" variants={scaleIn}>
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={clientsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <motion.p className="text-muted-foreground" variants={fadeIn}>
                {stat.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

