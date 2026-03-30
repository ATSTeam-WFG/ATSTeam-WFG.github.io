import RevealWrapper from '../../shared/RevealWrapper'

const LAYERS = [
  {
    cls: 'l4',
    icon: '🖥️',
    name: 'Experience Layer',
    sub: 'Every stakeholder',
    content: 'Agency Portal · Direct Ops Dashboard · Realtor AI Interfaces · ATS Newsletter. Designed by Priyal Katudia and delivered across WFG\'s full distribution network. The same intelligence, expressed differently depending on who is using it.',
    chips: ['Agency Portal', 'Direct Dashboard', 'Realtor AI', 'Newsletter'],
  },
  {
    cls: 'l3',
    icon: '⚙️',
    name: 'Workflow Layer',
    sub: 'Intelligence becomes velocity',
    content: 'eRemit automation · Deadline Calculator · OKR reporting · Onboarding acceleration · Compliance monitoring. Reduces per-file cost, compresses cycle time, and frees people to do work that actually requires people.',
    chips: ['eRemit', 'Deadline Calculator', 'OKR Automation', 'PSA Processing'],
  },
  {
    cls: 'l2',
    icon: '🧠',
    name: 'AI Layer',
    sub: 'The intelligence',
    content: 'MyHome & Current AI · Deadline Calculator · Fraud risk scoring · Document classification · Workflow intelligence. Designed by Anish Tatke and Vedant Upganlawar, built to run continuously — not episodically.',
    chips: ['MyHome AI', 'Fraud Scoring', 'Doc Classification', 'Deadline Calculator'],
  },
  {
    cls: 'l1',
    icon: '🗄️',
    name: 'Data Layer',
    sub: 'The foundation',
    content: 'Transaction records · Agent performance data · Market signals · Fraud indicators · Remittance history. Unified through the MuleSoft API framework, Salesforce integrations, and AMS connectivity. Every AI decision traces back to this layer.',
    chips: ['MuleSoft API', 'Salesforce', 'AMS Connect', 'Authorize.net'],
  },
]

export default function AIOperatingModel() {
  return (
    <div className="full-bleed-page" id="model">
      <div className="full-bleed-inner">
        <RevealWrapper><div className="section-tag">Page 04 · The AI Operating Model</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2>Four Layers.<br /><span className="accent">One System.</span></h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="lead">ATS operates as a layered architecture, not a collection of tools. Each layer builds on the one below it, creating intelligence that compounds across the enterprise as it scales.</p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <div className="diagram-wrap">
            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '20px' }}>AI Operating Architecture — Hover each layer</div>
            <div>
              {LAYERS.map(({ cls, icon, name, sub, content, chips }, i) => (
                <div key={name}>
                  <div className={`al-layer ${cls}`}>
                    <div className="al-label-wrap">
                      <div className="al-icon">{icon}</div>
                      <div>
                        <div className="al-layer-name">{name}</div>
                        <div style={{ fontSize: '9px', color: 'var(--gray)', marginTop: '2px' }}>{sub}</div>
                      </div>
                    </div>
                    <div className="al-content">
                      <strong>{content.split('.')[0]}.</strong>
                      {content.slice(content.indexOf('.') + 1)}
                      <div className="al-chips">
                        {chips.map(c => <span key={c} className="al-chip">{c}</span>)}
                      </div>
                    </div>
                  </div>
                  {i < LAYERS.length - 1 && <div className="arch-arrow">↕</div>}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', padding: '16px 20px', background: 'rgba(0,200,180,.05)', borderRadius: '8px', border: '1px solid rgba(0,200,180,.1)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '22px', opacity: 0.7 }}>↻</div>
              <div style={{ fontSize: '12px', color: 'var(--gray)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--white)' }}>The compounding loop:</strong> Better data → sharper AI → faster workflows → richer experiences → more data. Once running, this loop is the moat.
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.4}>
          <div className="bridge">
            <h3>Why the Layered Model Matters</h3>
            <p>Point solutions can be copied. A layered AI architecture cannot. Each layer reinforces the next. Better data produces better AI, better AI produces better workflows, and better workflows produce better experiences. That loop, once running, is the moat.</p>
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
