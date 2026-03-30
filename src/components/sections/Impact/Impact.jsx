import RevealWrapper from '../../shared/RevealWrapper'

const IMPACT_ITEMS = [
  {
    audience: 'Agency Network · 1,744 Agents',
    heading: 'Agent Productivity',
    items: [
      'AI assisted PSA intake reduces manual entry by 70–80%',
      'Automated follow ups cut curative labor by 30–40%',
      'eRemit removes remittance reconciliation friction',
      'Deadline Calculator eliminates manual timeline computation',
      'AATP gives agents full visibility into onboarding status',
    ],
  },
  {
    audience: 'Direct Operations · 8 States, 14 Markets',
    heading: 'Operational Efficiency',
    items: [
      'OKR Automation delivers standardised executive visibility weekly',
      'Parallel workflow design cuts order cycle time by 25–40%',
      'Document AI eliminates manual Schedule A corrections',
      'MyHome AI being deployed to direct side agents in 2026',
      'Fraud AI protects direct ops from wire exposure',
    ],
  },
  {
    audience: 'Realtor Ecosystem',
    heading: 'Realtor Engagement',
    items: [
      'Conversational AI marketing engine builds realtor authority',
      'Voice-first expertise capture differentiates WFG partners',
      'Automated content engine keeps realtors ahead of the market',
      'Deadline Calculator reduces realtor side transaction confusion',
      'The AI tools agents bring are the reason realtors stay',
    ],
  },
  {
    audience: 'Executive and Board Level',
    heading: 'Strategic Leverage',
    items: [
      'Per file cost reduction of 10–20% at scale',
      'OFPE efficiency trending toward 11.5 as the 2026 target',
      'AI as a differentiator in agency recruitment and retention',
      'ALTA partnership positioning WFG as the industry AI leader',
      'NPS of 94, world class and AI enhanced',
    ],
  },
]

export default function Impact() {
  return (
    <div className="page" id="impact">
      <RevealWrapper><div className="section-tag">Page 08 · Impact Across the Ecosystem</div></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2>Every Channel.<br /><span className="accent">Measurable Results.</span></h2>
      </RevealWrapper>
      <RevealWrapper delay={0.2}>
        <p className="lead">ATS creates real, quantifiable impact at every level of WFG's operating model — from the agent processing a file to the executive reviewing weekly performance.</p>
      </RevealWrapper>

      <RevealWrapper delay={0.3}>
        <div className="impact-grid">
          {IMPACT_ITEMS.map(({ audience, heading, items }) => (
            <div className="impact-item" key={heading}>
              <div className="audience">{audience}</div>
              <h4>{heading}</h4>
              <ul>
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </RevealWrapper>

      <RevealWrapper delay={0.4}>
        <div className="diff-split" style={{ marginTop: '32px' }}>
          <div className="diff-col not">
            <div className="diff-col-label not">The Industry Default</div>
            <ul>
              <li>AI as a point solution, vendor dependent</li>
              <li>Automation for one team, not the whole system</li>
              <li>Reactive fraud response</li>
              <li>Siloed digital transformation by department</li>
              <li>Technology as a cost center</li>
            </ul>
          </div>
          <div className="diff-col active">
            <div className="diff-col-label is">The WFG Model</div>
            <ul>
              <li>AI as horizontal infrastructure across all channels</li>
              <li>Layered intelligence compounding across the system</li>
              <li>Proactive AI scored risk detection before closing</li>
              <li>Agency, Direct, and Realtor served by one AI layer</li>
              <li>Technology as a margin and growth driver</li>
            </ul>
          </div>
        </div>
      </RevealWrapper>
      <div className="page-num">08</div>
    </div>
  )
}
