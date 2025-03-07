"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import StatsSection from "@/components/sections/StatsSection"
import ConsultationSection from "@/components/sections/ConsultationSection"
import ServicesSection from "@/components/sections/ServicesSection"
import SuperchargeSection from "@/components/sections/SuperchargeSection"
import ClientsSection from "@/components/sections/ClientsSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ConsultationSection />
        <ServicesSection />
        <SuperchargeSection />
        <ClientsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

