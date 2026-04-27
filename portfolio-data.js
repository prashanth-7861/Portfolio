// Portfolio data — all content in one place
window.PORTFOLIO = {
  name: "Prashanth Mudigonda",
  taglines: [
    "SOC / Network Security Analyst",
    "Ethical Hacker — C|EH v12 Training",
    "Digital Forensics Specialist",
    "Penetration Tester",
    "Malware Analyst"
  ],
  about: "MS Cybersecurity graduate (3.79 GPA) — 1,000+ hours deep in Kali Linux, Metasploit, Wireshark, and live attack simulations. I don't just study threats; I've hunted them through real traffic, reverse-engineered binaries, and built production-grade cryptographic tooling from first principles. From kernel hardening to dual-layer AES vault architecture, I bring systems-level depth that turns day-one ramp-up into immediate impact for SOC and network security teams.",
  location: "Alpharetta, GA, USA",
  github: "https://github.com/prashanth-7861",
  linkedin: "https://www.linkedin.com/in/mudigondaprashanth",
  photo: "uploads/photo-1777317961221.png",

  radarSkills: [
    { name: "Linux / OS", value: 92 },
    { name: "Network Security", value: 88 },
    { name: "Pen Testing", value: 82 },
    { name: "Python", value: 85 },
    { name: "Digital Forensics", value: 78 },
    { name: "Cryptography", value: 80 },
    { name: "Malware Analysis", value: 76 },
    { name: "SOC / SIEM", value: 72 }
  ],

  skillCategories: [
    { label: "Languages", items: ["Python", "Bash", "Java", "C++", "HTML", "CSS", "PHP"] },
    { label: "Security Tools", items: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "Nessus", "sqlmap", "Aircrack-ng", "Hydra", "Medusa", "BeEF", "SET"] },
    { label: "Forensics", items: ["Autopsy", "Photorec", "tsk_recover", "foremost", "OWASP Juice Shop"] },
    { label: "Operating Systems", items: ["Kali Linux", "Parrot OS", "Ubuntu", "Arch + Hyprland", "Debian", "Windows"] },
    { label: "Python Libraries", items: ["NumPy", "Pandas", "Scikit-learn", "Flask", "Django", "PyQt5", "Matplotlib", "SciPy", "Seaborn"] },
    { label: "Databases & Infra", items: ["MySQL", "ER Modeling", "WampServer", "VirtualBox"] }
  ],

  projects: [
    {
      id: "wireseal",
      name: "WireSeal",
      featured: true,
      category: ["Security Tools", "Automation"],
      tagline: "WireGuard server automation — zero plaintext secrets on disk",
      description: "Production-grade VPN automation tool with dual-layer encrypted vault (AES-256-GCM-SIV + ChaCha20-Poly1305), Argon2id KDF, LUKS-style multi-admin keyslots, TOTP 2FA, ephemeral client TTLs, and a full web dashboard. Zero-trust network access across Linux, macOS, and Windows.",
      highlights: [
        "Dual-layer AEAD vault: ChaCha20-Poly1305 + AES-256-GCM-SIV",
        "Argon2id KDF — 256 MiB memory cost, calibrated ≥500ms",
        "ZTNA: role-based access, TOTP 2FA, ephemeral peer TTLs",
        "Cross-platform: Linux x86_64/ARM64, macOS arm64, Windows x86_64",
        "231 commits · 31 releases · pip-audit CI supply-chain security"
      ],
      tech: ["Python", "WireGuard", "AES-256-GCM-SIV", "ChaCha20-Poly1305", "Argon2id", "TypeScript", "nftables"],
      github: "https://github.com/prashanth-7861/WireSeal",
      stats: { commits: 231, releases: 31, lang: "Python 58.7% · TypeScript 32.4% · Shell 4.8%" }
    },
    {
      id: "file-sig",
      name: "File Signature Analyzer",
      featured: false,
      showcase: true,
      category: ["Security Tools"],
      tagline: "Binary-level file type identification tool",
      description: "Python tool for identifying file types from binary signatures regardless of extension. Handles ambiguous multi-format signatures (ZIP/EPUB/DOCX overlap), creates disambiguation copies, and generates detailed analysis reports.",
      highlights: [
        "Deep binary content inspection beyond file extensions",
        "Handles shared-signature formats (ZIP, EPUB, DOCX, etc.)",
        "Automated detailed analysis report generation"
      ],
      tech: ["Python", "Binary Analysis", "File Forensics"],
      github: "https://github.com/prashanth-7861/file-signature-analyzer"
    },
    {
      id: "log-analyzer",
      name: "Log Analyzer & Alert Triage",
      featured: false,
      showcase: true,
      category: ["Security Tools", "SOC"],
      tagline: "Python SOC tool for parsing, detecting & triaging security events",
      description: "Production-grade log analysis engine that parses Windows .evtx and Linux auth.log files, runs behavioral detection rules mapped to MITRE ATT&CK tactics, correlates alerts by source IP and user within configurable time windows, and outputs interactive HTML triage reports — purpose-built for SOC analyst workflows.",
      highlights: [
        "MITRE ATT&CK mapped: Credential Access, Privilege Escalation, Lateral Movement, Persistence",
        "Binary .evtx parser + regex syslog engine — no external system tools required",
        "Alert deduplication & correlation by IP/user within dynamic time windows",
        "Detects: brute force, off-hours logins, new users, account lockout, lateral movement",
        "Outputs: interactive HTML visual cards, structured JSON, and CSV reports"
      ],
      tech: ["Python", "MITRE ATT&CK", "EVTX Parsing", "YAML Config", "HTML Reports", "SOC"],
      github: "https://github.com/prashanth-7861/log-analyzer-alert-triage",
      termLines: [
        { type: 'cmd', text: 'python main.py --input samples/sample.evtx --type evtx --output both' },
        { type: 'comment', text: '  # parsing Windows Event Log (binary .evtx)...' },
        { type: 'out', text: '  [4625] failed login: user=admin  src=192.168.1.45' },
        { type: 'out', text: '  [4625] failed login: user=admin  src=192.168.1.45  (×12 in 60s)' },
        { type: 'alert', text: '  ⚠ ALERT: Brute Force  [TA0006 - Credential Access]' },
        { type: 'out', text: '  [4624] successful login: user=admin  src=192.168.1.45' },
        { type: 'alert', text: '  ⚠ ALERT: Successful Login After Failures  [TA0008]' },
        { type: 'out', text: '  [4672] special privileges: user=admin' },
        { type: 'alert', text: '  ⚠ ALERT: Privilege Escalation Detected  [TA0004]' },
        { type: 'success', text: '  ✓ 3 alerts correlated  →  alerts_report.html' },
        { type: 'success', text: '  ✓ alerts_report.json + alerts_report.csv saved' },
      ]
    },
    {
      id: "enotes",
      name: "E-Notes",
      featured: false,
      showcase: false,
      category: ["Cryptography", "Security Tools"],
      tagline: "Zero-knowledge encrypted note-taking app — cross-platform Flutter",
      description: "Offline-first, zero-knowledge note app with a full cryptographic stack: AES-256-GCM per-note encryption, PBKDF2 (600k iterations) key derivation, HKDF sub-key hierarchy, biometric unlock, SQLCipher at-rest encryption, and 291 passing tests. Notes are encrypted before storage — the server never sees plaintext.",
      highlights: [
        "Zero-knowledge: AES-256-GCM with random nonces, SQLCipher at rest (NIST SP 800-38D)",
        "PBKDF2-HMAC-SHA256 (600k iterations) + HKDF key hierarchy (MEK → DEK)",
        "PIN + Biometric (Face ID / Fingerprint) + 16-digit Account Key recovery",
        "291 tests: crypto vectors, auth flows, DB integrity, round-trip encrypt/decrypt",
        "Cross-platform: Android · iOS · macOS · Windows · Linux · Web (2 releases)"
      ],
      tech: ["Flutter", "Dart", "AES-256-GCM", "PBKDF2", "SQLCipher", "HKDF"],
      github: "https://github.com/prashanth-7861/E-Notes"
    },
    {
      id: "aes",
      name: "AES Encryption Engine",
      featured: false,
      category: ["Cryptography"],
      tagline: "AES block cipher built from scratch in Python",
      description: "Custom AES pipeline implementing every transformation step — SubBytes, ShiftRows, MixColumns, AddRoundKey — without high-level crypto libraries. Includes 128-bit key scheduling, round-key derivation, and file I/O with full byte/hex/matrix state representation.",
      highlights: [
        "Manual SubBytes, ShiftRows, MixColumns, AddRoundKey",
        "Custom 128-bit key schedule and round-key expansion",
        "File-driven I/O; byte/hex/matrix state representation"
      ],
      tech: ["Python", "AES", "Block Ciphers", "Cryptography"]
    },
    {
      id: "bash",
      name: "Archive Utility",
      featured: false,
      category: ["Automation"],
      tagline: "Bash script for compression and extraction",
      description: "Systems-level bash utility for compressing and extracting archives — demonstrating Linux scripting skills directly applicable to SOC automation, log management, and incident response workflows.",
      highlights: ["Multi-format archive support", "Automation-ready scripting"],
      tech: ["Bash", "Linux", "Scripting"]
    },
    {
      id: "covid-ml",
      name: "COVID-19 ML Detector",
      featured: false,
      category: ["Machine Learning"],
      tagline: "8-model clinical text classifier for COVID-19",
      description: "Benchmarked 8 ML classifiers (LR, Naïve Bayes, SVM, Decision Tree, Bagging, AdaBoost, Random Forest, Gradient Boosting) on clinical text data. Skills directly transferable to anomaly detection, alert tuning, and log analysis in security operations.",
      highlights: [
        "8 ML models compared for optimal precision/recall",
        "Feature engineering for unstructured clinical text",
        "Methods applicable to SOC anomaly detection"
      ],
      tech: ["Python", "Scikit-learn", "NLP", "Pandas", "ML"]
    },
    {
      id: "subway",
      name: "Subway Flow Forecaster",
      featured: false,
      category: ["Machine Learning"],
      tagline: "Time-series passenger flow prediction + dashboard",
      description: "Forecasting system using NumPy, Pandas, and SciPy with a Django/WampServer dashboard to predict multi-station passenger flow from historical and external factors — building time-series and visualization skills applicable to network traffic baseline analysis.",
      highlights: [
        "Multi-station time-series forecasting",
        "Django + WampServer visualization dashboard",
        "External factor correlation analysis"
      ],
      tech: ["Python", "Django", "NumPy", "SciPy", "Pandas", "Matplotlib"]
    }
  ],

  education: [
    {
      school: "Auburn University at Montgomery",
      location: "AL, USA",
      degree: "M.S. Computer & Information Systems Security",
      gpa: "3.79 / 4.0",
      years: "2023 – 2025",
      courses: ["Malware Analysis & Digital Forensics", "Ethical Hacking & Pen Testing", "Linux", "Python", "Network Security & Reliability", "C++", "Advanced Operating Systems", "Advanced Network Systems", "Database Systems"]
    },
    {
      school: "Sri Indu Institute of Engineering & Technology",
      location: "JNTU Hyderabad, India",
      degree: "B.Tech Computer Science Engineering",
      gpa: "6.23 / 10",
      years: "2018 – 2022",
      courses: ["Design & Analysis of Algorithms", "Data Structures", "Data Mining", "Database Management Systems", "Computer Networks", "Software Engineering", "Compiler Design", "Formal Language & Automata Theory"]
    }
  ],

  certifications: [
    { name: "C|EH v12 — Ethical Hacker Training", org: "EC-Council Accredited Training Center", badge: "CEH", training: true },
    { name: "Google Cybersecurity Professional Certificate", org: "Google via Coursera", badge: "GCP", inProgress: true },
    { name: "Mastercard Cybersecurity Virtual Experience", org: "Forage · Mar 2023", badge: "MC" },
    { name: "Diploma in Computer Application", org: "Microsoft Office Suite", badge: "MS" },
    { name: "Ethical Hacking A–Z: Beginner to Expert", org: "Anthony Timbers — Udemy", badge: "UD" },
    { name: "Ethical Hacking: Network Attacks", org: "Peter A — Udemy", badge: "UD" }
  ],

  extracurricular: [
    { title: "Mastercard Cybersecurity Virtual Experience", org: "Forage", date: "Mar 2023", description: "Simulations of threat analysis, incident handling, and security decision-making in a corporate context." },
    { title: "Cybersecurity Webinar", org: "MoxieHawk", date: "", description: "Exposure to current threat trends, attack techniques, and defensive strategies." },
    { title: "Offensive & Defensive Techniques Workshop", org: "HackingFlix (Gautam Kumawat)", date: "", description: "Hands-on offensive techniques and defensive considerations reinforcing real-world attacker methodology." },
    { title: "Technical Fest Organizer", org: "College", date: "", description: "Planned and organized technical events, demonstrating leadership and cross-functional collaboration." }
  ]
};
