import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const ALKESCAN = 'https://alkescan.com'
const FEE = '2,000 ALKE'

const h2Style = { fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, letterSpacing: '-.025em', marginBottom: 20 } as const
const lead = { color: 'var(--ink-mute)', marginBottom: 28, lineHeight: 1.7, maxWidth: 680 } as const
const mono = { fontFamily: "'JetBrains Mono',monospace", fontSize: 13 } as const

const CHECKLIST = [
  'Your contract is deployed on Alkebuleum Mainnet (chain ID 237422), and you have its address.',
  `A wallet holding at least ${FEE} plus a little for gas, per registration or verification.`,
  'Nuru on your phone, or a browser wallet such as MetaMask. AlkeScan adds the Alkebuleum network for you.',
  'For a token: a short description (10+ characters), and optionally an https:// link to a square logo and your website.',
  'For a contract: the Standard JSON input from the exact build you deployed, and optionally the deployment transaction hash.',
]

const TOKEN_STEPS = [
  <>Go to <a href={`${ALKESCAN}/tokens/register`} target="_blank" rel="noopener noreferrer">alkescan.com/tokens/register</a>, or open your token's page on AlkeScan and click <b>Register token</b>.</>,
  <>Paste your <b>token contract address</b>. Name, symbol and supply are read from the chain, so they always match your contract.</>,
  <>Add a <b>description</b> (10–500 characters). It appears on your token's page.</>,
  <>Optionally add a <b>logo URL</b> (square PNG or SVG) and a <b>website</b>. Both must start with <code style={mono}>https://</code>.</>,
  <>Click <b>Pay {FEE} &amp; register</b>, connect <b>Nuru</b> or a <b>browser wallet</b>, and approve the payment.</>,
  <>Keep the page open while it confirms the payment (2 confirmations). When it says <b>listed</b>, your token appears on AlkeScan, JollofSwap and Nuru.</>,
]

const BUILD_SOURCES = [
  { tool: 'Hardhat', how: <><code style={mono}>artifacts/build-info/&lt;hash&gt;.json</code>. Upload the whole file. With several, use the one containing your contract's name.</> },
  { tool: 'Foundry', how: <code style={mono}>forge verify-contract &lt;address&gt; src/MyToken.sol:MyToken --chain-id 237422 --show-standard-json-input &gt; input.json</code> },
  { tool: 'Remix', how: <>Enable <b>Generate contract metadata</b> in Settings, compile, then use the JSON in <code style={mono}>artifacts/build-info/</code>. Or flatten the contract and use <b>Single file</b> mode.</> },
]

const VERIFY_STEPS = [
  <>Open your contract: <code style={mono}>alkescan.com/address/&lt;your contract address&gt;</code>.</>,
  <>Open the <b>Contract</b> tab and click <b>Verify &amp; publish</b>.</>,
  <>Leave the <b>compiler version</b> as detected. AlkeScan reads it from your contract's bytecode.</>,
  <>Keep <b>Standard JSON input</b> selected and click <b>Upload .json file</b>. Optimizer, EVM version and via-IR come from the file.</>,
  <>Optionally paste the <b>deployment transaction hash</b> to show your constructor arguments.</>,
  <>Click <b>Verify contract</b>. Large projects can take a minute to compile.</>,
  <>When it shows <b>Verified · Exact match</b> or <b>Partial match</b>, click <b>Pay {FEE}</b> and approve the payment.</>,
  <>The page shows <b>Submitted for publication</b>. The Alkebuleum team recompiles your source and publishes it; only an identical result goes live.</>,
]

const TROUBLE = [
  { q: "Compiled bytecode doesn't match the contract on chain", a: 'The source or settings differ from what you deployed. Use the build file from the actual deployment, with the same optimizer runs, EVM version and via-IR setting.' },
  { q: 'Compiled with Solidity X, but Y is selected', a: "Pick the version the message names; it's read from your contract's bytecode." },
  { q: "The source didn't compile", a: 'Use the full build file rather than a hand-made one. Every imported file must be included.' },
  { q: "The Nuru relay didn't accept a request from this site", a: "You're paying from a linked Nuru key. Switch Nuru to your primary key, or open AlkeScan in the Nuru in-app browser." },
  { q: 'Paid, but the page closed', a: "Don't pay again. For tokens, use “Already paid the fee?” with your payment hash. For contracts, verify again in the same browser; the payment is remembered." },
]

function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, maxWidth: 760 }}>
      {items.map((s, i) => (
        <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14, alignItems: 'start', lineHeight: 1.65 }}>
          <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--purple)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 600 }}>{i + 1}</span>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  )
}

export default function AlkeScanGuide() {
  const desc = `How to register your token in the Alkebuleum token registry and verify and publish your smart contract's source code on AlkeScan. ${FEE} per listing.`
  return (
    <>
      <Helmet>
        <title>Register Tokens &amp; Verify Contracts on AlkeScan — Alkebuleum</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://alkebuleum.org/developers/alkescan" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://alkebuleum.org/developers/alkescan" />
        <meta property="og:title" content="Register Tokens & Verify Contracts on AlkeScan" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="https://alkebuleum.org/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="hero" style={{ minHeight: '38vh', paddingBottom: 80 }}>
        <div className="hero-glow" />
        <Navbar />
        <div className="hero-inner" style={{ paddingTop: 60 }}>
          <span className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 20, display: 'block' }}>— Developer guide</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>List your token. Verify your contract.</h1>
          <p className="hero-sub" style={{ maxWidth: 560 }}>
            AlkeScan lets projects on Alkebuleum register tokens and publish verified source code themselves. Each costs {FEE}, paid with Nuru or a browser wallet.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <a className="btn btn-primary" href={`${ALKESCAN}/tokens/register`} target="_blank" rel="noopener noreferrer">Register a token →</a>
            <a className="btn btn-dark" href={ALKESCAN} target="_blank" rel="noopener noreferrer">Open AlkeScan →</a>
          </div>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Before you start</span>
          <h2 style={h2Style}>What you need</h2>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'grid', gap: 10, maxWidth: 760 }}>
            {CHECKLIST.map((c) => (
              <li key={c} style={{ display: 'flex', gap: 12, lineHeight: 1.6 }}>
                <span style={{ color: 'var(--purple-deep)', fontWeight: 600 }}>✓</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Tokens</span>
          <h2 style={h2Style}>Register your token</h2>
          <p style={lead}>
            About five minutes. Listed tokens show their logo, description and website on AlkeScan, and appear in JollofSwap and Nuru.
          </p>
          <Steps items={TOKEN_STEPS} />
          <p style={{ ...lead, marginTop: 24, marginBottom: 0 }}>
            Page closed after paying? Don't pay again. Reopen the form with the same address, or use <b>Already paid the fee?</b> with your payment transaction hash.
          </p>
        </div>
      </section>

      <section className="sec sec-white">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Contracts</span>
          <h2 style={h2Style}>Verify and publish your contract</h2>
          <p style={lead}>
            AlkeScan recompiles your source in the browser and compares it byte for byte with the code on chain. Nothing is published unless they match, and only the files your contract uses are shown.
          </p>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 18, marginBottom: 14 }}>1. Get your Standard JSON input</h3>
          <div style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', marginBottom: 36, maxWidth: 900 }}>
            {BUILD_SOURCES.map((b, i) => (
              <div key={b.tool} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: '16px 24px', borderBottom: i < BUILD_SOURCES.length - 1 ? '1px solid var(--line)' : undefined, lineHeight: 1.6, alignItems: 'start' }}>
                <span style={{ fontSize: 13, color: 'var(--ink-mute)', fontWeight: 500 }}>{b.tool}</span>
                <span style={{ fontSize: 14, wordBreak: 'break-word' }}>{b.how}</span>
              </div>
            ))}
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 18, marginBottom: 14 }}>2. Verify and publish on AlkeScan</h3>
          <Steps items={VERIFY_STEPS} />
          <p style={{ ...lead, marginTop: 24, marginBottom: 0 }}>
            Once published, your contract page shows a <b>Verified</b> badge, the source files, build details, the ABI and Read/Write tabs for everyone. Share that page link in your docs.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>— Help</span>
          <h2 style={h2Style}>Troubleshooting</h2>
          <div style={{ display: 'grid', gap: 12, maxWidth: 900 }}>
            {TROUBLE.map((t) => (
              <div key={t.q} style={{ border: '1px solid var(--line)', borderRadius: 14, padding: '18px 22px' }}>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>{t.q}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-mute)', lineHeight: 1.6 }}>{t.a}</div>
              </div>
            ))}
          </div>
          <p style={{ ...lead, marginTop: 28, marginBottom: 0 }}>
            Still stuck? Reach the team on <a href="https://t.me/alkebuleum" target="_blank" rel="noopener noreferrer">Telegram</a> with your contract address and payment transaction hash. Network settings are on the <Link to="/network">network details</Link> page.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
