
const { useState, useEffect, useRef } = React;

const ALL_CATS = ['All', 'Security Tools', 'SOC', 'Cryptography', 'Automation', 'Machine Learning'];

function GitLinkSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function FeaturedProject({ project }) {
  return (
    <div className="featured-project">
      <div className="featured-badge">Featured Project</div>
      <div className="featured-inner">
        <div className="featured-left">
          <div className="featured-lock">
            <svg viewBox="0 0 60 60" width="60" height="60" fill="none">
              <rect x="8" y="26" width="44" height="30" rx="6" fill="var(--accent)" opacity="0.15"/>
              <rect x="8" y="26" width="44" height="30" rx="6" stroke="var(--accent)" strokeWidth="2.5"/>
              <path d="M18 26V20a12 12 0 0 1 24 0v6" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="30" cy="42" r="4" fill="var(--accent)"/>
              <line x1="30" y1="46" x2="30" y2="50" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="featured-name">{project.name}</h3>
          <p className="featured-tagline">{project.tagline}</p>
          <p className="featured-desc">{project.description}</p>

          <div className="featured-highlights">
            {project.highlights.map((h, i) => (
              <div key={i} className="highlight-item">
                <span className="highlight-tick">▸</span>
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="featured-stats">
            <div className="stat-pill"><span className="stat-n">{project.stats.commits}</span><span className="stat-l">commits</span></div>
            <div className="stat-pill"><span className="stat-n">{project.stats.releases}</span><span className="stat-l">releases</span></div>
          </div>

          <div className="featured-tech">
            {project.tech.map(t => <span key={t} className="tech-tag accent">{t}</span>)}
          </div>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" className="project-github-btn">
              <GitLinkSVG /> View on GitHub
            </a>
          )}
        </div>

        <div className="featured-right">
          <div className="featured-code-window">
            <div className="fw-titlebar">
              <div className="fw-dots"><span></span><span></span><span></span></div>
              <span className="fw-title">wireseal init</span>
            </div>
            <div className="fw-body">
              <div className="fw-line"><span className="fw-prompt">$</span> <span className="fw-cmd">sudo wireseal init --subnet 10.0.0.1/24</span></div>
              <div className="fw-line fw-comment">  # Initializing WireSeal vault...</div>
              <div className="fw-line fw-out">  ✓ Argon2id KDF: 256 MiB · 13 iterations</div>
              <div className="fw-line fw-out">  ✓ Layer 1: ChaCha20-Poly1305 [inner]</div>
              <div className="fw-line fw-out">  ✓ Layer 2: AES-256-GCM-SIV   [outer]</div>
              <div className="fw-line fw-out">  ✓ Server keypair generated (vault-only)</div>
              <div className="fw-line fw-out">  ✓ Firewall: nftables + NAT masquerade</div>
              <div className="fw-line fw-out">  ✓ WireGuard interface wg0 up</div>
              <div className="fw-line fw-success">  ✓ Zero plaintext secrets on disk</div>
              <div className="fw-line"><span className="fw-prompt">$</span> <span className="fw-cmd">sudo wireseal add-client alice</span></div>
              <div className="fw-line fw-out">  ✓ alice → 10.0.0.2 (PSK: os.urandom(32))</div>
              <div className="fw-line fw-out">  ✓ QR code ready · auto-clears in 60s</div>
              <div className="fw-line fw-blink">▋</div>
            </div>
          </div>

          <div className="featured-lang-bar">
            <div className="lang-title">Languages</div>
            {[
              { name: 'Python', pct: 58.7, color: '#3b82f6' },
              { name: 'TypeScript', pct: 32.4, color: '#06b6d4' },
              { name: 'Shell', pct: 4.8, color: '#8b5cf6' },
              { name: 'Other', pct: 4.1, color: '#94a3b8' }
            ].map(l => (
              <div key={l.name} className="lang-row">
                <span className="lang-name">{l.name}</span>
                <div className="lang-track">
                  <div className="lang-fill" style={{ width: l.pct + '%', background: l.color }}></div>
                </div>
                <span className="lang-pct">{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="pc-header">
        <div className="pc-cats">
          {project.category.map(c => <span key={c} className="pc-cat">{c}</span>)}
        </div>
        <h3 className="pc-name">{project.name}</h3>
        <p className="pc-tagline">{project.tagline}</p>
      </div>

      <div className="pc-body">
        <p className="pc-desc">{project.description}</p>
        <div className="pc-highlights">
          {project.highlights.map((h, i) => (
            <div key={i} className="pc-hl">
              <span className="pc-hl-dot">▸</span>{h}
            </div>
          ))}
        </div>
      </div>

      <div className="pc-footer">
        <div className="pc-tech">
          {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <div className="pc-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener" className="pc-link" title="View on GitHub">
              <GitLinkSVG />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ShowcaseProject({ project, flip }) {
  const termLines = project.id === 'log-analyzer' ? [
    { type: 'cmd', text: 'python main.py --input samples/sample.evtx --type evtx' },
    { type: 'comment', text: '  # parsing Windows Event Log (binary .evtx)...' },
    { type: 'out', text: '  [4625] failed login: user=admin  src=192.168.1.45' },
    { type: 'out', text: '  [4625] failed login ×12 in 60s  src=192.168.1.45' },
    { type: 'alert', text: '  ⚠ ALERT: Brute Force  [TA0006 · Credential Access]' },
    { type: 'out', text: '  [4624] successful login after failures: user=admin' },
    { type: 'alert', text: '  ⚠ ALERT: Login After Failures  [TA0008]' },
    { type: 'out', text: '  [4672] special privileges assigned: user=admin' },
    { type: 'alert', text: '  ⚠ ALERT: Privilege Escalation  [TA0004]' },
    { type: 'success', text: '  ✓ 3 correlated alerts  →  alerts_report.html' },
    { type: 'success', text: '  ✓ alerts_report.json + alerts_report.csv saved' },
  ] : [
    { type: 'cmd', text: 'python file_sig_analyzer.py suspicious_file' },
    { type: 'comment', text: '  # reading magic bytes from binary...' },
    { type: 'out', text: '  offset 0x00: PK\\x03\\x04  → ZIP family detected' },
    { type: 'out', text: '  deep content scan: [Content_Types].xml found' },
    { type: 'out', text: '  word/document.xml  → DOCX body confirmed' },
    { type: 'success', text: '  ✓ RESULT: Microsoft Word Document (.docx)' },
    { type: 'comment', text: '  # file had no extension — extension spoofed' },
    { type: 'cmd', text: 'python file_sig_analyzer.py archive.jpg' },
    { type: 'out', text: '  offset 0x00: PK\\x03\\x04  → ZIP / EPUB / DOCX' },
    { type: 'out', text: '  ambiguous: 3 matching signatures' },
    { type: 'out', text: '  creating: archive_zip.zip, archive_epub.epub' },
    { type: 'success', text: '  ✓ report saved → analysis_report.txt' },
  ];

  const filename = project.id === 'log-analyzer' ? 'main.py — alert-triage' : 'file_sig_analyzer.py';

  const icon = project.id === 'log-analyzer' ? (
    <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
      <rect x="4" y="8" width="52" height="44" rx="6" fill="var(--accent)" opacity="0.10"/>
      <rect x="4" y="8" width="52" height="44" rx="6" stroke="var(--accent)" strokeWidth="2.2"/>
      <line x1="14" y1="22" x2="46" y2="22" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="14" y1="30" x2="38" y2="30" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="14" y1="38" x2="42" y2="38" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
      <circle cx="46" cy="38" r="8" fill="var(--accent)" opacity="0.18"/>
      <circle cx="46" cy="38" r="8" stroke="var(--accent)" strokeWidth="2"/>
      <line x1="46" y1="34" x2="46" y2="39" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="46" cy="41.5" r="1.2" fill="var(--accent)"/>
    </svg>
  ) : (
    <svg viewBox="0 0 60 60" width="56" height="56" fill="none">
      <rect x="6" y="18" width="48" height="38" rx="6" fill="var(--accent)" opacity="0.12"/>
      <rect x="6" y="18" width="48" height="38" rx="6" stroke="var(--accent)" strokeWidth="2.2"/>
      <rect x="18" y="8" width="24" height="12" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.2"/>
      <line x1="20" y1="34" x2="40" y2="34" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="40" x2="34" y2="40" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="44" cy="26" r="5" fill="var(--accent)" opacity="0.8"/>
      <line x1="47.5" y1="29.5" x2="51" y2="33" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  const terminal = (
    <div className="showcase-right">
      <div className="featured-code-window">
        <div className="fw-titlebar">
          <div className="fw-dots"><span></span><span></span><span></span></div>
          <span className="fw-title">{filename}</span>
        </div>
        <div className="fw-body">
          {termLines.map((l, i) => {
            if (l.type === 'cmd')     return <div key={i} className="fw-line"><span className="fw-prompt">$</span> <span className="fw-cmd">{l.text}</span></div>;
            if (l.type === 'comment') return <div key={i} className="fw-line fw-comment">{l.text}</div>;
            if (l.type === 'out')     return <div key={i} className="fw-line fw-out">{l.text}</div>;
            if (l.type === 'alert')   return <div key={i} className="fw-line fw-alert">{l.text}</div>;
            if (l.type === 'success') return <div key={i} className="fw-line fw-success">{l.text}</div>;
            return <div key={i} className="fw-line">&nbsp;</div>;
          })}
          <div className="fw-line fw-blink">▋</div>
        </div>
      </div>
    </div>
  );

  const info = (
    <div className="featured-left showcase-info">
      <div className="featured-lock">{icon}</div>
      <h3 className="featured-name">{project.name}</h3>
      <p className="featured-tagline">{project.tagline}</p>
      <p className="featured-desc">{project.description}</p>
      <div className="featured-highlights">
        {project.highlights.map((h, i) => (
          <div key={i} className="highlight-item">
            <span className="highlight-tick">▸</span><span>{h}</span>
          </div>
        ))}
      </div>
      <div className="featured-tech">
        {project.tech.map(t => <span key={t} className="tech-tag accent">{t}</span>)}
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener" className="project-github-btn" style={{marginTop: 18}}>
          <GitLinkSVG /> View on GitHub
        </a>
      )}
    </div>
  );

  return (
    <div className="showcase-project">
      <div className="featured-inner showcase-inner">
        {flip ? <>{info}{terminal}</> : <>{terminal}{info}</>}
      </div>
    </div>
  );
}

function ProjectsSection() {
  const d = window.PORTFOLIO;
  const [filter, setFilter] = useState('All');
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = d.projects.find(p => p.featured);
  const showcases = d.projects.filter(p => p.showcase);
  const rest = d.projects.filter(p => !p.featured && !p.showcase && (filter === 'All' || p.category.includes(filter)));

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className={`section-inner fade-up ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <FeaturedProject project={featured} />

        {showcases.map((p, i) => (
          <ShowcaseProject key={p.id} project={p} flip={i % 2 === 1} />
        ))}

        <div className="projects-subheader">
          <h3 className="projects-sub-title">More Projects</h3>
          <div className="filter-btns">
            {ALL_CATS.map(cat => (
              <button key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {rest.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProjectsSection });
