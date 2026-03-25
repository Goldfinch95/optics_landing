import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS, NAV_LINKS } from "../data/links.data";
import "./navbar.css";

export function Navbar() {
  return (
    <aside className="navbar-sidebar flex flex-col justify-between h-full w-60 bg-gray-900 text-white">
      {/* Logo */}
      <div className="navbar-logo p-4">
        <span className="font-bold text-lg">Óptica Prisma</span>
      </div>

      {/* Links de navegación */}
      <nav className="navbar-links flex-1 px-4 space-y-2">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="navbar-item block py-2">
            {link.label}
            {link.hasArrow && <span className="navbar-arrow">›</span>}
          </a>
        ))}
      </nav>

      {/* Redes sociales */}
      <div className="navbar-bottom p-4  w-full">
        <div className="navbar-social flex justify-center gap-4 w-full">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              title={social.label}
              className="navbar-social-icon text-2xl hover:text-blue-500 transition-colors"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
