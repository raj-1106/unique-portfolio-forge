
import Navigation from "../components/Navigation";
import { ExternalLink } from "lucide-react";

const Webflow = () => {
  const webflowProjects = [
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with Webflow showcasing my blockchain development work.",
      features: ["Responsive Design", "Custom Animations", "Portfolio Gallery", "Contact Form"],
      status: "In Development"
    },
    {
      title: "Crypto Landing Page",
      description: "A landing page template for cryptocurrency and blockchain projects, featuring modern design elements and interactive components.",
      features: ["Interactive UI", "Token Information", "Roadmap Section", "Team Profiles"],
      status: "Planning Phase"
    },
    {
      title: "Web3 Blog",
      description: "A blog template designed for Web3 content creators, with support for rich media and newsletter integration.",
      features: ["Content Management", "Newsletter Signup", "Social Integration", "SEO Optimization"],
      status: "Concept"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Navigation />
      <div className="space-y-8">
        <div className="window">
          <div className="window-title">
            <span>Webflow</span>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display mb-4">Webflow Projects</h1>
              <p className="text-retro-gray">Exploring the intersection of Web3 and modern web design</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webflowProjects.map((project, index) => (
                <div key={index} className="window bg-retro-blue/5 p-6 hover:scale-[1.02] transition-all duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display text-retro-blue">{project.title}</h3>
                    <span className="text-sm px-2 py-1 bg-retro-mint rounded">
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-4 text-retro-dark">{project.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-display text-retro-blue">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-retro-dark">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="window bg-retro-blue/5 p-6 inline-block">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-retro-blue" />
                  <p className="text-lg">
                    More projects coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webflow;
