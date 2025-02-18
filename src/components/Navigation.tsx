
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "About me", path: "/work" },
    { name: "Projects", path: "/webflow" },
    { name: "Work Experience", path: "/favorites" },
    { name: "Social", path: "/social" }
  ];

  return (
    <nav className="window mb-8">
      <div className="window-title">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span>Portfolio Navigation</span>
        <div className="w-12" />
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
