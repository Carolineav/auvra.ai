import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Zap, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Websites', path: '/services' },
        { name: 'CRM Integration', path: '/services' },
        { name: 'Email Automation', path: '/services' },
        { name: 'AI Agents', path: '/services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', path: '/portfolio' },
        { name: 'Pricing', path: '/#pricing' },
        { name: 'FAQ', path: '/contact' },
        { name: 'Support', path: '/contact' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-cosmic-purple/20 footer-with-chatbot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue bg-clip-text text-transparent">
                Auvra.tech
              </span>
            </Link>
            
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Based in Windhoek, Namibia, serving clients globally. We help growth-focused brands automate operations using AI websites, 
              CRM systems, email outreach, and intelligent agents.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cosmic-purple" />
                <span className="text-sm sm:text-base">Windhoek, Namibia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-cosmic-blue" />
                <a href="tel:+264812568924" className="text-sm sm:text-base hover:text-cosmic-blue transition-colors">
                  +264 81 2568924
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-cosmic-pink" />
                <a href="mailto:contact@auvra.tech" className="text-sm sm:text-base hover:text-cosmic-pink transition-colors">
                  contact@auvra.tech
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="mailto:contact@auvra.tech"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-cosmic-purple/20 hover:bg-cosmic-purple hover:text-white text-cosmic-purple rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/auvra-tech"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-cosmic-blue/20 hover:bg-cosmic-blue hover:text-white text-cosmic-blue rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://x.com/auvra_tech"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-cosmic-pink/20 hover:bg-cosmic-pink hover:text-white text-cosmic-pink rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/264812568924"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 hover:bg-green-500 hover:text-white text-green-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="sm:col-span-1">
              <h3 className="text-cosmic-purple font-bold text-lg mb-3 sm:mb-4">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cosmic-purple transition-colors text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
            &copy; 2025 Auvra.tech. All rights reserved. • Windhoek, Namibia • Serving clients globally
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
            <Link to="/privacy" className="hover:text-cosmic-purple transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-cosmic-purple transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;