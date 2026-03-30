import RevealWrapper from '../../shared/RevealWrapper'

const STATS = [
  { num: '$719M', lbl: '2026 Revenue Target' },
  { num: '1,744', lbl: 'Active Agents' },
  { num: '8.1%', lbl: 'Resale Market Share Target' },
  { num: '94', lbl: 'NPS Score, World Class' },
]

export default function Hero() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="page" id="cover">
        <RevealWrapper delay={0}>
          <div className="hero-eyebrow">WFG National Title · AI Technology &amp; Solutions · 2026</div>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h1>Built to<br /><span>Transform</span><br />Title.</h1>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <div className="divider" />
        </RevealWrapper>
        <RevealWrapper delay={0.3}>
          <p className="hero-sub">
            ATS is WFG's AI operating layer, connecting agency innovation, direct operations, and the realtor ecosystem into one intelligent system built for how title actually works.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.4}>
          <div className="hero-stats">
            {STATS.map(({ num, lbl }) => (
              <div className="hero-stat" key={lbl}>
                <div className="num">{num}</div>
                <div className="lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>
        <div className="page-num">01</div>
      </div>
    </div>
  )
}
