
const { useState, useEffect, useRef } = React;

function useTyping(strings, speed = 75, deleteSpeed = 45, pause = 1800) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;
    const current = strings[idx];
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setWaiting(true);
          setTimeout(() => { setDeleting(true); setWaiting(false); }, pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setIdx((idx + 1) % strings.length);
        }
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, waiting]);

  return text;
}

function HeroSection({ dark }) {
  const d = window.PORTFOLIO;
  const typed = useTyping(d.taglines);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) heroRef.current && heroRef.current.classList.add('visible');
    }, { threshold: 0.1 });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="section hero-section" ref={heroRef}>
      <div className="hero-inner fade-up">
        <div className="hero-photo-col">
          <div className="hero-photo-frame">
            <img src={d.photo} alt="Prashanth Mudigonda" className="hero-photo" />
            <div className="hero-photo-ring"></div>
          </div>
          <div className="hero-status">
            <span className="status-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div className="hero-text-col">
          <div className="hero-eyebrow">Cybersecurity Professional</div>
          <h1 className="hero-name">Prashanth<br /><span className="hero-last">Mudigonda</span></h1>

          <div className="hero-typed-row">
            <span className="typed-text">{typed}</span>
            <span className="typed-cursor">|</span>
          </div>

          <p className="hero-about">{d.about}</p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {d.location}
            </span>
            <span className="hero-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Auburn University · 3.79 GPA
            </span>
            <span className="hero-meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              1,000+ Lab Hours
            </span>
          </div>

          <div className="hero-ctas">
            <a href="https://github.com/prashanth-7861" target="_blank" rel="noopener" className="cta-primary">
              View GitHub
            </a>
            <a href="resume.html" target="_blank" rel="noopener" className="cta-primary" style={{background: 'var(--text)', boxShadow: 'none'}}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              &nbsp;Resume
            </a>
            <a href="https://www.linkedin.com/in/mudigondaprashanth" target="_blank" rel="noopener" className="cta-secondary">
              LinkedIn Profile
            </a>
            <button className="cta-secondary" onClick={() => {
              const el = document.getElementById('contact');
              if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 24; window.scrollTo({ top, behavior: 'smooth' }); }
            }}>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="hero-badges">
        {['C|EH v12', 'Kali Linux', 'Wireshark', 'WireGuard', 'Metasploit', 'Autopsy', 'AES-256'].map(b => (
          <span key={b} className="hero-badge">{b}</span>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { HeroSection });
