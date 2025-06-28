import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';
import Trust from '../components/Trust';
import CTAStrip from '../components/CTAStrip';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <FeatureGrid />
      <Testimonial />
      <Pricing />
      <Trust />
      <CTAStrip />
    </main>
  );
};

export default Home;