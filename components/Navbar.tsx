'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Properties', href: '#properties' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 3.5 }}
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ${
          isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex flex-col"
          >
            <span className="text-xl md:text-2xl font-serif font-black tracking-[0.2em] uppercase text-white group-hover:text-accent transition-colors duration-300">
              Abhay Kirti
            </span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/40 group-hover:text-accent/60 transition-colors duration-300">
              Luxury Real Estate
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-accent transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-8 py-3 rounded-full bg-accent text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-accent transition-all duration-500 shadow-xl shadow-accent/20">
              Book a Tour
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-[#050505] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-xl font-serif font-black tracking-[0.2em] uppercase text-accent">
                AK
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full glass flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-4xl font-serif font-black tracking-tighter hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/40">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+1 (555) 000-0000</span>
              </div>
              <button className="w-full py-5 bg-accent text-white font-bold uppercase tracking-widest text-xs rounded-2xl">
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
