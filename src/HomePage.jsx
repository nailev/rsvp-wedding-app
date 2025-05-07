import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Gift, Music, Camera, Send } from "lucide-react";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
import { Textarea } from "./components/ui/textarea.jsx";
import { Label } from "./components/ui/label.jsx";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group.jsx";
import { Separator } from "./components/ui/separator.jsx";
import { useTranslation } from "./lib/LanguageContext.jsx";

import CountdownTimer from "./components/CountdownTimer.jsx";
import GallerySection from "./components/GallerySection.jsx";
import RsvpForm from "./components/RsvpForm.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen text-gray-800 ${t === 'he' ? 'font-sans' : 'font-serif'}`}>
      {/* Header */}
      <header className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-wider">
            <span className="mr-1">Nadav</span>
            <span className="inline-block mx-2 text-rose-400">&</span>
            <span>Shir</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm uppercase tracking-wide">
              <li><a href="#home" className="hover:text-rose-400 transition">{t.nav.home}</a></li>
              <li><a href="#story" className="hover:text-rose-400 transition">{t.nav.story}</a></li>
              <li><a href="#event" className="hover:text-rose-400 transition">{t.nav.event}</a></li>
              <li><a href="#gallery" className="hover:text-rose-400 transition">{t.nav.gallery}</a></li>
              <li><a href="#rsvp" className="hover:text-rose-400 transition">{t.nav.rsvp}</a></li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          <h3 className="text-lg md:text-xl uppercase tracking-[0.2em] mb-4">{t.hero.getting_married}</h3>
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Nadav <span className="text-rose-400">&</span> Shir
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">{t.hero.date}</p>

          <div className="mb-12">
            <CountdownTimer targetDate="2025-08-06T00:00:00" />
          </div>

          <Button className="bg-rose-400 hover:bg-rose-500 text-white rounded-none px-8 py-6">
            <a href="#rsvp" className="block w-full h-full">{t.nav.rsvp}</a>
          </Button>

        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-2 font-light">{t.story.title}</h2>
              <div className="flex justify-center items-center mb-12">
                <Separator className="w-12 bg-rose-300" />
                <Heart className="mx-4 text-rose-400 h-5 w-5 fill-rose-400" />
                <Separator className="w-12 bg-rose-300" />
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">{t.story.content1}</p>
              <p className="text-gray-600 leading-relaxed">{t.story.content2}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Section */}
      <section id="event" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-2 font-light">{t.event.title}</h2>
            <div className="flex justify-center items-center mb-12">
              <Separator className="w-12 bg-rose-300" />
              <Calendar className="mx-4 text-rose-400 h-5 w-5" />
              <Separator className="w-12 bg-rose-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-100 flex items-center justify-center">
                <Calendar className="text-rose-400 h-6 w-6" />
              </div>
              <h3 className="text-xl mb-3 font-medium">{t.event.ceremony}</h3>
              <p className="text-gray-600 mb-2">{t.hero.date}</p>
              <p className="text-gray-600 mb-2">{t.event.ceremony_time}</p>
              <p className="text-gray-600">{t.event.reception_time}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-100 flex items-center justify-center">
                <MapPin className="text-rose-400 h-6 w-6" />
              </div>
              <h3 className="text-xl mb-3 font-medium">{t.event.venue}</h3>
              <p className="text-gray-600 mb-2">{t.event.venue_name}</p>
              <p className="text-gray-600 mb-6">{t.event.venue_address}</p>
              <Button variant="outline" className="text-rose-500 border-rose-300 hover:bg-rose-50">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  {t.event.view_map}
                </a>
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-100 flex items-center justify-center">
                <Gift className="text-rose-400 h-6 w-6" />
              </div>
              <h3 className="text-xl mb-3 font-medium">{t.event.registry}</h3>
              <p className="text-gray-600 mb-6">{t.event.registry_text}</p>
              <Button variant="outline" className="text-rose-500 border-rose-300 hover:bg-rose-50">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {t.event.view_registry}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-2 font-light">{t.gallery.title}</h2>
            <div className="flex justify-center items-center mb-12">
              <Separator className="w-12 bg-rose-300" />
              <Camera className="mx-4 text-rose-400 h-5 w-5" />
              <Separator className="w-12 bg-rose-300" />
            </div>
          </div>
          <GallerySection />
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-2 font-light">{t.rsvp.title}</h2>
            <div className="flex justify-center items-center mb-12">
              <Separator className="w-12 bg-rose-300" />
              <Send className="mx-4 text-rose-400 h-5 w-5" />
              <Separator className="w-12 bg-rose-300" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.rsvp.description}</p>
          </div>
          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl mb-4 font-light">
            <span>Nadav</span>
            <span className="inline-block mx-2 text-rose-400">&</span>
            <span>Shir</span>
          </h3>
          <p className="text-gray-600 mb-6">{t.hero.date}</p>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} - With love from Nadav & Shir</p>
        </div>
      </footer>
    </div>
  );
}