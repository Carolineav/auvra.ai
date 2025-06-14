import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses getting started with automation',
    features: [
      '1 AI landing page',
      'CRM setup (Notion/Airtable/Pipedrive)',
      '1 Cold email sequence',
      '1 AI Agent',
      'Delivery in 5–7 days',
      'Basic analytics dashboard',
      '30 days support'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Pro',
    price: '$2,500',
    description: 'Comprehensive automation for growing businesses',
    features: [
      'Multi-page AI website',
      'CRM & Zapier automation',
      'AI appointment funnel',
      '2 Email sequences',
      '1 Custom GPT tool',
      'Delivery in 10–14 days',
      'Advanced analytics',
      '90 days support',
      'Training & onboarding'
    ],
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Elite Custom Build',
    price: 'From $5,000',
    description: 'Enterprise-level automation and custom AI solutions',
    features: [
      'Custom AI app or dashboard',
      'Full sales system: site → inbox',
      'Enterprise CRM flows',
      'Agent training & GPT tuning',
      '1-on-1 strategy workshop',
      'Priority development',
      'Unlimited revisions',
      '6 months support',
      'Dedicated project manager'
    ],
    popular: false,
    cta: 'Contact Us'
  }
];

const Pricing = () => {
  return (
    <section className="py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-purple mb-6">Pricing Plans</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect automation package for your business needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cosmic-purple shadow-2xl shadow-cosmic-purple/20' 
                  : 'border-cosmic-purple/20 hover:border-cosmic-purple/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-cosmic-purple mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cosmic-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white hover:from-cosmic-blue hover:to-cosmic-pink'
                    : 'bg-transparent border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white'
                }`}
              >
                {plan.popular && <Zap className="w-5 h-5" />}
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            All plans include free consultation and 30-day money-back guarantee
          </p>
          <a
            href="https://calendly.com/auvra/strategy"
            className="inline-flex items-center gap-2 text-cosmic-purple hover:text-cosmic-blue transition-colors"
          >
            Need a custom solution? Let's talk →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;