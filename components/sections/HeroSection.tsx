"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/components/animations/variants"

export default function HeroSection() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })

  // Parallax effect for hero section
  const { scrollY } = useScroll()
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150])
  const heroTextY = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
      <motion.div className="absolute inset-0 -z-10" style={{ y: heroImageY }}>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
        <img
          src="https://cdn.prod.website-files.com/65477692addfee239dda0d4f/65613079f32c4fcae56108da_jj-ying-7JX0-bfiuxQ-unsplash.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Background pattern"
        />
      </motion.div>
      <motion.div
        className="container px-4 md:px-6 text-center"
        style={{ y: heroTextY }}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-black" variants={fadeIn}>
          Software worth showing off
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10" variants={fadeIn}>
          We turn your ideas into something real—something that works brilliantly and gets the results you need
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="gap-2 relative overflow-hidden group">
              <span className="relative z-10">See Our Work</span>
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline">
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

