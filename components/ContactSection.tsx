'use client'

import { motion } from 'motion/react'
import { MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="relative z-10">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-accent font-sans text-xs uppercase tracking-[0.5em] mb-4 font-bold"
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight mb-8"
          >
            LET'S START <br /> <span className="italic text-accent">YOUR JOURNEY</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-md text-lg leading-relaxed mb-12"
          >
            Ready to find your dream property? Our team is here to guide you every step of the way.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</span>
                <span className="text-lg font-serif font-bold">+1 (555) 000-0000</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</span>
                <span className="text-lg font-serif font-bold">hello@abhaykirti.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Visit Us</span>
                <span className="text-lg font-serif font-bold">123 Luxury Way, Malibu, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative glass p-10 rounded-3xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10" />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-2">Your Message</label>
              <textarea 
                required
                rows={4}
                placeholder="I'm interested in your properties..."
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
              />
            </div>
            
            <button 
              type="submit"
              className="bg-accent text-white py-5 rounded-2xl flex items-center justify-center gap-3 group hover:bg-white hover:text-accent transition-all duration-500 shadow-xl shadow-accent/20"
            >
              <span className="font-bold uppercase tracking-widest text-sm">Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </button>
          </form>
          
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center text-center p-10 z-20"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <Send className="text-green-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Message Sent Successfully</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-accent font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/15550000000?text=Hi,%20I'm%20interested%20in%20your%20properties"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 7, duration: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
      >
        <MessageCircle className="text-white w-8 h-8" />
        <div className="absolute right-full mr-4 glass px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">Chat on WhatsApp</span>
        </div>
      </motion.a>
    </section>
  )
}
