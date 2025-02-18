
import Navigation from "../components/Navigation";

const Work = () => {
  const projects = [
    {
      title: "Decentralized Exchange Platform",
      date: "September 2024",
      description: "Implemented secure token swaps and liquidity provision, ensuring seamless transactions for end-users.",
      tech: ["Solidity", "Uniswap V2", "Hardhat", "Polygon"],
    },
    {
      title: "PINft",
      date: "July 2023",
      description: "Enabled users to represent verified attributes, like qualifications, personal achievements, and social media profiles within their NFTs.",
      tech: ["Solidity", "ERC-721", "IPFS", "React", "Sirechain"],
    },
    {
      title: "Decentralized File Storage",
      date: "June 2023",
      description: "Integrated Web3 storage solutions for reliable and tamper-proof data storage in a decentralized network.",
      tech: ["Solidity", "ERC-721", "IPFS", "React", "Polygon"],
    },
  ];

  const experience = [
    {
      company: "Solulab",
      role: "Blockchain Developer Intern",
      period: "July 2024 - November 2024",
      achievements: [
        "Developed and optimized 10+ Solidity smart contracts, improving contract execution efficiency and reducing gas costs by up to 15%.",
        "Collaborated with a cross-functional team of 5+ developers and designers to implement decentralized applications (dApps).",
      ]
    },
    {
      company: "Sirechain",
      role: "Business Development Executive Intern",
      period: "December 2024 - Present",
      achievements: [
        "Analyzed and identified potential partnerships, securing new collaborations to enhance the Sirechain ecosystem's outreach and adoption.",
        "Conducted market research and competitive analysis, providing insights that shaped business strategy.",
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Navigation />
      <div className="space-y-8">
        {/* Projects Section */}
        <div className="window">
          <div className="window-title">
            <span>Projects</span>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-display mb-6">Featured Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="window bg-retro-blue/5 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display text-retro-blue">{project.title}</h3>
                    <span className="text-sm text-retro-gray">{project.date}</span>
                  </div>
                  <p className="mb-4 text-retro-dark">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-sm bg-retro-mint text-retro-dark rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="window">
          <div className="window-title">
            <span>Experience</span>
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-display mb-6">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="window bg-retro-blue/5 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display text-retro-blue">{exp.role}</h3>
                      <p className="text-lg text-retro-dark">{exp.company}</p>
                    </div>
                    <span className="text-sm text-retro-gray">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-retro-dark">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
