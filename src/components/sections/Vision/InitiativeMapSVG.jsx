export default function InitiativeMapSVG() {
  return (
    <div className="v-ring-visual v-reveal">
      <svg viewBox="0 0 1100 820" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <radialGradient id="v-coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C8B4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00C8B4" stopOpacity="0" />
          </radialGradient>
          <filter id="v-glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="v-softglow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Quadrant backgrounds */}
        <rect x="552" y="40" width="508" height="360" fill="rgba(0,200,180,0.025)" />
        <rect x="552" y="420" width="508" height="360" fill="rgba(245,166,35,0.02)" />
        <rect x="40" y="40" width="508" height="360" fill="rgba(0,200,180,0.018)" />
        <rect x="40" y="420" width="508" height="360" fill="rgba(245,166,35,0.015)" />

        {/* Grid lines */}
        <line x1="550" y1="40" x2="550" y2="780" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <line x1="40" y1="410" x2="1060" y2="410" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

        {/* Quadrant labels */}
        <text x="1050" y="68" textAnchor="end" fontFamily="'Bebas Neue',sans-serif" fontSize="15" fill="#00C8B4" opacity="0.5" letterSpacing="3">AGENCY / EAST</text>
        <text x="1050" y="86" textAnchor="end" fontFamily="'DM Mono',monospace" fontSize="10" fill="#00C8B4" opacity="0.3" letterSpacing="2">EXTERNAL</text>
        <text x="1050" y="754" textAnchor="end" fontFamily="'Bebas Neue',sans-serif" fontSize="15" fill="#00C8B4" opacity="0.5" letterSpacing="3">AGENCY / EAST</text>
        <text x="1050" y="772" textAnchor="end" fontFamily="'DM Mono',monospace" fontSize="10" fill="#00C8B4" opacity="0.3" letterSpacing="2">INTERNAL</text>
        <text x="50" y="68" fontFamily="'Bebas Neue',sans-serif" fontSize="15" fill="#F5A623" opacity="0.5" letterSpacing="3">DIRECT / WEST</text>
        <text x="50" y="86" fontFamily="'DM Mono',monospace" fontSize="10" fill="#F5A623" opacity="0.3" letterSpacing="2">EXTERNAL</text>
        <text x="50" y="754" fontFamily="'Bebas Neue',sans-serif" fontSize="15" fill="#F5A623" opacity="0.5" letterSpacing="3">DIRECT / WEST</text>
        <text x="50" y="772" fontFamily="'DM Mono',monospace" fontSize="10" fill="#F5A623" opacity="0.3" letterSpacing="2">INTERNAL</text>

        {/* ATS Core */}
        <ellipse cx="550" cy="410" rx="72" ry="54" fill="url(#v-coreGlow)" stroke="#00C8B4" strokeWidth="2" filter="url(#v-softglow)" />
        <text x="550" y="404" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="20" fill="#00C8B4" filter="url(#v-glow)" letterSpacing="3">ATS</text>
        <text x="550" y="420" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#7A8BA8" letterSpacing="2">R&amp;D · DEPLOY · ITERATE</text>

        {/* eRemit */}
        <line x1="608" y1="378" x2="680" y2="270" stroke="#00C8B4" strokeWidth="1" opacity="0.3" />
        <circle cx="686" cy="262" r="7" fill="#00C8B4" opacity="0.9" filter="url(#v-glow)" />
        <rect x="700" y="246" width="110" height="38" rx="6" fill="#0B1830" stroke="#00C8B4" strokeWidth="1.2" opacity="0.85" />
        <text x="755" y="261" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">eRemit</text>
        <text x="755" y="275" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#00C8B4">Agency · External</text>

        {/* FAR/BAR */}
        <line x1="620" y1="370" x2="840" y2="190" stroke="#00C8B4" strokeWidth="1" opacity="0.3" />
        <circle cx="847" cy="184" r="7" fill="#00C8B4" opacity="0.9" filter="url(#v-glow)" />
        <rect x="861" y="168" width="178" height="38" rx="6" fill="#0B1830" stroke="#00C8B4" strokeWidth="1.2" opacity="0.85" />
        <text x="950" y="183" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">FAR/BAR Deadline Calc</text>
        <text x="950" y="197" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#00C8B4">Agency · External</text>

        {/* FieldIQ */}
        <line x1="622" y1="395" x2="870" y2="310" stroke="#00C8B4" strokeWidth="1" opacity="0.3" />
        <circle cx="877" cy="306" r="7" fill="#00C8B4" opacity="0.9" filter="url(#v-glow)" />
        <rect x="891" y="290" width="158" height="38" rx="6" fill="#0B1830" stroke="#00C8B4" strokeWidth="1.2" opacity="0.85" />
        <text x="970" y="305" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">FieldIQ SalesCRM</text>
        <text x="970" y="319" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#00C8B4">Agency · External</text>

        {/* AATP */}
        <line x1="608" y1="442" x2="680" y2="510" stroke="#F5A623" strokeWidth="1" opacity="0.3" />
        <circle cx="686" cy="516" r="7" fill="#F5A623" opacity="0.9" filter="url(#v-glow)" />
        <rect x="700" y="500" width="90" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1.2" opacity="0.85" />
        <text x="745" y="515" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">AATP</text>
        <text x="745" y="529" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623">Agency · Internal</text>

        {/* Discovery Bot */}
        <line x1="620" y1="448" x2="840" y2="520" stroke="#F5A623" strokeWidth="1" opacity="0.3" />
        <circle cx="847" cy="523" r="7" fill="#F5A623" opacity="0.9" filter="url(#v-glow)" />
        <rect x="861" y="507" width="140" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1.2" opacity="0.85" />
        <text x="931" y="522" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">Discovery Bot</text>
        <text x="931" y="536" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623">Agency · Internal</text>

        {/* OKR Automation */}
        <line x1="617" y1="456" x2="810" y2="608" stroke="#F5A623" strokeWidth="1" opacity="0.3" />
        <circle cx="816" cy="614" r="7" fill="#F5A623" opacity="0.9" filter="url(#v-glow)" />
        <rect x="830" y="598" width="148" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1.2" opacity="0.85" />
        <text x="904" y="613" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">OKR Automation</text>
        <text x="904" y="627" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623">Agency · Internal</text>

        {/* MuleSoft + Salesforce */}
        <line x1="605" y1="458" x2="686" y2="640" stroke="#F5A623" strokeWidth="1" opacity="0.3" />
        <circle cx="690" cy="646" r="7" fill="#F5A623" opacity="0.9" filter="url(#v-glow)" />
        <rect x="704" y="630" width="174" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1.2" opacity="0.85" />
        <text x="791" y="645" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">MuleSoft + Salesforce</text>
        <text x="791" y="659" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623">Agency · Internal</text>

        {/* Title Search Automation */}
        <line x1="590" y1="462" x2="590" y2="700" stroke="#F5A623" strokeWidth="1" opacity="0.3" />
        <circle cx="590" cy="706" r="7" fill="#F5A623" opacity="0.9" filter="url(#v-glow)" />
        <rect x="604" y="690" width="186" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1.2" opacity="0.85" />
        <text x="697" y="705" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">Title Search Automation</text>
        <text x="697" y="719" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623">Agency · Internal</text>

        {/* Knowledge Bases */}
        <line x1="572" y1="464" x2="920" y2="700" stroke="#F5A623" strokeWidth="1" opacity="0.25" strokeDasharray="3,3" />
        <circle cx="926" cy="703" r="6" fill="#F5A623" opacity="0.7" filter="url(#v-glow)" />
        <rect x="940" y="687" width="140" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1" opacity="0.6" />
        <text x="1010" y="702" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">Knowledge Bases</text>
        <text x="1010" y="716" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623" opacity="0.7">ATS Internal</text>

        {/* MyHome / Current AI */}
        <line x1="492" y1="378" x2="350" y2="240" stroke="#00C8B4" strokeWidth="1" opacity="0.3" />
        <circle cx="344" cy="234" r="7" fill="#00C8B4" opacity="0.9" filter="url(#v-glow)" />
        <rect x="158" y="218" width="178" height="38" rx="6" fill="#0B1830" stroke="#00C8B4" strokeWidth="1.2" opacity="0.85" />
        <text x="247" y="233" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">MyHome / Current AI</text>
        <text x="247" y="247" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#00C8B4">Direct · External</text>

        {/* ATS Newsletter */}
        <line x1="492" y1="442" x2="360" y2="520" stroke="#00C8B4" strokeWidth="1" strokeDasharray="3,3" opacity="0.35" />
        <circle cx="354" cy="526" r="7" fill="#00C8B4" opacity="0.85" filter="url(#v-glow)" />
        <rect x="168" y="510" width="178" height="38" rx="6" fill="#0B1830" stroke="#00C8B4" strokeWidth="1.2" opacity="0.85" />
        <text x="257" y="525" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">ATS Newsletter</text>
        <text x="257" y="539" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#00C8B4">Agency + Direct · Internal</text>

        {/* Fraud Awareness Series */}
        <line x1="484" y1="456" x2="300" y2="614" stroke="#F5A623" strokeWidth="1" opacity="0.3" />
        <circle cx="294" cy="620" r="7" fill="#F5A623" opacity="0.9" filter="url(#v-glow)" />
        <rect x="108" y="604" width="178" height="38" rx="6" fill="#0B1830" stroke="#F5A623" strokeWidth="1.2" opacity="0.85" />
        <text x="197" y="619" textAnchor="middle" fontFamily="'DM Sans',sans-serif" fontSize="12" fontWeight="700" fill="#F4F7FB">Fraud Awareness Series</text>
        <text x="197" y="633" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="8" fill="#F5A623">Direct · Internal</text>

        {/* Fraud Detection ring */}
        <ellipse cx="550" cy="410" rx="110" ry="82" fill="none" stroke="#FF4E6A" strokeWidth="1.2" strokeDasharray="3,5" opacity="0.45" />
        <text x="550" y="320" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill="#FF4E6A" opacity="0.75" letterSpacing="2">FRAUD DETECTION R&amp;D · ALL 4 QUADRANTS</text>

        {/* ALTA outer ring */}
        <ellipse cx="550" cy="410" rx="480" ry="360" fill="none" stroke="#F5A623" strokeWidth="1" strokeDasharray="5,10" opacity="0.12" />
        <circle cx="550" cy="55" r="5" fill="#F5A623" opacity="0.45" />
        <text x="550" y="42" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="9" fill="#F5A623" opacity="0.55" letterSpacing="2">ALTA CHATBOT PARTNERSHIP · IN PLANNING · COMPANY WIDE</text>

        {/* Legend */}
        <rect x="380" y="790" width="10" height="10" rx="2" fill="#00C8B4" opacity="0.85" />
        <text x="396" y="800" fontFamily="'DM Mono',monospace" fontSize="9" fill="#7A8BA8" letterSpacing="1">External</text>
        <rect x="470" y="790" width="10" height="10" rx="2" fill="#F5A623" opacity="0.85" />
        <text x="486" y="800" fontFamily="'DM Mono',monospace" fontSize="9" fill="#7A8BA8" letterSpacing="1">Internal</text>
        <rect x="560" y="790" width="10" height="10" rx="2" fill="#FF4E6A" opacity="0.75" />
        <text x="576" y="800" fontFamily="'DM Mono',monospace" fontSize="9" fill="#7A8BA8" letterSpacing="1">Cross-cutting</text>
        <rect x="672" y="790" width="10" height="10" rx="2" fill="#F5A623" opacity="0.3" />
        <text x="688" y="800" fontFamily="'DM Mono',monospace" fontSize="9" fill="#7A8BA8" letterSpacing="1">In Planning</text>
      </svg>
    </div>
  )
}
