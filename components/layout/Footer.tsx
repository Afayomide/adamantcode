"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="border-t py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
             <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold flex items-center">
              Adamant<Image src="/logo.svg" alt="Adamant Code" width={32} height={32} className="h-8 w-auto" />
              <span className="text-primary">Code</span>
            </span>
          </Link>
          </motion.div>
          <motion.div
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Adamant Code. All rights reserved.
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

