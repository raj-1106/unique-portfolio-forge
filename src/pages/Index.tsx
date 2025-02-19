
import Navigation from "../components/Navigation";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8">
      <Navigation />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-display leading-tight">
              Hi There!{" "}
              <span className="animate-wave inline-block">👋</span>
              <br />
              I'm <span className="text-retro-blue">Raj Lathigra</span>
            </h1>
            <p className="text-xl text-retro-gray">
              A passionate Blockchain Developer specializing in Web3 technologies and decentralized solutions
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-retro-blue">🎓</span>
              <p>B.Tech in Information Technology</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-retro-blue">💼</span>
              <p>Open for opportunities</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/raj-1106" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/raj-lathigra-483089192" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rlathigra11@gmail.com"
               className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://x.com/LathigraRaj" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="window bg-retro-blue/5 p-6">
          <pre className="font-mono text-sm text-retro-blue overflow-x-auto">
{`const aboutMe = {
  name: "Raj Lathigra",
  role: "Blockchain Developer",
  location: "India",
  skills: [
    "Solidity",
    "Smart Contracts",
    "Web3.js",
    "React",
    "Node.js",
    "Hardhat",
    "IPFS"
  ],
  interests: [
    "DeFi",
    "NFTs",
    "Decentralized Systems",
    "Web3 Development"
  ]
};`}
          </pre>
        </div>

        <div className="md:col-span-2 space-y-6 mt-8">
          <h2 className="text-3xl font-display">Professional Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="window bg-retro-blue/5 p-6">
              <h3 className="text-xl font-display mb-4 text-retro-blue">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Solidity", "React", "Node.js", "Web3.js", "Hardhat", "IPFS", "TypeScript", "Smart Contracts", "Python", "Mongo DB", "HTML", "CSS", "Render", "Vercel", "Git", "Postman", "Express", "Javascript", "C/C++"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-retro-mint text-retro-dark rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="window bg-retro-blue/5 p-6">
              <h3 className="text-xl font-display mb-4 text-retro-blue">Blockchain Expertise</h3>
              <ul className="list-disc list-inside space-y-2 text-retro-dark">
                <li>Smart Contract Development</li>
                <li>DeFi Protocol Integration</li>
                <li>NFT Development</li>
                <li>Web3 Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
