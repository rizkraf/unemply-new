/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Preview } from './components/Preview';
import { HowItWorks } from './components/HowItWorks';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <Preview />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
