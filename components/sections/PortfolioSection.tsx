"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { staggerContainer, scaleIn } from "@/components/animations/variants"

const projects = [
  {
    title: "Plusworld",
    description: "A learning platform for real estate and construction courses",
    image: "/plusworld.png",
    url: "https://plusworld.vercel.app"
  },
  {
    title: "Chris",
    description: "My Personal Portfolio.",
    image: "/seyi.png",
    url: "https://seyi.vercel.app"

  },
  {
    title: "YIMICMS",
    description: "A consultation company for creatives.",
    image: "/yimicms.png",
    url:"https://yimicms.com"
  },
]

export default function PortfolioSection() {
  const portfolioRef = useRef(null)
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.3 })

  return (
    <section id="portfolio" ref={portfolioRef} className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Recent Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={portfolioInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {projects.map((item) => (
            <motion.div key={item.description} variants={scaleIn} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <motion.div transition={{ duration: 0.5 }}>
                    <Image
                      src={item.image}
                      alt={`Project ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {item.title}</h3>
                  <p className="text-muted-foreground mb-4">
{item.description}                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                      View Case Study

                      </a>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline">View All Projects</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

