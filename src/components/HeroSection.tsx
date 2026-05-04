import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <motion.span
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Fullstack Developer
              <br />
              <span className="text-gradient">&amp; Content Creator</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Saya membangun aplikasi web yang indah dan fungsional,
              serta membagikan pengetahuan melalui konten yang inspiratif.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="rounded-full px-8"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              {[Github, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full glass cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE FRAME */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              
              {/* GANTI src dengan foto kamu */}
              <img
                src="/farhan.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* Overlay efek */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}