
const { useState } = React;

const NAV_ITEMS = [
  { id: 'hero',      label: 'About',           icon: '◈' },
  { id: 'skills',    label: 'Skills',           icon: '◉' },
  { id: 'projects',  label: 'Projects',         icon: '◧' },
  { id: 'education', label: 'Education',        icon: '◎' },
  { id: 'certs',     label: 'Certifications',   icon: '◆' },
  { id: 'extras',    label: 'Experience',       icon: '◐' },
  { id: 'contact',   label: 'Contact',          icon: '◑' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top, behavior: 'smooth' });
}

function GitHubSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInSVG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TermSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}

function MoonSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function SunSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function Sidebar({ dark, setDark, activeSection, onTerminal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>

      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Logo / Identity */}
        <div className="sidebar-logo">
          <div className="sidebar-avatar">PM</div>
          <div className="sidebar-identity">
            <span className="sidebar-fname">Prashanth</span>
            <span className="sidebar-lname">Mudigonda</span>
          </div>
        </div>

        <div className="sidebar-divider"></div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <span className="nav-pip"></span>
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer"></div>

        {/* Terminal button */}
        <button className="terminal-btn" onClick={onTerminal} title="Open Terminal  Ctrl+`">
          <TermSVG />
          <span>Terminal</span>
          <span className="term-hint">Ctrl+`</span>
        </button>

        {/* Resume link */}
        <a href="resume.html" target="_blank" rel="noopener" className="resume-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <span>View Resume</span>
        </a>

        <div className="sidebar-divider"></div>

        {/* Socials */}
        <div className="sidebar-socials">
          <a href="https://github.com/prashanth-7861" target="_blank" rel="noopener" className="social-link">
            <GitHubSVG /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mudigondaprashanth" target="_blank" rel="noopener" className="social-link">
            <LinkedInSVG /> LinkedIn
          </a>
        </div>

        {/* Theme toggle */}
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? <SunSVG /> : <MoonSVG />}
          <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </aside>

      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)}></div>}
    </>
  );
}

Object.assign(window, { Sidebar });
