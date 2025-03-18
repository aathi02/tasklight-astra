
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
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
    <section id="demo" className="section-padding">
      <div className="section-container">
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="relative p-12 md:p-16 lg:p-20 overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-blue-300/5"></div>
              <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-300/10 filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6 reveal">
                Ready to Transform Your Project Management?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 reveal reveal-delay-1">
                Join hundreds of teams that have accelerated their development process, improved collaboration, and delivered high-quality products faster with our AI-powered platform.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 reveal reveal-delay-2">
                <Button size="lg" asChild>
                  <Link to="/auth?mode=signup">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#demo">Schedule Demo</Link>
                </Button>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground reveal reveal-delay-3">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
