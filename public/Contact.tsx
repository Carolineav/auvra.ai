import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Windhoek, Namibia',
      description: 'Serving clients globally',
      link: 'https://maps.google.com/?q=Windhoek,Namibia'
    },
    {
      icon: Phone,
      title: 'Phone/WhatsApp',
      details: '+264 81 2568924',
      description: 'Available for calls & WhatsApp',
      link: 'https://wa.me/264812568924'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@auvra.tech',
      description: 'Send us an email anytime',
      link: 'mailto:contact@auvra.tech'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We respond quickly',
      link: null
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cosmic-purple rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cosmic-blue rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-pink bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to transform your business with AI automation? Let's start the conversation.
          </p>
          <p className="text-lg text-cosmic-purple font-semibold">
            📍 Based in Windhoek, Namibia • Serving clients globally
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-cosmic-purple mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-lg text-white mb-2 hover:text-cosmic-blue transition-colors block"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-lg text-white mb-2">{info.details}</p>
                )}
                <p className="text-gray-400">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Quick Contact Buttons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-cosmic-purple mb-8">Quick Contact Options</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendly.com/mskondjara/ai-booking-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Clock className="w-5 h-5" />
                Schedule a Consultation
              </a>
              <a
                href="https://wa.me/264812568924"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-300">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-cosmic-purple/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-cosmic-purple font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-cosmic-purple font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-cosmic-purple font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-cosmic-purple font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="service" className="block text-cosmic-purple font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white"
                >
                  <option value="">Select a service</option>
                  <option value="ai-websites">AI-Powered Websites</option>
                  <option value="crm-integration">CRM Integration</option>
                  <option value="email-automation">Email Automation</option>
                  <option value="ai-agents">Custom AI Agents</option>
                  <option value="full-automation">Complete Automation Suite</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-cosmic-purple font-semibold mb-2">
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-plus">$25,000+</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-cosmic-purple font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-cosmic-purple text-white resize-none"
                placeholder="Tell us about your project, current challenges, and what you'd like to achieve..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! While we\'re based in Windhoek, Namibia, we serve clients globally. We work across different time zones and have experience with international business requirements and regulations.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. Simple automations take 1-2 weeks, while comprehensive systems take 4-8 weeks. We provide detailed timelines during our strategy call.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer maintenance packages and ongoing optimization services. Most clients choose our monthly support plan to ensure their systems continue performing optimally.'
              },
              {
                question: 'Can you integrate with our existing systems?',
                answer: 'Absolutely. We specialize in integrating with popular platforms like Salesforce, HubSpot, Notion, Airtable, and hundreds of others through APIs and automation tools.'
              },
              {
                question: 'What if we need changes after launch?',
                answer: 'We include revision rounds in all projects and offer flexible support packages for ongoing changes and optimizations as your business evolves.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-cosmic-purple/20">
                <h3 className="text-xl font-bold text-cosmic-purple mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;