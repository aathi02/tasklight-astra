
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Function to handle reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-32 section-padding overflow-hidden">
      {/* Background shapes/gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-blue-300/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Hero content */}
          <div className="flex-1 max-w-2xl">
            <div className="badge bg-primary/10 text-primary mb-6 reveal">
              AI-Powered Project Management
            </div>
            
            <h1 className="heading-xl mb-6 max-w-xl reveal reveal-delay-1">
              <span className="text-primary">Automate, Collaborate,</span> and Deliver Faster!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg reveal reveal-delay-2">
              Transform your workflow with AI that streamlines development, automates documentation, and eliminates routine tasks while keeping your team in perfect sync.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal reveal-delay-3">
              <Button size="lg" asChild>
                <Link to="/auth?mode=signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#demo">Request Demo</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-4 reveal reveal-delay-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-medium">
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> teams already using Taskflow
              </p>
            </div>
          </div>
          
          {/* Hero image/visual */}
          <div className="flex-1 reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-300/20 rounded-2xl filter blur-xl"></div>
              <div className="glass-card rounded-2xl overflow-hidden p-1 relative">
                <div className="bg-white dark:bg-black rounded-xl overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F5c9b98cbaa9e4d000ebf13af%2F8fda63635c0d421fa94f55f1a69c41b5" 
                    alt="AI Project Management Dashboard"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
