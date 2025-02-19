
import Navigation from "../components/Navigation";
import { ExternalLink } from "lucide-react";

const Webflow = () => {
  const webflowProjects = [
    {
      title: "PINft",
      description: "Built and deployed a dynamic NFT platform enabling users to represent verified attributes like qualifications, personal achievements, and social media profiles within their NFTs.",
      features: [
        "ERC-721 Smart Contracts",
        "IPFS Integration",
        "React Frontend",
        "User Profile Management"
      ],
      status: "Under Development",
      link: "https://github.com/raj-1106/PINfts"
    },
    {
      title: "Decentralized File Storage",
      description: "Developed a decentralized file storage system using IPFS, allowing users to securely store and share files in a distributed network.",
      features: [
        "IPFS Integration",
        "File Management",
        "Polygon Network",
        "Smart Contracts"
      ],
      status: "Live",
      link: "https://decentralized-file-storage.vercel.app/"
    },
    {
      title: "Decentralized Exchange Platform",
      description: "Created a DEX platform with secure token swaps and liquidity provision functionality, built on Uniswap V2 protocol.",
      features: [
        "Token Swaps",
        "Liquidity Pools",
        "Hardhat Testing",
        "Smart Contracts"
      ],
      status: "Under Development",
      link: "https://github.com/raj-1106/DEX"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Navigation />
      <div className="space-y-8">
        <div className="window">
          <div className="window-title">
            <span>Projects</span>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display mb-4">My Projects</h1>
              <p className="text-retro-gray">A collection of my blockchain development projects</p>
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
                  <a 
                    href="https://github.com/raj-1106" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg text-retro-blue hover:underline"
                  >
                    Check out my GitHub for more projects
                  </a>
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
