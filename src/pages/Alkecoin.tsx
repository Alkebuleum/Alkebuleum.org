import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const TOKEN_FACTS = [
  { label: 'Token name', value: 'Alkecoin' },
  { label: 'Primary ticker', value: 'ALKE' },
  { label: 'Alias ticker', value: 'AKE' },
  { label: 'Type', value: 'Native utility token' },
  { label: 'Total genesis supply', value: '1,000,000,000 ALKE' },
  { label: 'Chain ID', value: '237422' },
  { label: 'Decimals', value: '18' },
  { label: 'EVM compatible', value: 'Yes' },
  { label: 'Fee model', value: 'EIP-1559' },
  { label: 'Consensus', value: 'PORA (Proof of Reputable Authority)' },
  { label: 'Target block time', value: '~5 seconds' },
  { label: 'ICO / presale', value: 'None' },
  { label: 'Explorer', value: 'explorer.alkebuleum.com', href: 'https://explorer.alkebuleum.com' },
  { label: 'RPC endpoint', value: 'https://rpc.alkebuleum.com', href: 'https://rpc.alkebuleum.com' },
]

const ALLOCATION = [
  { label: 'Validator incentives', pct: 30, desc: 'Rewards for founding council validators securing the network via PORA consensus.' },
  { label: 'Ecosystem & grants', pct: 25, desc: 'Developer grants, DeFi liquidity bootstrapping, and ecosystem partner incentives.' },
  { label: 'Foundation reserve', pct: 20, desc: 'Long-term protocol development, partnerships, and institutional expansion. 4-year vesting.' },
  { label: 'Community & DAO', pct: 15, desc: 'Governance participation rewards, community programs, and Pan-African DAO treasury.' },
  { label: 'Team & advisors', pct: 10, desc: 'Core team and early advisors. 1-year cliff, 3-year linear vest.' },
]

const UTILITY = [
  { title: 'Transaction fees', desc: 'All network transaction fees are denominated in USD and settled in ALKE. Predictable pricing for institutions and developers.' },
  { title: 'Smart contract execution', desc: 'ALKE is required to deploy and interact with smart contracts on the Alkebuleum network.' },
  { title: 'Validator staking', desc: 'Validators stake ALKE to participate in the PORA consensus mechanism and earn block rewards.' },
  { title: 'Governance', desc: 'ALKE holders participate in on-chain governance through the Pan-African DAO.' },
  { title: 'Network access', desc: 'Protocol-level fees for identity attestations, document anchoring, and institutional API access.' },
  { title: 'Treasury operations', desc: 'Foundation treasury operations and cross-chain bridge collateral are denominated in ALKE.' },
]

export default function Alkecoin() {
  return (
    <>
      <Helmet>
        <title>Alkecoin (ALKE) — Exchange Listing & Token Details</title>
        <meta name="description" content="Official exchange listing details for Alkecoin (ALKE) — the native utility token of the Alkebuleum network. Chain ID 237422, 18 decimals, EVM compatible, PORA consensus, 1B genesis supply, no ICO." />
        <link rel="canonical" href="https://alkebuleum.org/alkecoin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/alkecoin" />
        <meta property="og:title" content="Alkecoin (ALKE) — Exchange Listing & Token Details" />
        <meta property="og:description" content="Official exchange listing details for Alkecoin (ALKE). Chain ID 237422 · 18 decimals · EVM compatible · 1B genesis supply · No ICO." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alkecoin (ALKE) — Exchange Listing & Token Details" />
        <meta name="twitter:description" content="Official exchange listing details for Alkecoin (ALKE). Chain ID 237422 · 18 decimals · EVM compatible · 1B genesis supply · No ICO." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Alkecoin (ALKE) — Exchange Listing & Token Details",
          "url": "https://alkebuleum.org/alkecoin",
          "description": "Official exchange listing details for Alkecoin (ALKE), the native utility token of the Alkebuleum network.",
          "publisher": { "@id": "https://alkebuleum.org/#organization" },
          "mainEntity": {
            "@type": "Product",
            "name": "Alkecoin",
            "alternateName": ["ALKE", "AKE"],
            "description": "Native utility token of the Alkebuleum Layer 1 blockchain network. Used for transaction fees, smart contract execution, validator staking, governance, and network access. Not a security. No ICO.",
            "brand": { "@id": "https://alkebuleum.org/#organization" },
            "url": "https://alkebuleum.org/alkecoin"
          }
        })}</script>
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Network token</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alkecoin <span style={{ color: 'var(--purple)' }}>ALKE</span></h1>
          <p className="hero-sub" style={{ maxWidth: 560 }}>
            The native utility token of the Alkebuleum network. Used for transaction fees, smart contract execution, validator staking, and governance. Not a security. No ICO.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href="https://jollofswap.com" target="_blank" rel="noopener noreferrer">Get ALKE on JollofSwap →</a>
            <a className="btn btn-dark" href="mailto:listing@alkebuleum.org">Exchange listing enquiry →</a>
          </div>
        </div>
      </section>

      {/* Token facts */}
      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Token facts</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Exchange listing details</h2>
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            {TOKEN_FACTS.map((fact, i) => (
              <div key={fact.label} style={{
                display: 'grid', gridTemplateColumns: '220px 1fr',
                padding: '16px 28px',
                borderBottom: i < TOKEN_FACTS.length - 1 ? '1px solid var(--line)' : undefined,
                background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,.015)',
              }}>
                <span style={{ fontSize: 13, color: 'var(--ink-mute)', fontWeight: 500 }}>{fact.label}</span>
                {fact.href ? (
                  <a href={fact.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: 'var(--purple-deep)', fontWeight: 500 }}>{fact.value}</a>
                ) : (
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 500 }}>{fact.value}</span>
                )}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 12, color: 'var(--ink-mute)' }}>
            For brand assets, logos, and colour references — <a href="/brand" style={{ color: 'var(--purple-deep)' }}>see the brand page →</a>
          </p>
        </div>
      </section>

      {/* Token utility */}
      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Utility</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>What ALKE is used for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {UTILITY.map(u => (
              <div key={u.title} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '24px 26px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 16, marginBottom: 10 }}>{u.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6, margin: 0 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation */}
      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Supply</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 8 }}>Genesis supply allocation</h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: 40 }}>Total genesis supply: <strong>1,000,000,000 ALKE</strong>. No additional minting beyond block rewards defined in the protocol.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {ALLOCATION.map(a => (
              <div key={a.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontWeight: 500, fontSize: 15 }}>{a.label}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: 'var(--purple-deep)', fontWeight: 600 }}>{a.pct}%</span>
                </div>
                <div style={{ height: 6, background: 'var(--line)', borderRadius: 99, overflow: 'hidden', marginBottom: 6 }}>
                  <div style={{ height: '100%', width: `${a.pct}%`, background: 'var(--purple)', borderRadius: 99 }} />
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink-mute)', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Legal</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Disclaimer</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 14 }}>
            Alkecoin (ALKE) is a native utility token of the Alkebuleum network. It is not a security, investment contract, or equity instrument. Holding ALKE does not confer ownership of or rights in Alkebuleum Foundation or any related entity. There was no initial coin offering (ICO), no public presale, and no guaranteed return.
          </p>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.8, fontSize: 14, marginTop: 16 }}>
            For exchange listing enquiries, please contact <a href="mailto:listing@alkebuleum.org" style={{ color: 'var(--purple-deep)' }}>listing@alkebuleum.org</a>. For CoinGecko / CoinMarketCap applications, use the token details on this page and link to <a href="https://alkebuleum.org/alkecoin" style={{ color: 'var(--purple-deep)' }}>alkebuleum.org/alkecoin</a> as the official token page.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
