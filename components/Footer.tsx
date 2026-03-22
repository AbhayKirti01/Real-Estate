'use client'

import { motion } from 'motion/react'
import { Github, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-20 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-black tracking-[0.2em] uppercase text-white/90 mb-4">
            Abhay Kirti
          </h2>
          <p className="text-accent font-sans text-xs uppercase tracking-[0.5em] font-bold">
            Luxury Real Estate Experience
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-8 mb-16">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, color: '#C5A059' }}
              className="text-white/40 transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-10 mb-20">
          {['Experience', 'Projects', 'Studio', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-accent transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Copyright & Scroll Top */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            © 2026 Abhay Kirti • All Rights Reserved
          </span>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40 font-bold hover:text-white transition-colors duration-300"
          >
            <span>Back to Top</span>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
          
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/20 font-bold">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
