
import Navigation from "../components/Navigation";
import { ExternalLink } from "lucide-react";

const Webflow = () => {
  const webflowProjects = [
    {
      title: "Decentralized Finance (DeFi) Platform",
      description: "A comprehensive DeFi platform interface built with Webflow, featuring intuitive navigation and real-time data visualization for token swaps and liquidity pools.",
      features: ["Real-time Price Charts", "Wallet Integration", "Transaction History", "Staking Interface"],
      status: "Live",
      link: "https://your-defi-platform.webflow.io"
    },
    {
      title: "NFT Marketplace Template",
      description: "A customizable NFT marketplace template designed to showcase digital art collections with smooth animations and filtered gallery views.",
      features: ["NFT Gallery", "Artist Profiles", "Bidding System", "Collection Filters"],
      status: "Live",
      link: "https://your-nft-marketplace.webflow.io"
    },
    {
      title: "Blockchain Education Hub",
      description: "An educational platform focused on blockchain technology, featuring interactive learning modules and resource libraries.",
      features: ["Course Library", "Progress Tracking", "Resource Center", "Community Forum"],
      status: "In Development",
      link: "https://blockchain-edu.webflow.io"
    },
    {
      title: "Smart Contract Documentation",
      description: "A documentation website template for smart contract developers, with syntax highlighting and interactive code examples.",
      features: ["Code Snippets", "API Documentation", "Search Function", "Dark Mode"],
      status: "Live",
      link: "https://smart-contract-docs.webflow.io"
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
              <p className="text-retro-gray">Bridging Web3 functionality with modern design using Webflow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webflowProjects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block window bg-retro-blue/5 p-6 hover:scale-[1.02] transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display text-retro-blue">
                      {project.title}
                      <ExternalLink className="inline-block w-4 h-4 ml-2 mb-1" />
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded ${
                      project.status === 'Live' 
                        ? 'bg-retro-mint text-retro-dark' 
                        : 'bg-retro-blue/20 text-retro-blue'
                    }`}>
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
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="window bg-retro-blue/5 p-6 inline-block">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-retro-blue" />
                  <p className="text-lg">
                    Portfolio constantly updating with new projects
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
