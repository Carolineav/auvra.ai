import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-cosmic-dark/95 backdrop-blur-sm border-b border-cosmic-purple/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
            <div className="w-10 h-10 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-lg flex items-center justify-center cosmic-glow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue bg-clip-text text-transparent">
              Auvra.tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 hover:text-cosmic-blue relative ${
                  location.pathname === item.path 
                    ? 'text-cosmic-blue' 
                    : 'text-gray-300 hover:text-cosmic-blue'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-blue"></div>
                )}
              </Link>
            ))}
            <a
              href="https://calendly.com/auvra/strategy"
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-6 py-2 rounded-full font-semibold hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105 cosmic-glow"
            >
              Book Call
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cosmic-blue"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cosmic-purple/20">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-cosmic-blue' 
                      : 'text-gray-300 hover:text-cosmic-blue'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/auvra/strategy"
                className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-6 py-2 rounded-full font-semibold text-center"
              >
                Book Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;