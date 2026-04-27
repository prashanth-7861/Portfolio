
const { useEffect, useRef, useState } = React;

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function EducationSection() {
  const d = window.PORTFOLIO;
  const [ref, visible] = useFadeIn();

  return (
    <section id="education" className="section education-section" ref={ref}>
      <div className={`section-inner fade-up ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-timeline">
          {d.education.map((edu, i) => (
            <div key={i} className="edu-item">
              <div className="edu-timeline-col">
                <div className="edu-dot"></div>
                {i < d.education.length - 1 && <div className="edu-line"></div>}
              </div>
              <div className="edu-card">
                <div className="edu-header">
                  <div className="edu-years">{edu.years}</div>
                  <div className="edu-gpa-badge">GPA {edu.gpa}</div>
                </div>
                <h3 className="edu-school">{edu.school}</h3>
                <div className="edu-location">{edu.location}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-courses">
                  {edu.courses.map(c => <span key={c} className="course-tag">{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertsSection() {
  const d = window.PORTFOLIO;
  const [ref, visible] = useFadeIn();

  return (
    <section id="certs" className="section certs-section" ref={ref}>
      <div className={`section-inner fade-up ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications & Training</h2>
        </div>

        <div className="certs-grid">
          {d.certifications.map((cert, i) => (
            <div key={i} className={`cert-card ${cert.inProgress ? 'in-progress' : ''}`}>
              <div className="cert-badge">{cert.badge}</div>
              <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-org">{cert.org}</div>
              </div>
              {cert.inProgress && <span className="cert-status">In Progress</span>}
              {cert.training && !cert.inProgress && <span className="cert-training">Trained</span>}
              {!cert.inProgress && !cert.training && <span className="cert-check">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtrasSection() {
  const d = window.PORTFOLIO;
  const [ref, visible] = useFadeIn();

  return (
    <section id="extras" className="section extras-section" ref={ref}>
      <div className={`section-inner fade-up ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Beyond the Classroom</span>
          <h2 className="section-title">Experience & Activities</h2>
        </div>

        <div className="extras-list">
          {d.extracurricular.map((item, i) => (
            <div key={i} className="extra-item">
              <div className="extra-index">0{i + 1}</div>
              <div className="extra-content">
                <div className="extra-header">
                  <h3 className="extra-title">{item.title}</h3>
                  <div className="extra-meta">
                    <span className="extra-org">{item.org}</span>
                    {item.date && <span className="extra-date">{item.date}</span>}
                  </div>
                </div>
                <p className="extra-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, visible] = useFadeIn();
  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className={`section-inner fade-up ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-intro">
              I'm actively seeking entry-level SOC Analyst, Network Security Analyst, or related cybersecurity roles. 
              If you have an opportunity or just want to connect — reach out.
            </p>

            <div className="contact-links">
              <a href="https://github.com/prashanth-7861" target="_blank" rel="noopener" className="contact-link-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                <div>
                  <div className="clc-label">GitHub</div>
                  <div className="clc-value">github.com/prashanth-7861</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/mudigondaprashanth" target="_blank" rel="noopener" className="contact-link-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <div>
                  <div className="clc-label">LinkedIn</div>
                  <div className="clc-value">linkedin.com/in/mudigondaprashanth</div>
                </div>
              </a>

              <div className="contact-link-card no-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <div className="clc-label">Location</div>
                  <div className="clc-value">Alpharetta, GA, USA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-available-card">
              <div className="avail-dot"></div>
              <div className="avail-text">
                <strong>Open to Opportunities</strong>
                <p>SOC Analyst · Network Security Analyst · Security Operations</p>
              </div>
            </div>
            <div className="contact-skills-highlight">
              <div className="csh-label">Ready to contribute in:</div>
              {['Threat Detection & Analysis', 'Network Traffic Analysis', 'Incident Response', 'Penetration Testing', 'Digital Forensics'].map(s => (
                <div key={s} className="csh-item">
                  <span className="csh-arrow">→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-note">
        Built with precision by Prashanth Mudigonda · {new Date().getFullYear()}
      </div>
    </section>
  );
}

Object.assign(window, { EducationSection, CertsSection, ExtrasSection, ContactSection });
