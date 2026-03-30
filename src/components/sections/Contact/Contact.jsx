import RevealWrapper from '../../shared/RevealWrapper'

export default function Contact() {
  return (
    <div className="page" id="contact">
      <RevealWrapper><div className="section-tag">Page 10 · Contact and Closing</div></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2>2026 and <span className="gold">Beyond.</span></h2>
      </RevealWrapper>

      <RevealWrapper delay={0.2}>
        <div className="forward">
          <div className="yr">FORWARD LOOKING STATEMENT · 2026 AND BEYOND</div>
          <h2>WFG Will Be the AI Infrastructure of American Real Estate.</h2>
          <p>The ambition is not to lead in title technology. It is to become the company whose AI layer is so embedded in agent, realtor, and consumer workflows that choosing WFG is simply the intelligent default.</p>
          <div className="fwd-stats">
            <div className="fstat"><div className="n">2,000+</div><div className="l">Agent Network Goal</div></div>
            <div className="fstat"><div className="n">$719M</div><div className="l">2026 Revenue Target</div></div>
            <div className="fstat"><div className="n">8.1%</div><div className="l">Resale Market Share Target</div></div>
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.3}>
        <div className="section-tag" style={{ marginBottom: '20px' }}>Who to Contact</div>
        <div className="contact-block">
          <div className="contact-av">IB</div>
          <div className="contact-info">
            <h4>Ian Bartlett</h4>
            <div className="c-title">Director, Agency Growth and Technology Enablement · Primary ATS Contact</div>
            <div className="contact-tags">
              <span className="ctag">Agency Growth</span>
              <span className="ctag">Technology Enablement</span>
              <span className="ctag">Workflow Automation</span>
              <span className="ctag">Agent Onboarding</span>
              <span className="ctag">Strategic Partnerships</span>
            </div>
          </div>
          <div className="contact-right">
            <a href="mailto:lbartlett@wfgtitle.com">lbartlett@wfgtitle.com</a>
            <a href="tel:9043775316">(904) 377-5316</a>
          </div>
        </div>

        <div className="contact-block">
          <div className="contact-av" style={{ background: 'rgba(245,166,35,.1)', color: 'var(--gold)' }}>AT</div>
          <div className="contact-info">
            <h4>ATS Team</h4>
            <div className="c-title" style={{ color: 'var(--gold)' }}>AI Technology and Solutions · General Inquiries</div>
            <div className="contact-tags">
              <span className="ctag">AI Consultations</span>
              <span className="ctag">Product Questions</span>
              <span className="ctag">Innovation Requests</span>
              <span className="ctag">Newsletter</span>
            </div>
          </div>
          <div className="contact-right">
            <a href="mailto:ATSteam@wfgtitle.com">ATSteam@wfgtitle.com</a>
          </div>
        </div>
      </RevealWrapper>

      {/* Discovery Bot */}
      <RevealWrapper delay={0.4}>
        <div className="section-tag" style={{ margin: '36px 0 20px' }}>ATS in Action · Live Capability</div>
        <div className="discovery-bot-card">
          <div className="db-header">
            <div className="db-icon">🤖</div>
            <div className="db-title-block">
              <h4>Discovery Bot — AI-Powered Employee Insights</h4>
              <div className="db-sub">Multi-Agent Architecture · Internal Intelligence System</div>
              <div style={{ marginTop: '8px' }}>
                <span className="live-badge">
                  <span className="live-dot" />
                  Live Capability
                </span>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--gray)', lineHeight: 1.8, maxWidth: '760px' }}>
            Traditional feedback channels miss the real problems — the friction that never makes it into a ticket, the workaround that everyone uses but nobody documents. The Discovery Bot was built to change that. It is ATS building internally first: a proof that multi-agent AI architecture delivers measurable value inside WFG before it scales outward.
          </p>
          <div className="db-grid">
            <div className="db-item">
              <div className="db-item-label">What It Is</div>
              <p>An always-on AI system that reaches employees through SMS and Slack. A conversational agent named Alex engages weekly, asking about real operational pain points in a low-friction, high-trust format designed to surface what people actually experience — not just what they report.</p>
            </div>
            <div className="db-item">
              <div className="db-item-label">How It Works</div>
              <p>Alex captures six structured signals per interaction: the problem, the workaround being used, how often it occurs, its operational impact, what the ideal outcome would be, and the time cost per week. A second AI agent processes that input and converts it into a structured insight report shared directly with ATS.</p>
            </div>
            <div className="db-item">
              <div className="db-item-label">Why It Exists</div>
              <p>The most expensive problems in any organization are the ones that never get reported. The Discovery Bot creates a direct, structured channel between the field and the build team — so ATS is always solving real problems, not assumed ones.</p>
            </div>
            <div className="db-item">
              <div className="db-item-label">Why It Matters</div>
              <p>This is ATS's multi-agent architecture running in production. Two AI agents — one conversational, one analytical — working in sequence to convert unstructured human feedback into actionable intelligence. It is not a pilot. It is how ATS stays connected to the ground truth of how WFG operates.</p>
            </div>
          </div>
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.5}>
        <div className="closing-strip">
          <p>At WFG, everything we do is <strong style={{ color: 'var(--white)' }}>because of you.</strong> ATS exists to make that real through every workflow, every tool, and every piece of intelligence we put in the hands of the people who serve our customers. <em>Patrick Stone</em></p>
          <div className="motto">IDEAS THAT IGNITE</div>
        </div>
      </RevealWrapper>

      <div className="page-num">10</div>
    </div>
  )
}
