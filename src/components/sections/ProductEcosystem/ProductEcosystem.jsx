import { useState } from 'react'
import RevealWrapper from '../../shared/RevealWrapper'
import spokeData from '../../../data/ecosystem.json'

export default function ProductEcosystem() {
  const [active, setActive] = useState(null)

  const detail = active !== null ? spokeData[active] : null

  return (
    <div className="full-bleed-page" id="ecosystem">
      <div className="full-bleed-inner">
        <RevealWrapper><div className="section-tag">Page 07 · Product Ecosystem</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2>One <span className="accent">Ecosystem.</span><br />Not Separate Tools.</h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="lead">Every initiative ATS runs connects to the same underlying architecture. Products talk to each other. Data flows upstream. Intelligence compounds. Click any spoke to explore.</p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <div className="diagram-wrap" style={{ padding: '20px' }}>
            <svg style={{ width: '100%', display: 'block' }} viewBox="0 0 860 420" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              {/* Core hub */}
              <rect x="330" y="160" width="200" height="100" rx="12" fill="rgba(0,200,180,0.12)" stroke="rgba(0,200,180,0.4)" strokeWidth="1.5" />
              <text x="430" y="200" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="#00C8B4">ATS Intelligence Core</text>
              <text x="430" y="218" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">Data · AI · Workflow · Experience</text>
              <text x="430" y="234" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(0,200,180,0.7)">MuleSoft · Salesforce · AMS</text>
              <text x="430" y="248" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="9" fill="rgba(0,200,180,0.7)">Authorize.net · SSO</text>

              {/* Connector lines */}
              <line x1="330" y1="195" x2="220" y2="140" stroke="rgba(0,200,180,0.3)" strokeWidth="1" markerEnd="url(#arr)" fill="none" />
              <line x1="330" y1="185" x2="160" y2="250" stroke="rgba(0,200,180,0.3)" strokeWidth="1" markerEnd="url(#arr)" fill="none" />
              <line x1="370" y1="260" x2="220" y2="340" stroke="rgba(0,200,180,0.3)" strokeWidth="1" markerEnd="url(#arr)" fill="none" />
              <line x1="530" y1="195" x2="640" y2="130" stroke="rgba(245,166,35,0.3)" strokeWidth="1" markerEnd="url(#arr)" fill="none" />
              <line x1="530" y1="210" x2="680" y2="255" stroke="rgba(245,166,35,0.3)" strokeWidth="1" markerEnd="url(#arr)" fill="none" />
              <line x1="490" y1="260" x2="640" y2="340" stroke="rgba(0,200,180,0.3)" strokeWidth="1" markerEnd="url(#arr)" fill="none" />

              {/* Spoke 0 — eRemit */}
              <g onClick={() => setActive(0)} style={{ cursor: 'pointer' }}>
                <rect x="40" y="90" width="170" height="70" rx="8" fill={active === 0 ? 'rgba(0,200,180,0.12)' : 'rgba(255,255,255,0.04)'} stroke="rgba(0,200,180,0.25)" strokeWidth="0.8" />
                <circle cx="60" cy="120" r="5" fill="rgba(0,200,180,0.8)" />
                <text x="75" y="115" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="#FFFFFF">eRemit</text>
                <text x="75" y="131" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">Remittance &amp; reconciliation</text>
                <text x="75" y="147" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">automation at policy level</text>
              </g>

              {/* Spoke 1 — Agent Portal */}
              <g onClick={() => setActive(1)} style={{ cursor: 'pointer' }}>
                <rect x="20" y="205" width="130" height="70" rx="8" fill={active === 1 ? 'rgba(0,200,180,0.12)' : 'rgba(255,255,255,0.04)'} stroke="rgba(0,200,180,0.25)" strokeWidth="0.8" />
                <circle cx="38" cy="235" r="5" fill="rgba(0,200,180,0.8)" />
                <text x="52" y="230" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">Agent Portal</text>
                <text x="52" y="246" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">Onboarding &amp; lifecycle</text>
                <text x="52" y="261" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">real-time visibility</text>
              </g>

              {/* Spoke 2 — Newsletter */}
              <g onClick={() => setActive(2)} style={{ cursor: 'pointer' }}>
                <rect x="80" y="315" width="150" height="70" rx="8" fill={active === 2 ? 'rgba(0,200,180,0.12)' : 'rgba(255,255,255,0.04)'} stroke="rgba(0,200,180,0.25)" strokeWidth="0.8" />
                <circle cx="98" cy="345" r="5" fill="rgba(0,200,180,0.8)" />
                <text x="112" y="340" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">ATS Newsletter</text>
                <text x="112" y="356" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">AI education &amp; fraud</text>
                <text x="112" y="371" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">awareness, 1,744+ agents</text>
              </g>

              {/* Spoke 3 — MyHome */}
              <g onClick={() => setActive(3)} style={{ cursor: 'pointer' }}>
                <rect x="650" y="80" width="175" height="70" rx="8" fill={active === 3 ? 'rgba(245,166,35,0.12)' : 'rgba(255,255,255,0.04)'} stroke="rgba(245,166,35,0.3)" strokeWidth="0.8" />
                <circle cx="668" cy="110" r="5" fill="rgba(245,166,35,0.8)" />
                <text x="683" y="105" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">MyHome &amp; Current AI</text>
                <text x="683" y="121" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">Conversational AI for agents</text>
                <text x="683" y="136" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">and realtors, voice-first</text>
              </g>

              {/* Spoke 4 — Deadline Calculator */}
              <g onClick={() => setActive(4)} style={{ cursor: 'pointer' }}>
                <rect x="690" y="215" width="155" height="70" rx="8" fill={active === 4 ? 'rgba(245,166,35,0.12)' : 'rgba(255,255,255,0.04)'} stroke="rgba(245,166,35,0.3)" strokeWidth="0.8" />
                <circle cx="708" cy="245" r="5" fill="rgba(245,166,35,0.8)" />
                <text x="722" y="240" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">Deadline Calculator</text>
                <text x="722" y="256" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">16+ contract deadlines,</text>
                <text x="722" y="271" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">holiday-aware automation</text>
              </g>

              {/* Spoke 5 — Fraud Detection */}
              <g onClick={() => setActive(5)} style={{ cursor: 'pointer' }}>
                <rect x="640" y="315" width="170" height="70" rx="8" fill={active === 5 ? 'rgba(0,200,180,0.12)' : 'rgba(255,255,255,0.04)'} stroke="rgba(0,200,180,0.25)" strokeWidth="0.8" />
                <circle cx="658" cy="345" r="5" fill="rgba(0,200,180,0.8)" />
                <text x="672" y="340" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">Fraud Detection AI</text>
                <text x="672" y="356" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">Risk scoring &amp; wire fraud</text>
                <text x="672" y="371" fontFamily="Inter,sans-serif" fontSize="10" fill="#8B9BB4">prevention, FinCEN-aligned</text>
              </g>
            </svg>

            <div className="eco-detail">
              <div className="eco-detail-title">
                {detail ? detail.title : 'Click any product above to learn more'}
              </div>
              <div className="eco-detail-body">
                {detail ? detail.body : 'Each product connects back to the ATS Intelligence Core — sharing data, surfacing signals, and reinforcing the overall system. The network effect compounds with every additional tool in use.'}
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.4}>
          <div className="bridge" style={{ marginTop: '24px' }}>
            <h3>The Network Effect Principle</h3>
            <p>As more agents use WFG's AI tools, data quality improves, models sharpen, and switching costs deepen. eRemit data informs pricing intelligence. Agent workflow data improves fraud detection. Realtor AI tools build market preference for WFG. Each capability feeds the next — and that loop is the long term competitive advantage.</p>
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
