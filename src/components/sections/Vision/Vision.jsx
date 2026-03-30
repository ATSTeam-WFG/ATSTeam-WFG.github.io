import RevealWrapper from '../../shared/RevealWrapper'
import InitiativeMapSVG from './InitiativeMapSVG'

const METHOD_STEPS = [
  { num: '01', title: 'Listen Deeply', body: 'Structured discovery sessions with real users. Every pain point gets documented. No assumption goes unchallenged. We do not start with solutions. We start with truth.' },
  { num: '02', title: 'Make Them Heard', body: 'Follow-ups are not courtesy. They are commitment. Users know their input drove the decision. That trust is how ATS gets access to the real problems that everyone else misses.' },
  { num: '03', title: 'Prototype Fast', body: 'We lean toward a working version over a perfect spec. An imperfect live tool that surfaces real feedback is worth more than six months of requirements gathering.' },
  { num: '04', title: 'Iterate with Signal', body: 'Every deployment generates intelligence. We observe, refine, and redeploy in weeks, not quarterly cycles. The loop is the product.' },
  { num: '05', title: 'Stay at the Frontier', body: 'Every major AI release gets evaluated by ATS within days. We upskill constantly and translate what is new in AI into what is genuinely useful for WFG.' },
]

const HORIZONS = [
  {
    cls: 'h1',
    tagCls: 't1',
    tag: 'H1 · Now',
    title: 'Deploy and Scale AI Initiatives',
    year: '2025 – 2026',
    items: [
      'eRemit and AATP fully operational',
      'FieldIQ SalesCRM live for Agency agents',
      'FAR/BAR Deadline Calculator deployed',
      'MyHome (Current AI) serving Direct realtors',
      'OKR Automation and Discovery Bot in production',
      'Fraud Detection tools active across channels',
      'ATS Newsletter expansively shared',
    ],
  },
  {
    cls: 'h2',
    tagCls: 't2',
    tag: 'H2 · Building',
    title: 'Compound the Platform',
    year: '2026 – 2027',
    items: [
      'ALTA Chatbot Partnership moved from planning to live',
      'Agency and Direct AI layers connected',
      'Knowledge Bases scaled across all teams',
      'Internal AI upskilling program formalised',
      'Streamlined processes and more agent-facing solutions',
    ],
  },
  {
    cls: 'h3',
    tagCls: 't3',
    tag: 'H3 · Frontier',
    title: 'Define the Industry',
    year: '2027+',
    items: [
      'WFG as the AI epicentre of the title industry',
      'Industry AI standards shaped by WFG solutions',
      'Predictive closing intelligence at scale',
      'ATS methodology replicated across the company',
      'WFG recognised as the most AI-forward title company',
    ],
  },
]

export default function Vision() {
  return (
    <div id="vision">
      {/* Vision Hero */}
      <section className="v-hero">
        <div className="v-eyebrow">ATS · AI Technology &amp; Solutions · WFG National Title</div>
        <h1 className="v-headline">
          <span className="l1">THE AI</span>
          <span className="l2">INFRASTRUCTURE</span>
          <span className="l3">OF REAL ESTATE.</span>
        </h1>
        <p className="v-sub">
          ATS is WFG's <strong>research, innovation, and AI deployment engine.</strong> We find the real problems, build tools that actually work, and put them in the hands of agents, realtors, and operators. We move fast, we stay curious, and we keep WFG ahead.
        </p>
        <div className="v-kpis">
          <div className="v-kpi"><div className="n">1,744<span style={{ fontSize: '24px' }}>+</span></div><div className="l">Agents in Network</div></div>
          <div className="v-kpi"><div className="n gold">4</div><div className="l">Quadrants Covered</div></div>
          <div className="v-kpi"><div className="n">94</div><div className="l">NPS Score</div></div>
          <div className="v-kpi"><div className="n gold">$719M</div><div className="l">2026 Revenue Target</div></div>
        </div>
      </section>

      {/* Core Mandate */}
      <div className="v-section-full">
        <div className="v-section-full-inner">
          <RevealWrapper><div className="v-label">Core Mandate</div></RevealWrapper>
          <RevealWrapper delay={0.1}><h2 className="v-h">What <span className="acc">ATS</span><br />Is Built to Do.</h2></RevealWrapper>
          <RevealWrapper delay={0.2}>
            <div className="v-stmt">
              <p>ATS exists to ensure that AI is not an abstract capability, but a practical advantage for every individual working with WFG. It empowers every agent, every realtor, every closer, and every operations lead. We anticipate challenges before they surface, translate the potential of AI into purposeful, high-impact solutions, and operationalize them at scale across WFG. We are not only a support function, but also the innovation layer that continuously positions WFG ahead of the industry it operates in.</p>
              <div className="attr">ATS Vision · 2026</div>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.3}>
            <p className="v-lead">ATS sits at the intersection of research, field intelligence, and engineering. That combination lets us move from a real user pain point to a deployed solution faster than any comparable team in title services.</p>
          </RevealWrapper>
        </div>
      </div>

      {/* Four Quadrants */}
      <div className="v-section">
        <RevealWrapper><div className="v-label">Strategic Coverage</div></RevealWrapper>
        <RevealWrapper delay={0.1}><h2 className="v-h">All Four <span className="acc">Bases.</span><br />One <span className="gold">Team.</span></h2></RevealWrapper>
        <RevealWrapper delay={0.2}><p className="v-lead">ATS is the only team in WFG with a mandate that spans every operational channel. Agency East and Direct West, internal operations and external tools. That full coverage is what makes what we build so much more valuable than point solutions.</p></RevealWrapper>
        <RevealWrapper delay={0.3}>
          <div className="v-four-grid">
            <div className="v-quad q1">
              <div className="v-quad-icon">🤝</div>
              <div className="v-quad-axis"><span className="v-pill v-pill-teal">Agency East</span><span style={{ color: '#7A8BA8', fontSize: '9px', fontWeight: 700, letterSpacing: '2px' }}>EXTERNAL TOOLS</span></div>
              <h3>Agent-Facing Tools</h3>
              <p>Tools agents use directly in their day-to-day work. eRemit handles remittance, FieldIQ gives agents a real CRM built for small teams, and the FAR/BAR Smart Deadline Calculator removes one of the most common sources of transaction confusion. Fraud Detection AI sits here too, surfacing risk before it becomes a problem.</p>
            </div>
            <div className="v-quad q2">
              <div className="v-quad-icon">🏠</div>
              <div className="v-quad-axis"><span className="v-pill v-pill-gold">Direct West</span><span style={{ color: '#7A8BA8', fontSize: '9px', fontWeight: 700, letterSpacing: '2px' }}>EXTERNAL TOOLS</span></div>
              <h3>Realtor Ecosystem</h3>
              <p>Direct is earlier in the ATS journey and we are building it with the same intentionality. MyHome / Current AI gives realtors a conversational AI engine for marketing and client engagement. The ALTA Chatbot Partnership, currently in planning, will extend that reach company-wide. Fraud Detection AI covers this side as well.</p>
            </div>
            <div className="v-quad q3">
              <div className="v-quad-icon">⚙️</div>
              <div className="v-quad-axis"><span className="v-pill v-pill-teal">Agency East</span><span style={{ color: '#7A8BA8', fontSize: '9px', fontWeight: 700, letterSpacing: '2px' }}>INTERNAL OPS</span></div>
              <h3>Agency Operations</h3>
              <p>The back-office layer that quietly removes friction from every file. AATP tracks agent applications, the ATS Discovery Bot gives internal staff a structured way to surface requests to ATS, Title Search Statements go out automatically, OKR Automation keeps leadership informed, and MuleSoft plus Salesforce tie the systems together. Knowledge Bases ensure nothing lives only in someone's inbox.</p>
            </div>
            <div className="v-quad q4">
              <div className="v-quad-icon">🔬</div>
              <div className="v-quad-axis"><span className="v-pill v-pill-gold">Direct West</span><span style={{ color: '#7A8BA8', fontSize: '9px', fontWeight: 700, letterSpacing: '2px' }}>INTERNAL OPS</span></div>
              <h3>Direct Operations</h3>
              <p>The ATS Newsletter keeps both Agency and Direct teams informed and sharp, with fraud awareness content reaching the whole network bi-weekly. The Fraud Awareness Series runs alongside it. Fraud Detection R&amp;D operates at the internal level here too, ensuring Direct operations have the same rigour and protection as the rest of the business.</p>
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={0.4}>
          <div className="v-stmt" style={{ borderLeftColor: '#F5A623', marginTop: 0 }}>
            <p><strong style={{ color: '#F5A623' }}>Fraud Detection sits across all four quadrants.</strong> It is the one initiative that does not belong to a single channel. It protects agents externally, supports staff internally, and covers Agency East and Direct West. That is by design.</p>
          </div>
        </RevealWrapper>
        <div className="v-connector" />
      </div>

      {/* Initiative Map */}
      <div className="v-rings-section">
        <RevealWrapper><div className="v-label">Initiative Map</div></RevealWrapper>
        <RevealWrapper delay={0.1}><h2 className="v-h">How <span className="acc">ATS</span><br />Covers <span className="gold">All Four Bases.</span></h2></RevealWrapper>
        <RevealWrapper delay={0.2}><p className="v-lead">Every ATS initiative maps to one of four operational zones. Agency East on the right, Direct West on the left. External tools above the line, internal operations below. Fraud Detection R&amp;D is the one initiative that runs through all four.</p></RevealWrapper>
        <InitiativeMapSVG />
      </div>

      {/* Methodology */}
      <div className="v-section-full">
        <div className="v-section-full-inner">
          <RevealWrapper><div className="v-label">How We Work</div></RevealWrapper>
          <RevealWrapper delay={0.1}><h2 className="v-h">The <span className="acc">Process</span><br />That Separates <span className="gold">Us.</span></h2></RevealWrapper>
          <RevealWrapper delay={0.2}><p className="v-lead">ATS follows a disciplined, repeatable process that keeps users at the center of every decision. It is not a framework written on a wall. It is genuinely how this team thinks, and it is why what we ship actually gets used.</p></RevealWrapper>
          <RevealWrapper delay={0.3}>
            <div className="v-method-steps">
              {METHOD_STEPS.map(({ num, title, body }) => (
                <div key={num} className="v-mstep">
                  <div className="v-mstep-num">{num}</div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>
          <RevealWrapper delay={0.4}>
            <div className="v-stmt" style={{ borderLeftColor: '#F5A623' }}>
              <p>The reason ATS solutions get adopted and stay adopted is because the people who use them felt heard before the first line was written. That is not a process detail. That is the whole strategy.</p>
              <div className="attr" style={{ color: '#00C8B4' }}>ATS Operating Principle</div>
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* Three Horizons */}
      <div className="v-section">
        <RevealWrapper><div className="v-label">Strategic Horizons</div></RevealWrapper>
        <RevealWrapper delay={0.1}><h2 className="v-h">Where We <span className="acc">Are.</span><br />Where We're <span className="gold">Going.</span></h2></RevealWrapper>
        <RevealWrapper delay={0.2}><p className="v-lead">ATS runs on three horizons at once. Shipping what is needed today, building what will matter tomorrow, and positioning WFG to set the standard for the industry.</p></RevealWrapper>
        <RevealWrapper delay={0.3}>
          <div className="v-horizon">
            {HORIZONS.map(({ cls, tagCls, tag, title, year, items }) => (
              <div key={cls} className={`v-hor-card ${cls}`}>
                <span className={`v-hor-tag ${tagCls}`}>{tag}</span>
                <h3>{title}</h3>
                <div className="year">{year}</div>
                <ul className="v-hor-items">
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {/* Manifesto */}
      <div className="v-section">
        <RevealWrapper>
          <div className="v-manifesto">
            <div className="v-manifesto-label">The ATS Manifesto</div>
            <h2>We Do Not Wait For<br /><span className="acc">The Industry</span> To <span className="gold">Catch Up.</span></h2>
            <p>We read the research. We test the models. We talk to the people doing the actual work. And then we build the things that make their days meaningfully easier. That is not a mission statement. That is just the job, and we show up to it every day.</p>
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
