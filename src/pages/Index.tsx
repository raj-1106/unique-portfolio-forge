
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen p-8">
      <Navigation />
      
      <main className="window">
        <div className="window-title">
          <span>Welcome</span>
        </div>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 text-sm bg-retro-mint text-retro-dark rounded">
                Hello, I'm a Developer
              </div>
              <h1 className="text-4xl font-display">
                Creating Digital Experiences
              </h1>
              <p className="text-retro-gray">
                I specialize in creating beautiful, functional websites and applications
                that make a lasting impression.
              </p>
            </div>
            <div className="window bg-retro-blue/10 p-6">
              <pre className="font-mono text-sm text-retro-blue">
{`// Quick Info
const developer = {
  name: "Your Name",
  location: "Earth",
  skills: ["Web Dev", "Design", "UX"],
  status: "Available for projects"
};`}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
