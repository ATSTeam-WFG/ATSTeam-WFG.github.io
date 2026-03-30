import RevealWrapper from '../../shared/RevealWrapper'

const PILLARS = [
  {
    num: '01',
    title: 'Conversational Intelligence',
    body: 'The MyHome and Current AI platform is WFG\'s voice-first and chat-first AI layer for agents, realtors, and consumers. It began as a prompt toolkit and is evolving into a full conversational AI marketing and workflow engine, capturing agent expertise, structuring institutional knowledge, and distributing it at scale.',
    badges: ['MyHome Prompts', 'Current AI Platform', 'Realtor Marketing Engine', 'Voice First Expertise Capture'],
  },
  {
    num: '02',
    title: 'Transaction and Workflow Intelligence',
    body: 'Vedant Upganlawar\'s Deadline Calculator brings precision to one of the most error prone parts of any transaction — the contract timeline. It automates 16+ critical deadline computations, handles federal holidays, auto estimates missing inputs, and supports both cash and financed deals.',
    badges: ['Deadline Calculator', '16+ Critical Date Computations', 'Federal Holiday Handling', 'Cash and Financed Deal Support'],
  },
  {
    num: '03',
    title: 'Document Automation and Financial Operations',
    body: 'From PSA intake through deed preparation, document processing at WFG is being rebuilt as an AI native function. eRemit brings remittance automation with intelligent filtering, policy level tracking, and AMS integration. The Agent Application Tracking Portal turns agent onboarding from a fragmented process into a structured, visible, scalable workflow.',
    badges: ['eRemit', 'Agent Application Tracking Portal', 'Document Classification AI', 'Contract Intake Automation', 'MuleSoft API Layer'],
  },
  {
    num: '04',
    title: 'Institutional Knowledge Systems',
    body: 'ATS builds structured, AI powered knowledge systems that turn institutional expertise into scalable infrastructure. The ATS Newsletter — active, bi-weekly, video embedded, and fraud awareness focused — is the external expression of this capability, reaching 1,744+ agents today.',
    badges: ['ATS Newsletter', 'AI Knowledge Bases', 'OKR Automation', 'Agent Onboarding AI', 'Fraud Awareness Series'],
  },
  {
    num: '05',
    title: 'Agency to Direct to Realtor Unification',
    body: 'A unified intelligence layer ensures that AI systems built for agency side efficiency also serve WFG\'s Direct Operations across 8 states and 14 metro markets, and ultimately reach the realtors and buyers those operations serve. Ian Bartlett\'s field intelligence network feeds real world signal back into the build loop.',
    badges: ['Agent Application Tracking Portal', 'Direct Ops AI Initiatives', 'ALTA Chatbot Partnership', 'Cross Channel Deployment'],
  },
]

export default function CapabilityPillars() {
  return (
    <div className="page" id="pillars">
      <RevealWrapper><div className="section-tag">Pages 05–06 · Core Capability Pillars</div></RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2>Five Pillars.<br /><span className="accent">Built to Compound.</span></h2>
      </RevealWrapper>
      <RevealWrapper delay={0.2}>
        <p className="lead">These are the capabilities that define WFG's AI advantage. Each one delivers standalone value. Together, they create something no competitor can replicate quickly.</p>
      </RevealWrapper>

      {PILLARS.map(({ num, title, body, badges }, i) => (
        <RevealWrapper key={num} delay={0.1 * i}>
          <div className="pillar">
            <div className="pillar-header">
              <div className="pillar-num">{num}</div>
              <div className="pillar-title">{title}</div>
            </div>
            <p>{body}</p>
            <div className="pillar-badges">
              {badges.map(b => <span key={b} className="badge">{b}</span>)}
            </div>
          </div>
        </RevealWrapper>
      ))}
      <div className="page-num">05</div>
    </div>
  )
}
