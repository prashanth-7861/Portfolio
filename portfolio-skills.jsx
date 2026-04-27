
const { useEffect, useRef, useState } = React;

function RadarChart({ skills, dark, animate }) {
  const cx = 220, cy = 220, r = 130;
  const n = skills.length;
  const step = (2 * Math.PI) / n;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = null;
    const dur = 1200;
    const raf = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setProgress(easeOutCubic(p));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [animate]);

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function angleOf(i) { return i * step - Math.PI / 2; }

  function gridPts(ratio) {
    return skills.map((_, i) => {
      const a = angleOf(i);
      return [cx + r * ratio * Math.cos(a), cy + r * ratio * Math.sin(a)];
    }).map(p => p.join(',')).join(' ');
  }

  function skillPts() {
    return skills.map((s, i) => {
      const a = angleOf(i);
      const ratio = (s.value / 100) * progress;
      return [cx + r * ratio * Math.cos(a), cy + r * ratio * Math.sin(a)];
    }).map(p => p.join(',')).join(' ');
  }

  const accent = dark ? '#60a5fa' : '#2563eb';
  const gridColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
  const axisColor = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)';
  const textColor = dark ? '#94a3b8' : '#64748b';

  return (
    <svg viewBox="0 0 440 440" className="radar-svg">
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {/* Grid rings */}
      {[0.25, 0.5, 0.75, 1].map(ratio => (
        <polygon key={ratio} points={gridPts(ratio)}
          fill="none" stroke={gridColor} strokeWidth={ratio === 1 ? 1.5 : 1} />
      ))}

      {/* Axes */}
      {skills.map((_, i) => {
        const a = angleOf(i);
        return (
          <line key={i}
            x1={cx} y1={cy}
            x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)}
            stroke={axisColor} strokeWidth="1" />
        );
      })}

      {/* Skill polygon */}
      <polygon points={skillPts()}
        fill="url(#radarFill)"
        stroke={accent}
        strokeWidth="2"
        strokeLinejoin="round" />

      {/* Skill dots */}
      {skills.map((s, i) => {
        const a = angleOf(i);
        const ratio = (s.value / 100) * progress;
        return (
          <circle key={i}
            cx={cx + r * ratio * Math.cos(a)}
            cy={cy + r * ratio * Math.sin(a)}
            r="4" fill={accent} />
        );
      })}

      {/* Labels */}
      {skills.map((s, i) => {
        const a = angleOf(i);
        const labelR = r + 36;
        const lx = cx + labelR * Math.cos(a);
        const ly = cy + labelR * Math.sin(a);
        const cosA = Math.cos(a);
        const sinA = Math.sin(a);
        const anchor = Math.abs(cosA) < 0.15 ? 'middle' : (cosA > 0 ? 'start' : 'end');
        // Split long labels onto two lines
        const words = s.name.split(' ');
        const needsSplit = words.length > 1 && s.name.length > 10;
        const mid = Math.ceil(words.length / 2);
        const line1 = words.slice(0, mid).join(' ');
        const line2 = words.slice(mid).join(' ');
        const yOff = needsSplit ? -7 : 4;
        return needsSplit ? (
          <text key={i} textAnchor={anchor} fontSize="11.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fill={textColor}>
            <tspan x={lx} y={ly + yOff}>{line1}</tspan>
            <tspan x={lx} dy="14">{line2}</tspan>
          </text>
        ) : (
          <text key={i} x={lx} y={ly + 4} textAnchor={anchor} fontSize="11.5" fontFamily="'Space Grotesk', sans-serif" fontWeight="500" fill={textColor}>
            {s.name}
          </text>
        );
      })}

      {/* % labels on axis */}
      {[25, 50, 75, 100].map(v => (
        <text key={v}
          x={cx + 4}
          y={cy - (r * v / 100) + 3}
          fontSize="8.5" fontFamily="'JetBrains Mono', monospace"
          fill={dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.22)'}
          textAnchor="start">
          {v}%
        </text>
      ))}
    </svg>
  );
}

function SkillsSection({ dark }) {
  const d = window.PORTFOLIO;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className={`section-inner fade-up ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Competencies</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="skills-layout">
          {/* Radar */}
          <div className="radar-col">
            <RadarChart skills={d.radarSkills} dark={dark} animate={visible} />
          </div>

          {/* Skill categories */}
          <div className="skill-cats-col">
            {d.skillCategories.map(cat => (
              <div key={cat.label} className="skill-cat">
                <div className="skill-cat-label">{cat.label}</div>
                <div className="skill-tags">
                  {cat.items.map(item => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SkillsSection });
