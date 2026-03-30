import RevealWrapper from '../../shared/RevealWrapper'

const PHASES = [
  {
    status: 'done',
    label: 'Phase 1 · Jul–Sep 2025',
    title: 'Discovery',
    body: 'Workflow assessments across order entry, onboarding, closing, and remittance. Industry engagement at ALTA, Dreamforce, Chicago Underwriters. Mapping of WFG\'s hidden cost layers.',
  },
  {
    status: 'active',
    label: 'Phase 2 · Oct–Dec 2025',
    title: 'Delivery',
    body: 'eRemit launched. Agent Application Tracking Portal deployed. OKR Automation live. ATS Newsletter scaling to 1,744+ agents. MyHome Prompts evolving into full conversational AI. From ideas to products in production.',
  },
  {
    status: 'future',
    label: 'Phase 3 · 2026 & Beyond',
    title: 'Platform',
    body: 'Full AI operating model spanning Agency, Direct, and Realtor channels. eRemit 2.0, Application Portal Phase 2, Deadline Calculator expansion, Fraud AI, and the MyHome Intelligence Engine — unified under one architecture.',
  },
]

const MILESTONES = [
  { label: 'eRemit ✓', style: 'live' },
  { label: 'AATP ✓', style: 'live' },
  { label: 'OKR Automation ✓', style: 'live' },
  { label: 'Deadline Calculator ✓', style: 'live' },
  { label: 'ATS Newsletter ✓', style: 'live' },
  { label: 'MyHome AI Engine →', style: 'inprogress' },
  { label: 'Fraud AI ⟳', style: 'future' },
  { label: 'MuleSoft API ⟳', style: 'future' },
]

const milestoneStyle = {
  live: { background: 'rgba(0,200,180,.1)', border: '1px solid rgba(0,200,180,.2)', color: 'var(--teal)' },
  inprogress: { background: 'rgba(0,200,180,.06)', border: '1px solid rgba(0,200,180,.12)', color: 'var(--gray)' },
  future: { background: 'rgba(245,166,35,.06)', border: '1px solid rgba(245,166,35,.15)', color: 'var(--gold)' },
}

export default function ATSJourney() {
  return (
    <div className="page" id="evolution">
      <RevealWrapper><div className="section-tag">Page 03 · The ATS Journey</div></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2>From <span className="accent">Consulting</span><br />to Platform.</h2>
      </RevealWrapper>
      <RevealWrapper delay={0.2}>
        <p className="lead">ATS began as an agency side innovation group. Over 18 months, it evolved into something far more significant — a company wide AI function with reach across every channel WFG operates.</p>
      </RevealWrapper>

      <RevealWrapper delay={0.3}>
        <div className="diagram-wrap">
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '24px' }}>ATS Evolution Timeline</div>
          <div className="phase-timeline">
            {PHASES.map(({ status, label, title, body }) => (
              <div key={title} className={`pt-step ${status}`}>
                <div className="pt-dot" />
                <div className="pt-card">
                  <div className="pt-label">{label}</div>
                  <div className="pt-title">{title}</div>
                  <div className="pt-body">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '12px' }}>Key Milestones Shipped</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {MILESTONES.map(({ label, style }) => (
                <span key={label} style={{ fontSize: '10.5px', fontWeight: 600, padding: '5px 12px', borderRadius: '20px', ...milestoneStyle[style] }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.4}>
        <div className="bridge">
          <h3>The Shift That Matters</h3>
          <p>ATS started by solving specific problems for specific agents. It now architects solutions that serve the entire WFG ecosystem. The same intelligence that helps an agency side title officer process a file faster is the same intelligence that helps a realtor build their practice. Solutions on solutions. Customer on customer.</p>
        </div>
      </RevealWrapper>
      <div className="page-num">03</div>
    </div>
  )
}
