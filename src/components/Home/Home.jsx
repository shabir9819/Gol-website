import React from 'react'
import Hero from "./Hero/Hero";
import Packages from './Packages/Packages';
import Places from './Places/Places';
import Testomonials from './Testomonials/Testomonials';

export default function Home() {
  return (
    <div className="w-full hero h-full">
      <Hero/>
      <Packages/>
      <Places/>
      <Testomonials/>
    </div>
  )
}
