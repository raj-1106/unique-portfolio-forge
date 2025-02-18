
import Navigation from "../components/Navigation";

const Social = () => {
  const socialLinks = [
    {
      platform: "Email",
      link: "rlathigra11@gmail.com",
      username: "rlathigra11@gmail.com"
    },
    {
      platform: "GitHub",
      link: "https://github.com/yourusername",
      username: "@yourusername"
    },
    {
      platform: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
      username: "Raj Lathigra"
    },
    {
      platform: "Twitter",
      link: "https://twitter.com/yourusername",
      username: "@yourusername"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Navigation />
      <div className="window">
        <div className="window-title">
          <span>Social</span>
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-display mb-6">Connect with Me</h1>
          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="window bg-retro-blue/5 p-4 flex items-center justify-between hover:bg-retro-blue/10 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-display text-retro-blue">{social.platform}</h3>
                  <p className="text-sm text-retro-gray">{social.username}</p>
                </div>
                <span className="text-retro-blue">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
