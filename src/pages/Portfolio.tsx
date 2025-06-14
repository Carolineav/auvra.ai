import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Automation Suite',
      client: 'TechGear Pro',
      industry: 'E-commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['300% increase in conversion rate', '80% reduction in manual tasks', '24/7 customer support automation'],
      technologies: ['AI Chatbot', 'CRM Integration', 'Email Automation', 'Analytics Dashboard'],
      testimonial: 'Auvra transformed our entire sales process. We went from struggling with manual follow-ups to having a fully automated system that works 24/7.',
      author: 'Sarah Chen, CEO'
    },
    {
      title: 'Real Estate Lead Generation System',
      client: 'Premier Properties',
      industry: 'Real Estate',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['500% increase in qualified leads', '60% faster response time', '$2M+ in additional revenue'],
      technologies: ['AI Landing Pages', 'Lead Scoring', 'Automated Nurturing', 'CRM Sync'],
      testimonial: 'The AI system Auvra built for us generates more qualified leads in a week than we used to get in a month.',
      author: 'Michael Rodriguez, Sales Director'
    },
    {
      title: 'Healthcare Practice Management',
      client: 'MedCare Clinic',
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['90% reduction in appointment no-shows', '50% improvement in patient satisfaction', 'Automated billing processes'],
      technologies: ['Appointment Automation', 'Patient Communication', 'Billing Integration', 'Analytics'],
      testimonial: 'Our practice runs smoother than ever. Patients love the automated reminders and our staff can focus on care instead of admin work.',
      author: 'Dr. Lisa Thompson, Practice Owner'
    },
    {
      title: 'SaaS Customer Success Platform',
      client: 'CloudTech Solutions',
      industry: 'SaaS',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['40% reduction in churn rate', '200% increase in upsells', 'Automated onboarding process'],
      technologies: ['Customer Health Scoring', 'Automated Onboarding', 'Usage Analytics', 'Predictive Alerts'],
      testimonial: 'The automation platform helped us scale our customer success team without hiring. Our retention rates have never been better.',
      author: 'James Park, VP Customer Success'
    },
    {
      title: 'Manufacturing Operations Dashboard',
      client: 'Industrial Dynamics',
      industry: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['25% increase in operational efficiency', 'Real-time production monitoring', 'Predictive maintenance alerts'],
      technologies: ['IoT Integration', 'Real-time Dashboards', 'Predictive Analytics', 'Automated Reporting'],
      testimonial: 'Having real-time visibility into our operations has been a game-changer. We can now prevent issues before they become problems.',
      author: 'Robert Kim, Operations Manager'
    },
    {
      title: 'Financial Services Client Portal',
      client: 'Wealth Advisors Group',
      industry: 'Financial Services',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['70% improvement in client engagement', 'Automated compliance reporting', '50% reduction in admin time'],
      technologies: ['Client Portal', 'Document Automation', 'Compliance Tracking', 'Secure Communications'],
      testimonial: 'Our clients love the new portal and automated reporting. It has elevated our service quality significantly.',
      author: 'Amanda Foster, Managing Partner'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: TrendingUp },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '99.8%', label: 'Uptime Guarantee', icon: Clock },
    { number: '4.9/5', label: 'Client Rating', icon: Star }
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
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real results from real businesses. See how we've transformed operations 
            and accelerated growth across industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cosmic-purple to-cosmic-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cosmic-purple mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most impactful automation implementations and the results they delivered.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-sm text-cosmic-purple font-semibold mb-1">{project.industry}</div>
                      <div className="text-white font-bold">{project.client}</div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-cosmic-purple mb-4">{project.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-cosmic-purple rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 text-cosmic-purple px-3 py-1 rounded-full text-sm border border-cosmic-purple/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <blockquote className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border-l-4 border-cosmic-purple">
                    <p className="text-gray-300 italic mb-3">"{project.testimonial}"</p>
                    <footer className="text-cosmic-purple font-semibold">— {project.author}</footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-cosmic-purple mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can create similar results for your business.
          </p>
          <a
            href="https://calendly.com/auvra/strategy"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cosmic-blue hover:to-cosmic-pink transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;