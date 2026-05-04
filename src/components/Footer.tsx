import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="mt-10">
      {/* Bagian Merah */}
      <div className="bg-red-500 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-white fill-white" />
            <span>by Farhan Almaula</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full hover:bg-red-600 transition-colors text-white hover:text-gray-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bagian Putih */}
      <div className="bg-white py-3 text-center text-sm text-gray-600 border-t border-gray-200">
        <span>Terima kasih sudah mengunjungi website saya 🙌</span>
      </div>
    </footer>
  );
}