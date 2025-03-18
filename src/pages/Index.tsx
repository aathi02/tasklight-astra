
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/marketing/Hero';
import Features from '@/components/marketing/Features';
import CTASection from '@/components/marketing/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <CTASection />
      </main>
      
      <footer className="bg-secondary/80 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-primary flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PM</span>
                </div>
                <span>Taskflow</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                AI-Powered Project Management
              </p>
            </div>
            
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Taskflow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
