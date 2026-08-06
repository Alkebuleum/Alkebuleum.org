import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const BRANCHES = [
  {
    label: 'Alkebuleum Foundation',
    pct: 45,
    amount: '450,000,000',
    desc: 'Long-term public-good stewardship, protocol governance support, and ecosystem backstop. ~10-year sustainability horizon. Managed by Foundation Council (multisig), transitioning progressively to on-chain governance.',
  },
  {
    label: 'Community DAO',
    pct: 30,
    amount: '300,000,000',
    desc: 'Grassroots governance, community incentives, identity & reputation gas sponsorship, faucets, grants, hackathons, and public-good programs. Governed through DAO proposals with KPI reporting.',
  },
  {
    label: 'Alkebuleum Technology LLC',
    pct: 25,
    amount: '250,000,000',
    desc: 'Core protocol & product development, infrastructure, SDKs, wallets, and validator operational support. Dev team allocations vest with a 12-month cliff and 36-month linear vest.',
  },
]

const BUCKETS = [
  { label: 'Foundation / Treasury',          pct: 45, amount: '450,000,000', branch: 'Foundation',     desc: 'Long-term reserves, governance, ecosystem backstop.' },
  { label: 'Sponsorship (Identity & Rep.)',   pct: 20, amount: '200,000,000', branch: 'Community DAO',  desc: 'Gas sponsorship, identity onboarding, reputation operations.' },
  { label: 'Initial Community Usage',         pct: 15, amount: '150,000,000', branch: 'Community DAO',  desc: 'Faucets, grants, education & adoption programs.' },
  { label: 'Dev Team',                        pct: 15, amount: '150,000,000', branch: 'Technology LLC', desc: 'Core development, SDKs, wallets, protocol upgrades.' },
  { label: 'Validator Ops Fund',              pct:  5, amount: '50,000,000',  branch: 'Technology LLC', desc: 'SLA-based reimbursement of validator operating costs.' },
]

const USES = [
  {
    title: 'Transaction fees',
    desc: 'All gas fees are paid in ALKE. The EIP-1559 fee model burns the base fee portion — at scale, cumulative burns can make the network net-neutral or deflationary.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="12" width="30" height="18" rx="2"/><path d="M5 18h30M11 25h8"/></svg>,
  },
  {
    title: 'Execution priority',
    desc: 'Validators can prioritize transactions offering higher priority tips — giving users and institutions a reliable fast-lane for time-sensitive operations.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6l4 8h8l-6.5 5 2.5 8L20 22l-8 5 2.5-8L8 14h8z"/></svg>,
  },
  {
    title: 'Network access',
    desc: 'Deploying and interacting with smart contracts, dApps, and protocol-level operations on the Alkebuleum network all require ALKE for gas.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="14"/><path d="M20 6v28M6 20h28M9 12c3 2 6 3 11 3s8-1 11-3M9 28c3-2 6-3 11-3s8 1 11 3"/></svg>,
  },
  {
    title: 'Validator incentives',
    desc: 'PORA validators earn 0.1 ALKE per block as a baseline reward, plus priority tips. The Ops Fund separately reimburses infrastructure costs — aligning long-term validator sustainability.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4L8 10v10c0 9 5.5 16 12 19 6.5-3 12-10 12-19V10z"/><path d="M14 20l4 4 8-9"/></svg>,
  },
  {
    title: 'Treasury operations',
    desc: 'The Alkebuleum Foundation and Community DAO fund grants, research, ecosystem programs, and liquidity support through their respective ALKE allocations.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L4 14l16 8 16-8z"/><path d="M10 22v6c0 2 4 5 10 5s10-3 10-5v-6"/></svg>,
  },
  {
    title: 'Identity & reputation sponsorship',
    desc: 'The Community DAO sponsors gas for identity creation and reputation operations — ensuring access to Alkebuleum\'s trust infrastructure is not gated by ability to pay.',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="16" r="7"/><path d="M8 36c2-8 6-12 12-12s10 4 12 12"/><path d="M29 12l3 3 5-5"/></svg>,
  },
]

export default function Tokenomics() {
  return (
    <>
      <Helmet>
        <title>ALKE Tokenomics — Alkebuleum</title>
        <meta name="description" content="ALKE is the native gas and utility token of the Alkebuleum network. Chain ID 237422 · 18 decimals · EVM compatible · PORA consensus · 1B fixed genesis supply · No ICO." />
        <link rel="canonical" href="https://alkebuleum.org/tokenomics" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/tokenomics" />
        <meta property="og:title" content="ALKE Tokenomics — Alkebuleum" />
        <meta property="og:description" content="Native gas and utility token of the Alkebuleum network. 1B fixed supply · No ICO · EIP-1559 fee burn · PORA consensus." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ALKE Tokenomics — Alkebuleum" />
        <meta name="twitter:description" content="Native gas and utility token of the Alkebuleum network. 1B fixed supply · No ICO · EIP-1559 fee burn · PORA consensus." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Network token</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Alkecoin (ALKE)</h1>
          <p className="hero-sub" style={{ maxWidth: 520 }}>
            Gas and utility token for the Alkebuleum network. Utility-first. Not designed to represent equity or ownership.
          </p>
        </div>
      </section>

      {/* Core attributes */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">— Core attributes</span>
          <h2 style={{ marginTop: 16, marginBottom: 20, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>
            The token that coordinates the network
          </h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: 680, marginBottom: 40 }}>
            Alkecoin powers transactions, smart-contract execution, and protocol-level operations on the Alkebuleum network. It is utility-first — not designed to represent equity or ownership in any legal entity. No ICO. No public presale. Fixed genesis supply.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 60 }}>
            {[
              { label: 'Token name',     value: 'Alkecoin' },
              { label: 'Primary ticker', value: 'ALKE' },
              { label: 'Alias ticker',   value: 'AKE (3-letter)' },
              { label: 'Genesis supply', value: '1,000,000,000' },
              { label: 'Decimals',       value: '18' },
              { label: 'ICO / Presale',  value: 'None' },
              { label: 'Chain ID',       value: '237422' },
              { label: 'Consensus',      value: 'PORA' },
              { label: 'Fee model',      value: 'EIP-1559 (base fee burn + tip)' },
              { label: 'Block reward',   value: '0.1 ALKE / block' },
              { label: 'Yearly issuance',value: '~0.063% (very low inflation)' },
              { label: 'EVM',            value: 'Fully EVM compatible' },
            ].map(item => (
              <div key={item.label} style={{ background: '#f6f4f1', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: '#0a0a0c' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Token utility */}
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 26, letterSpacing: '-.02em', marginBottom: 28 }}>Token utility</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 16 }}>
            {USES.map(u => (
              <div key={u.title} style={{ background: '#f6f4f1', borderRadius: 14, padding: '24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: '#fff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(0,0,0,.07)', color: 'var(--purple-deep)' }}>{u.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, color: '#0a0a0c', marginBottom: 6 }}>{u.title}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{u.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fffbf0', border: '1px solid rgba(200,150,0,.25)', borderRadius: 12, padding: '18px 22px', marginTop: 32 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: '#8a6a00', fontWeight: 500, marginBottom: 8 }}>Important notice</div>
            <p style={{ fontSize: 13.5, color: 'var(--ink-dim)', lineHeight: 1.65, margin: 0 }}>
              Alkecoin (ALKE) is a native utility token. It does not grant equity, shares, or ownership in Alkebuleum Foundation or Alkebuleum Technology LLC, and does not confer rights to dividends or corporate profit distributions. ALKE was not launched via a speculative ICO or public token sale. Regulatory treatment varies by jurisdiction — consult qualified legal counsel before any participation.
            </p>
          </div>
        </div>
      </section>

      {/* Three Founding Branches */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">— Allocation</span>
          <h2 style={{ marginTop: 16, marginBottom: 12, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-.02em' }}>
            Three founding branches
          </h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: 640, marginBottom: 40, fontSize: 15 }}>
            The entire 1,000,000,000 ALKE genesis supply is managed through three core founding branches. Together they define the strategic distribution and responsibility of Alkecoin across the ecosystem.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {BRANCHES.map((d, i) => (
              <div key={d.label} style={{ display: 'grid', gridTemplateColumns: '220px 1fr auto', gap: 24, alignItems: 'start', padding: '24px 0', borderBottom: i < BRANCHES.length - 1 ? '1px solid rgba(0,0,0,.08)' : 'none' }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: '#0a0a0c', marginBottom: 4 }}>{d.label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, color: 'var(--ink-mute)', letterSpacing: '.04em' }}>{d.amount} ALKE</div>
                </div>
                <div>
                  <div style={{ height: 6, borderRadius: 999, background: 'rgba(0,0,0,.08)', overflow: 'hidden', marginBottom: 10, marginTop: 6 }}>
                    <div style={{ height: '100%', width: `${d.pct}%`, background: 'var(--purple)', borderRadius: 999 }} />
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.55 }}>{d.desc}</div>
                </div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 26, color: 'var(--purple-deep)', minWidth: 56, textAlign: 'right', paddingTop: 2 }}>{d.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Technical Buckets */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">— On-chain implementation</span>
          <h2 style={{ marginTop: 16, marginBottom: 12, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(24px,2.8vw,36px)', letterSpacing: '-.02em' }}>
            Five technical genesis buckets
          </h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: 640, marginBottom: 36, fontSize: 15 }}>
            On-chain, the genesis distribution is implemented using five precision allocation buckets. For governance and communications, these map to the three founding branches above.
          </p>

          <div style={{ border: '1px solid var(--line, rgba(0,0,0,.1))', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 60px 180px 1fr 130px', gap: 0, padding: '12px 24px', background: '#f6f4f1', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
              {['Bucket', '%', 'Amount (ALKE)', 'Purpose', 'Branch'].map(h => (
                <div key={h} style={{ fontSize: 10.5, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-mute)', fontWeight: 500 }}>{h}</div>
              ))}
            </div>
            {BUCKETS.map((b, i) => (
              <div key={b.label} style={{ display: 'grid', gridTemplateColumns: '200px 60px 180px 1fr 130px', gap: 0, padding: '16px 24px', borderBottom: i < BUCKETS.length - 1 ? '1px solid rgba(0,0,0,.06)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,.015)', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 14, color: '#0a0a0c' }}>{b.label}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16, color: 'var(--purple-deep)' }}>{b.pct}%</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, color: 'var(--ink-mute)' }}>{b.amount}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-mute)', lineHeight: 1.5, paddingRight: 16 }}>{b.desc}</div>
                <div style={{ fontSize: 12, color: 'var(--purple-deep)', fontWeight: 500, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.03em' }}>{b.branch}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetary Policy */}
      <section className="sec" style={{ background: '#f6f4f1' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <span className="eyebrow">— Monetary policy</span>
          <h2 style={{ marginTop: 16, marginBottom: 28, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(24px,2.8vw,36px)', letterSpacing: '-.02em' }}>
            Low inflation. Fee burn. Long-term sustainability.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 10 }}>Base block reward</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, color: 'var(--purple-deep)', fontWeight: 500, marginBottom: 10 }}>0.1 ALKE / block</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-mute)', lineHeight: 1.6 }}>Approximately 0.063% yearly issuance relative to the 1B genesis supply — intentionally very low, designed primarily to ensure long-term validator incentives with minimal dilution.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 10 }}>EIP-1559 fee burn</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, color: 'var(--purple-deep)', fontWeight: 500, marginBottom: 10 }}>Base fee burned</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-mute)', lineHeight: 1.6 }}>Each transaction burns the base fee portion of gas. As network usage grows, cumulative burns increase — at high usage, the network can become net-neutral or deflationary.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 10 }}>Validator rewards</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-mute)', lineHeight: 1.6 }}>Validators receive the 0.1 ALKE baseline block reward plus priority tips from users. The Ops Fund separately reimburses infrastructure costs (hardware, hosting, monitoring) — keeping validator economics sustainable without inflating block rewards.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: '24px 26px' }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 16, marginBottom: 10 }}>Governance of issuance</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-mute)', lineHeight: 1.6 }}>Baseline issuance rate and fee formula constants may be adjusted via Alkebuleum governance (Foundation + Community DAO). Any change must be publicly proposed, approved through on-chain processes, and transparently communicated.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full paper link */}
      <section className="sec sec-white">
        <div className="wrap" style={{ maxWidth: 680, textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 28, letterSpacing: '-.02em', marginBottom: 16 }}>Full tokenomics paper</h2>
          <p style={{ color: 'var(--ink-mute)', lineHeight: 1.7, fontSize: 15, marginBottom: 28 }}>
            The complete Alkecoin Tokenomics Paper (Version 1.3, November 2025) covers all allocation details, vesting schedules, monetary policy governance, and compliance notes.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="/AlkecoinTokenomicsPaper.pdf" target="_blank" rel="noopener">Download tokenomics paper →</a>
            <a className="btn btn-dark" href="/whitepaper.html" target="_blank" rel="noopener">Read the whitepaper →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
