
const { useState, useEffect, useRef } = React;

const COMMANDS = {
  whoami: () => [
    '  prashanth mudigonda',
    '  ms cybersecurity · auburn university · 3.79 gpa',
    '  alpharetta, ga, usa',
    ''
  ],
  help: () => [
    '  available commands:',
    '    whoami       — identity & credentials',
    '    ls           — list projects & skills',
    '    skills       — core competencies',
    '    nmap         — run a demo scan',
    '    wireseal     — project info',
    '    certifications — view certs',
    '    clear        — clear terminal',
    '    exit         — close terminal',
    ''
  ],
  ls: () => [
    '  drwxr-xr-x  projects/',
    '    ├── wireseal/',
    '    ├── aes-engine/',
    '    ├── file-sig-analyzer/',
    '    ├── covid-ml-detector/',
    '    └── subway-forecaster/',
    '',
    '  drwxr-xr-x  skills/',
    '    ├── linux-os-mastery',
    '    ├── network-security',
    '    ├── penetration-testing',
    '    ├── digital-forensics',
    '    └── cryptography',
    ''
  ],
  skills: () => [
    '  ┌─ core competencies ─────────────────────────────┐',
    '  │  linux / os mastery        ████████████ 92%     │',
    '  │  network security          ███████████  88%     │',
    '  │  python scripting          ██████████   85%     │',
    '  │  penetration testing       █████████    82%     │',
    '  │  cryptography              █████████    80%     │',
    '  │  digital forensics         █████████    78%     │',
    '  │  malware analysis          ████████     76%     │',
    '  │  soc / siem                ████████     72%     │',
    '  └─────────────────────────────────────────────────┘',
    ''
  ],
  nmap: () => [
    '  starting nmap 7.94 ( https://nmap.org )',
    '  host: localhost (127.0.0.1)',
    '  scanning 65535 ports ...',
    '',
    '  PORT      STATE    SERVICE     VERSION',
    '  22/tcp    open     ssh         OpenSSH 9.3',
    '  51820/udp open     wireguard   WireSeal v0.7.23',
    '  8080/tcp  filtered http        [dashboard — locked]',
    '',
    '  nmap done: 1 IP address · 3 interesting ports',
    '  vault status: 🔒 encrypted (AES-256-GCM-SIV + ChaCha20-Poly1305)',
    ''
  ],
  wireseal: () => [
    '  ╔══ WireSeal v0.7.23 ══════════════════════════════╗',
    '  ║  wireguard automation · zero plaintext on disk   ║',
    '  ╠══════════════════════════════════════════════════╣',
    '  ║  vault:       dual-layer AEAD encrypted          ║',
    '  ║  kdf:         argon2id (256 MiB, ≥500ms)         ║',
    '  ║  layer 1:     ChaCha20-Poly1305                  ║',
    '  ║  layer 2:     AES-256-GCM-SIV                    ║',
    '  ║  2fa:         TOTP (RFC 6238, stdlib-only)        ║',
    '  ║  platforms:   linux · macos · windows            ║',
    '  ║  commits:     231   releases: 31                 ║',
    '  ╚══════════════════════════════════════════════════╝',
    '  github: https://github.com/prashanth-7861/WireSeal',
    ''
  ],
  certifications: () => [
    '  ✓  C|EH v12 — Certified Ethical Hacker',
    '     EC-Council Accredited Training Center',
    '',
    '  ⟳  Google Cybersecurity Professional Certificate',
    '     Google via Coursera  [in progress]',
    '',
    '  ✓  Mastercard Cybersecurity Virtual Experience',
    '     Forage · March 2023',
    '',
    '  ✓  Ethical Hacking A–Z: Beginner to Expert',
    '     Anthony Timbers — Udemy',
    ''
  ]
};

function Terminal({ open, onClose }) {
  const [history, setHistory] = useState([
    { type: 'output', lines: [
      '  ██╗    ██╗██╗██████╗ ███████╗███████╗███████╗ █████╗ ██╗',
      '  ██║    ██║██║██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██║',
      '  ██║ █╗ ██║██║██████╔╝█████╗  ███████╗█████╗  ███████║██║',
      '  ██║███╗██║██║██╔══██╗██╔══╝  ╚════██║██╔══╝  ██╔══██║██║',
      '  ╚███╔███╔╝██║██║  ██║███████╗███████║███████╗██║  ██║███████╗',
      '   ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝',
      '',
      '  prashanth mudigonda — cybersecurity portfolio terminal',
      '  type "help" for available commands',
      ''
    ]}
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase().split(' ')[0];
    const newHistory = [...history, { type: 'input', line: cmd }];

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }
    if (trimmed === 'exit') {
      onClose();
      return;
    }
    if (COMMANDS[trimmed]) {
      newHistory.push({ type: 'output', lines: COMMANDS[trimmed]() });
    } else if (trimmed === '') {
      // empty
    } else {
      newHistory.push({ type: 'output', lines: [`  bash: ${cmd}: command not found. type "help" for commands.`, ''] });
    }
    setHistory(newHistory);
    setCmdHistory(prev => [cmd, ...prev]);
    setCmdIdx(-1);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(cmdIdx + 1, cmdHistory.length - 1);
      setCmdIdx(next);
      if (cmdHistory[next]) setInput(cmdHistory[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(cmdIdx - 1, -1);
      setCmdIdx(next);
      setInput(next === -1 ? '' : cmdHistory[next]);
    }
  };

  if (!open) return null;

  return (
    <div className="terminal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="tdot tdot-red" onClick={onClose}></span>
            <span className="tdot tdot-yellow"></span>
            <span className="tdot tdot-green"></span>
          </div>
          <span className="terminal-title">prashanth@wireseal:~</span>
          <span></span>
        </div>

        <div className="terminal-body" ref={bottomRef} onClick={() => inputRef.current && inputRef.current.focus()}>
          {history.map((h, i) => (
            h.type === 'input'
              ? <div key={i} className="t-input-line">
                  <span className="t-prompt">prashanth@portfolio:~$</span>
                  <span className="t-cmd"> {h.line}</span>
                </div>
              : <div key={i} className="t-output">
                  {h.lines.map((l, j) => <div key={j} className="t-line">{l}</div>)}
                </div>
          ))}

          <div className="t-input-line">
            <span className="t-prompt">prashanth@portfolio:~$</span>
            <input
              ref={inputRef}
              className="t-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Terminal });
