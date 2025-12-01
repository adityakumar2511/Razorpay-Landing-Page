import React from 'react';
import Slider from './Slider';
import BottomBar from './BottomBar';
import { HERO_SLIDES } from "../../data/slidesData"
import { BOTTOM_ITEMS } from './BottomBar/data';

export default function HeroSection({ slides = HERO_SLIDES, autoplay = 5500 }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Slider slides={slides} autoplayInterval={autoplay} />
        <BottomBar items={BOTTOM_ITEMS} label="Looking for a product?" />
      </div>
    </section>
  );
}
