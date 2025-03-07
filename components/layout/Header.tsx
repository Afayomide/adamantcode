"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Handle link click on mobile to close menu
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  // Animation variants for mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="text-xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="https://cdn.prod.website-files.com/65477692addfee239dda0d4f/65777bfb571621ea0ddb86ea_Logotype1-p-500.png"
              alt="Adamant Code"
              width={150}
              height={32}
              className="h-8 w-auto"
            />
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {["Services", "About", "Portfolio", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          )}

          {/* CTA Button - hidden on mobile when menu is open */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden sm:block ${mobileMenuOpen ? "md:block" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button>Get in Touch</Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="relative z-50"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileMenuOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed w-full h-[100vh] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col h-full pt-10 items-center ">
              <motion.nav className="flex flex-col gap-6 items-center" >
                {["Services", "About", "Portfolio", "Contact"].map((item, i) => (
                  <motion.div
                    key={item}
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-xl font-medium hover:text-primary transition-colors relative group"
                      onClick={handleLinkClick}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={menuItemVariants}
                  className="mt-8 sm:hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={handleLinkClick}>Get in Touch</Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}



