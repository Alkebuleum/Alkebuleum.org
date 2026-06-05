import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const NETWORK_PARAMS = {
  chainName: 'Alkebuleum Mainnet',
  chainId: '0x39BEE', // 237422 in hex
  chainIdDecimal: 237422,
  nativeCurrency: { name: 'ALKE', symbol: 'ALKE', decimals: 18 },
  rpcUrls: ['https://rpc.alkebuleum.com'],
  blockExplorerUrls: ['https://explorer.alkebuleum.com'],
}

const DETAILS = [
  { label: 'Network name', value: 'Alkebuleum Mainnet' },
  { label: 'Chain ID (decimal)', value: '237422' },
  { label: 'Chain ID (hex)', value: '0x39BEE' },
  { label: 'Currency symbol', value: 'ALKE' },
  { label: 'Currency name', value: 'ALKE' },
  { label: 'Decimals', value: '18' },
  { label: 'RPC endpoint', value: 'https://rpc.alkebuleum.com', href: 'https://rpc.alkebuleum.com' },
  { label: 'Block explorer', value: 'https://explorer.alkebuleum.com', href: 'https://explorer.alkebuleum.com' },
  { label: 'Block time', value: '~5 seconds' },
  { label: 'Consensus', value: 'PORA (Proof of Reputable Authority)' },
  { label: 'EVM compatible', value: 'Yes (EIP-1559 fee model)' },
  { label: 'Developer docs', value: 'https://docs.alkebuleum.com', href: 'https://docs.alkebuleum.com' },
]

export default function Network() {
  const [added, setAdded] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const addToMetaMask = async () => {
    const { ethereum } = window as typeof window & { ethereum?: { request: (args: { method: string; params?: unknown[] }) => Promise<unknown> } }
    if (!ethereum) { alert('MetaMask is not installed.'); return }
    try {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: NETWORK_PARAMS.chainId,
          chainName: NETWORK_PARAMS.chainName,
          nativeCurrency: NETWORK_PARAMS.nativeCurrency,
          rpcUrls: NETWORK_PARAMS.rpcUrls,
          blockExplorerUrls: NETWORK_PARAMS.blockExplorerUrls,
        }],
      })
      setAdded(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Helmet>
        <title>Network Details — Alkebuleum</title>
        <meta name="description" content="Alkebuleum Mainnet network details — Chain ID 237422, RPC https://rpc.alkebuleum.com, EVM compatible, PORA consensus. Add to MetaMask." />
        <link rel="canonical" href="https://alkebuleum.org/network" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alkebuleum.org/network" />
        <meta property="og:title" content="Network Details — Alkebuleum" />
        <meta property="og:description" content="Alkebuleum Mainnet — Chain ID 237422, RPC endpoint, block explorer, EVM compatible. Add to MetaMask." />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Network Details — Alkebuleum" />
        <meta name="twitter:description" content="Alkebuleum Mainnet — Chain ID 237422, RPC endpoint, block explorer, EVM compatible. Add to MetaMask." />
        <meta name="twitter:image" content="https://alkebuleum.org/og-image.png" />
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Mainnet</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Network details</h1>
          <p className="hero-sub" style={{ maxWidth: 520 }}>
            Alkebuleum Mainnet is live. EVM compatible — connect any wallet, tool, or dApp using the details below.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <button className="btn btn-primary" onClick={addToMetaMask}>
              {added ? 'Added to MetaMask ✓' : 'Add to MetaMask'}
            </button>
            <a className="btn btn-dark" href="https://explorer.alkebuleum.com" target="_blank" rel="noopener noreferrer">Open Explorer →</a>
          </div>
        </div>
      </section>

      {/* Network parameters */}
      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Parameters</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 40 }}>Network configuration</h2>
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            {DETAILS.map((d, i) => (
              <div key={d.label} style={{
                display: 'grid', gridTemplateColumns: '220px 1fr auto',
                padding: '16px 28px',
                borderBottom: i < DETAILS.length - 1 ? '1px solid var(--line)' : undefined,
                background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,.015)',
                alignItems: 'center', gap: 12,
              }}>
                <span style={{ fontSize: 13, color: 'var(--ink-mute)', fontWeight: 500 }}>{d.label}</span>
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: 'var(--purple-deep)', fontWeight: 500 }}>{d.value}</a>
                ) : (
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, fontWeight: 500 }}>{d.value}</span>
                )}
                <button
                  onClick={() => copy(d.value, d.label)}
                  style={{ background: 'none', border: '1px solid var(--line)', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: 11, color: copied === d.label ? 'var(--purple-deep)' : 'var(--ink-mute)', whiteSpace: 'nowrap' }}
                >
                  {copied === d.label ? 'Copied' : 'Copy'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual wallet setup */}
      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Manual setup</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 }}>Add manually to any EVM wallet</h2>
          <p style={{ color: 'var(--ink-mute)', marginBottom: 32, lineHeight: 1.7 }}>
            Use these parameters to add Alkebuleum Mainnet to MetaMask, Rabby, or any other EVM-compatible wallet.
          </p>
          <div style={{ background: '#0a0a0c', borderRadius: 16, padding: '28px 32px', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#e2e8f0', lineHeight: 2.2 }}>
            <div><span style={{ color: '#94a3b8' }}>Network name:  </span><span style={{ color: '#86efac' }}>Alkebuleum Mainnet</span></div>
            <div><span style={{ color: '#94a3b8' }}>RPC URL:       </span><span style={{ color: '#86efac' }}>https://rpc.alkebuleum.com</span></div>
            <div><span style={{ color: '#94a3b8' }}>Chain ID:      </span><span style={{ color: '#c084fc' }}>237422</span></div>
            <div><span style={{ color: '#94a3b8' }}>Symbol:        </span><span style={{ color: '#fbbf24' }}>ALKE</span></div>
            <div><span style={{ color: '#94a3b8' }}>Explorer:      </span><span style={{ color: '#86efac' }}>https://explorer.alkebuleum.com</span></div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Resources</span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 32 }}>Developer resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { title: 'Block Explorer', href: 'https://explorer.alkebuleum.com', desc: 'Browse blocks, transactions, and addresses' },
              { title: 'Developer Docs', href: 'https://docs.alkebuleum.com', desc: 'Guides, APIs, and SDK references' },
              { title: 'GitHub', href: 'https://github.com/alkebuleum', desc: 'Open source contracts and tooling' },
              { title: 'ALKE (Native Asset)', href: '/alkecoin', desc: 'Native asset details for exchange listings' },
            ].map(r => (
              <a key={r.title} href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '22px 24px', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'border-color .15s' }}>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 15, marginBottom: 8 }}>{r.title} →</h3>
                <p style={{ fontSize: 13, color: 'var(--ink-mute)', margin: 0 }}>{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
