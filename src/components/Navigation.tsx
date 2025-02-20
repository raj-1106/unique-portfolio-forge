
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "About me", path: "/" },
    { name: "Projects", path: "/webflow" },
    { name: "Work Experience", path: "/work" },
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
      <div className="p-4">
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm sm:text-base ${location.pathname === link.path ? 'active' : ''}`}
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
