
import Navigation from "../components/Navigation";

const Work = () => {
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
      company: "5irechain",
      role: "Business Development Executive Intern",
      period: "December 2024 - March 2025",
      achievements: [
        "Analyzed and identified potential partnerships, securing new collaborations to enhance the Sirechain ecosystem's outreach and adoption.",
        "Conducted market research and competitive analysis, providing insights that shaped business strategy.",
      ]
    },
    {
      company: "Freelance Developer",
      role: "Blockchain Developer",
      period: "April 2025 - Present",
      achievements: [
        "Assisted multiple projects in auditing, debugging, and enhancing Solidity smart contracts, improving reliability and security.",
        "Contributed to NFT and DeFi initiatives by writing and refining smart contract logic, aligning with project-specific requirements.",
        "Currently developing a full-stack decentralized application with a React/Node.js frontend and smart contract backend, showcasing end-to-end dApp development skills.",
        "Collaborated directly with project teams and individual clients to deliver tailored blockchain solutions.",
      ]
    },
    {
      company: "JadeQuest consulting pvt ltd",
      role: "Fullstack Blockchain Developer",
      period: "April 2026 - Present",
      achievements: [
        " Developing blockchain solutions using Hyperledger frameworks for enterprise use cases.",
        "Designing smart contract logic and backend workflows for Hyperledger-based systems.",
        " Working on TDR project end-to-end blockchain architecture including network setup, chaincode development, backend and integration.",
        " TDR is a blockchain-based government portal that digitizes Transfer of Development Rights process using Hyperledger Fabric for immutable record-keeping, Ethereum for cross-chain verification, and OCR for automated certificate generation",
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Navigation />
      <div className="window">
        <div className="window-title">
          <span>Work Experience</span>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-display mb-6">Professional Experience</h1>
          <div className="space-y-6">
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
  );
};

export default Work;
