
import Navigation from "../components/Navigation";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Social = () => {
  const socialLinks = [
    {
      platform: "Email",
      link: "mailto:rlathigra11@gmail.com",
      username: "rlathigra11@gmail.com",
      icon: Mail,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      platform: "GitHub",
      link: "https://github.com/raj-1106",
      username: "@raj-1106",
      icon: Github,
      color: "text-gray-800",
      bgColor: "bg-gray-50"
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/raj-lathigra/",
      username: "Raj Lathigra",
      icon: Linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      platform: "Twitter",
      link: "https://x.com/LathigraRaj",
      username: "@LathigraRaj",
      icon: Twitter,
      color: "text-sky-500",
      bgColor: "bg-sky-50"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <Navigation />
      
      <div className="max-w-3xl mx-auto mt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display mb-4">Let's Connect!</h1>
          <p className="text-retro-gray">Feel free to reach out for collaborations or just a friendly chat</p>
        </div>

        <div className="grid gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group window p-6 hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-lg ${social.bgColor} ${social.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-retro-blue mb-1">{social.platform}</h3>
                    <p className="text-retro-gray">{social.username}</p>
                  </div>
                  <span className="ml-auto text-retro-blue opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="window bg-retro-blue/5 p-6 inline-block">
            <p className="text-lg">
              📍 Based in <span className="text-retro-blue">India</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
