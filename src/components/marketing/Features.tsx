
import React, { useEffect } from 'react';
import { 
  Bot, 
  Clock, 
  Users, 
  LineChart, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

const featuresList = [
  {
    icon: Bot,
    title: "AI-driven Task Management",
    description: "Our AI analyzes your team's skills and project needs to automatically assign and prioritize tasks for optimal workflow."
  },
  {
    icon: FileText,
    title: "Automated Documentation",
    description: "Generate comprehensive project documentation, roadmaps, and SRS documents with a single click using our advanced AI."
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Built-in chat, calls, and meeting tools keep your team connected and in sync throughout the development process."
  },
  {
    icon: LineChart,
    title: "Real-time Performance Tracking",
    description: "Monitor project progress, team productivity, and individual performance with intuitive dashboards and reports."
  },
  {
    icon: ShieldCheck,
    title: "Role-based Access Control",
    description: "Ensure data security with granular permissions that give team members access only to what they need."
  },
  {
    icon: Clock,
    title: "Time-saving Automation",
    description: "Eliminate repetitive tasks and focus on what matters with intelligent automation that learns from your team's patterns."
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div className={`glass-card p-6 rounded-xl reveal reveal-delay-${index % 5 + 1}`}>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
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
    <section id="features" className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge bg-primary/10 text-primary mb-4 reveal">
            Core Features
          </div>
          <h2 className="heading-lg mb-4 reveal reveal-delay-1">
            Streamline Your Development Process
          </h2>
          <p className="text-muted-foreground text-lg reveal reveal-delay-2">
            Discover how our AI-powered platform transforms the way software teams collaborate, automate, and deliver projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
