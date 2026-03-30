import RevealWrapper from '../../shared/RevealWrapper'
import teamData from '../../../data/team.json'

export default function Team() {
  return (
    <div className="full-bleed-page" id="team">
      <div className="full-bleed-inner">
        <RevealWrapper><div className="section-tag">Page 09 · The ATS Team</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2>The People<br /><span className="accent">Behind the Platform.</span></h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="lead">ATS is a small team with a large mandate. Each person owns a distinct layer of the operating model and together they cover the full stack from executive vision to field execution to AI engineering.</p>
        </RevealWrapper>

        <div className="team-grid">
          {teamData.map(({ initials, name, role, layer, desc, gold }, i) => (
            <RevealWrapper key={name} delay={0.1 + i * 0.07}>
              <div className="team-card">
                <div className={`avatar${gold ? ' gold-av' : ''}`}>{initials}</div>
                <div className="team-info">
                  <div className="team-name">{name}</div>
                  <div className="team-role">{role}</div>
                  <div className="team-layer">{layer}</div>
                  <p className="team-desc">{desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={0.6}>
          <div className="bridge" style={{ marginTop: '32px' }}>
            <h3>How the Team Works</h3>
            <p>ATS operates on a continuous loop. Ian surfaces what the field needs, Ryan sets the direction, Priyal shapes how it is positioned, Vedant architects how it integrates, and Anish builds what ships. Every initiative passes through all five layers — which is why everything ATS delivers is production ready and strategically grounded.</p>
          </div>
        </RevealWrapper>
      </div>
    </div>
  )
}
