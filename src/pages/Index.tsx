
import Navigation from "../components/Navigation";
import { Github, Linkedin, Mail, Twitter, FileText, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Navigation />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4 md:mt-8">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-5xl font-display leading-tight">
              Hi There!{" "}
              <span className="animate-wave inline-block">👋</span>
              <br />
              I'm <span className="text-retro-blue">Raj Lathigra</span>
            </h1>
            <p className="text-lg md:text-xl text-retro-gray">
              A passionate Blockchain Developer specializing in Web3 technologies and decentralized solutions
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-retro-blue">🎓</span>
              <p className="text-sm md:text-base">B.Tech in Information Technology</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-retro-blue">💼</span>
              <p className="text-sm md:text-base">Open for opportunities</p>
            </div>
          </div>

          {/* Socials and Resume Button - Updated for better mobile layout */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 md:gap-4">
            <div className="flex gap-2">
              <a href="https://github.com/raj-1106" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/raj-lathigra-483089192" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <div className="flex gap-2">
              <a href="mailto:rlathigra11@gmail.com"
                 className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://x.com/LathigraRaj" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://medium.com/@rajlathigra03" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-retro-blue/10 rounded hover:bg-retro-blue/20 transition-colors">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            
            {/* Resume Button with updated link */}
            <a href="https://drive.google.com/file/d/1fSBzGGKs1mmRnWSK6LMnNrQ8qLcHppfg/view?usp=drive_link" 
               target="_blank" 
               rel="noopener noreferrer"
               className="col-span-2 flex items-center justify-center sm:justify-start gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-retro-blue text-white rounded hover:bg-retro-blue/90 transition-colors text-sm md:text-base">
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        <div className="window bg-retro-blue/5 p-4 md:p-6 overflow-x-auto">
          <pre className="font-mono text-xs md:text-sm text-retro-blue">
{`const aboutMe = {
  name: "Raj Lathigra",
  role: "Blockchain Developer",
  location: "India",
  skills: [
    "Solidity",
    "Rust",
    "Solana",
    "Smart Contracts",
    "Web3.js",
    "React",
    "Node.js",
    "Hardhat",
    "IPFS",
    "EVM",
    "SVM"
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

        <div className="md:col-span-2 space-y-4 md:space-y-6 mt-6 md:mt-8">
          <h2 className="text-2xl md:text-3xl font-display">Professional Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="window bg-retro-blue/5 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-display mb-3 md:mb-4 text-retro-blue">Technical Skills</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {["Solidity", "React", "Node.js", "Web3.js", "Hardhat", "IPFS", "TypeScript", "Smart Contracts", "Python", "Mongo DB", "HTML", "CSS", "Render", "Vercel", "Git", "Postman", "Express", "Javascript", "C/C++", "Rust", "Anchor","Solana"].map((skill) => (
                  <span key={skill} className="px-2 md:px-3 py-0.5 md:py-1 bg-retro-mint text-retro-dark rounded-full text-xs md:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="window bg-retro-blue/5 p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-display mb-3 md:mb-4 text-retro-blue">Blockchain Expertise</h3>
              <ul className="list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base text-retro-dark">
                <li>Smart Contract Development</li>
                <li>DeFi Protocol Integration</li>
                <li>NFT Development</li>
                <li>Web3 Integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 md:space-y-6 mt-6 md:mt-8">
          <h2 className="text-2xl md:text-3xl font-display">Achievements & Recognition</h2>
          <div className="window bg-retro-blue/5 p-4 md:p-6">
            <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base text-retro-dark">
              <li>Selected as <span className="font-bold text-retro-blue">Martian in BNB Chain program</span></li>
              <li>Conducted seminar on <span className="font-bold text-retro-blue">"Starting with Blockchain"</span></li>
              <li>Won <span className="font-bold text-retro-blue">"Best UI "</span> in <span className="font-bold text-retro-blue">"Hackvengers hackathon"</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
