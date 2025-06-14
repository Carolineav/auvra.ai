import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Zap } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-cosmic-purple/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue bg-clip-text text-transparent">
                Auvra.tech
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              We help growth-focused brands automate operations using AI websites, 
              CRM systems, email outreach, and intelligent agents.
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@auvra.tech"
                className="w-10 h-10 bg-cosmic-purple/20 hover:bg-cosmic-purple hover:text-white text-cosmic-purple rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/auvra-tech"
                className="w-10 h-10 bg-cosmic-blue/20 hover:bg-cosmic-blue hover:text-white text-cosmic-blue rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/auvra_tech"
                className="w-10 h-10 bg-cosmic-pink/20 hover:bg-cosmic-pink hover:text-white text-cosmic-pink rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-cosmic-purple font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cosmic-purple transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            &copy; 2025 Auvra.tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-400">
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