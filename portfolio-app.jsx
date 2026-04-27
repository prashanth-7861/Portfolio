
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "sidebarWide": false,
  "animationSpeed": "normal",
  "showLabHours": true
}/*EDITMODE-END*/;

function App() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [termOpen, setTermOpen] = useState(false);
  const [tweaks, setTweakState] = useState(TWEAK_DEFAULTS);

  // Ctrl+` shortcut for terminal
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === '`') { e.preventDefault(); setTermOpen(t => !t); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Theme on document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Scroll spy
  useEffect(() => {
    const ids = ['hero', 'skills', 'projects', 'education', 'certs', 'extras', 'contact'];
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      }, { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' });
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  // Tweaks protocol
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweakOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweakOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const [tweakOpen, setTweakOpen] = useState(false);
  const setTweak = (key, value) => {
    const next = typeof key === 'object' ? { ...tweaks, ...key } : { ...tweaks, [key]: value };
    setTweakState(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
  };

  // Apply accent CSS var
  useEffect(() => {
    const accents = {
      blue:   { main: '#d97706', light: '#fbbf24', glow: 'rgba(217,119,6,0.18)' },
       teal:   { main: '#0891b2', light: '#22d3ee', glow: 'rgba(8,145,178,0.18)' },
       purple: { main: '#7c3aed', light: '#a78bfa', glow: 'rgba(124,58,237,0.18)' },
       amber:  { main: '#d97706', light: '#fbbf24', glow: 'rgba(217,119,6,0.18)' }
    };
    const a = accents[tweaks.accent] || accents.amber;
    document.documentElement.style.setProperty('--accent', dark ? a.light : a.main);
    document.documentElement.style.setProperty('--accent-glow', a.glow);
    document.documentElement.style.setProperty('--accent-light', a.light);
  }, [tweaks.accent, dark]);

  return (
    <div className={`portfolio-root${tweaks.sidebarWide ? ' wide-sidebar' : ''}`}>
      <Sidebar dark={dark} setDark={setDark} activeSection={activeSection} onTerminal={() => setTermOpen(true)} />

      <main className="main-content">
        <HeroSection dark={dark} />
        <SkillsSection dark={dark} />
        <ProjectsSection />
        <EducationSection />
        <CertsSection />
        <ExtrasSection />
        <ContactSection />
      </main>

      <Terminal open={termOpen} onClose={() => setTermOpen(false)} />

      {tweakOpen && (
        <TweaksPanel onClose={() => {
          setTweakOpen(false);
          window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
        }}>
          <TweakSection title="Accent Color">
            <TweakRadio
              value={tweaks.accent}
              options={[
                { value: 'blue', label: 'Blue' },
                { value: 'teal', label: 'Teal' },
                { value: 'purple', label: 'Purple' },
                { value: 'amber', label: 'Amber' }
              ]}
              onChange={v => setTweak('accent', v)}
            />
          </TweakSection>
          <TweakSection title="Layout">
            <TweakToggle label="Wide Sidebar" value={tweaks.sidebarWide} onChange={v => setTweak('sidebarWide', v)} />
          </TweakSection>
          <TweakSection title="Content">
            <TweakToggle label="Show Lab Hours badge" value={tweaks.showLabHours} onChange={v => setTweak('showLabHours', v)} />
          </TweakSection>
        </TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
