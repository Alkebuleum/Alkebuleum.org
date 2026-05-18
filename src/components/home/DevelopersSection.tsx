import { useState } from 'react'

const CHAIN_ID = 237422
const RPC_URL = 'https://rpc.alkebuleum.com'

const CODE_TABS = [
  {
    label: 'Hardhat',
    filename: 'hardhat.config.ts',
    code: `// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    alkebuleum: {
      url: "${RPC_URL}",
      chainId: ${CHAIN_ID},
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  solidity: "0.8.24",
};

export default config;`,
  },
  {
    label: 'Ethers.js',
    filename: 'provider.ts',
    code: `// provider.ts
import { ethers } from "ethers";

export const provider = new ethers.JsonRpcProvider(
  "${RPC_URL}",
  ${CHAIN_ID}
);

async function ping() {
  const block = await provider.getBlockNumber();
  console.log("Alkebuleum block:", block);
}
ping();`,
  },
  {
    label: 'Foundry',
    filename: 'deploy.sh',
    code: `# Add Alkebuleum to Foundry / Cast
cast chain-id \\
  --rpc-url ${RPC_URL}

# Deploy with Forge
forge create src/MyContract.sol:MyContract \\
  --rpc-url ${RPC_URL} \\
  --private-key $PRIVATE_KEY`,
  },
]

const FEATURES = [
  'Deploy with Hardhat, Foundry, or Remix — no changes needed',
  'Full Solidity support up to 0.8.x',
  'Low fees. Fast finality. Built for real-world use',
  'wagmi, ethers.js, viem — all standard tooling works',
]

function CopyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
      <rect x="7" y="7" width="10" height="10" rx="2"/>
      <path d="M3 13V4a1 1 0 0 1 1-1h9"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
      <polyline points="3,10 8,15 17,5"/>
    </svg>
  )
}

export default function DevelopersSection() {
  const [tab, setTab] = useState(0)
  const [copied, setCopied] = useState<'rpc' | 'chain' | 'code' | null>(null)

  const copy = async (text: string, key: 'rpc' | 'chain' | 'code') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      // clipboard not available
    }
  }

  return (
    <section className="sec sec-dark" id="developers">
      <div className="wrap dev-grid">
        <div>
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>— For developers</span>
          <h2 style={{ marginTop: 20 }}>Your existing tools.<br /><em>Africa's network.</em></h2>
          <p>Alkebuleum is fully EVM-compatible. If you can write Solidity, you can build on Alkebuleum — point your existing config at our RPC and deploy.</p>
          <ul className="dev-bullets">
            {FEATURES.map((f) => (
              <li key={f}>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3,10 8,15 17,5"/></svg>
                {f}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-light" href="#">Read the docs</a>
            <a className="btn btn-ghost-light" href="https://github.com/alkebuleum" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>

        <div className="code">
          <div className="code-head">
            <div className="dots"><span /><span /><span /></div>
            <span className="fname">{CODE_TABS[tab].filename}</span>
          </div>

          {/* Network config strip */}
          <div style={{
            padding: '10px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 4 }}>RPC Endpoint</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12, color: '#86efac', fontFamily: 'JetBrains Mono, monospace' }}>{RPC_URL}</span>
                <button
                  onClick={() => copy(RPC_URL, 'rpc')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied === 'rpc' ? '#34d399' : 'rgba(255,255,255,0.3)', padding: 2, lineHeight: 1 }}
                  aria-label="Copy RPC URL"
                >
                  {copied === 'rpc' ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 4 }}>Chain ID</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 12, color: '#c084fc', fontFamily: 'JetBrains Mono, monospace' }}>{CHAIN_ID}</span>
                <button
                  onClick={() => copy(String(CHAIN_ID), 'chain')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: copied === 'chain' ? '#34d399' : 'rgba(255,255,255,0.3)', padding: 2, lineHeight: 1 }}
                  aria-label="Copy Chain ID"
                >
                  {copied === 'chain' ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 20px' }}>
            {CODE_TABS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setTab(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: tab === i ? '2px solid var(--accent)' : '2px solid transparent',
                  color: tab === i ? '#f1f5f9' : 'rgba(255,255,255,0.35)',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '10px 14px 8px',
                  cursor: 'pointer',
                  transition: 'color 0.15s',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="code-body" style={{ position: 'relative' }}>
            <pre style={{ margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit', whiteSpace: 'pre', overflowX: 'auto', color: '#e2e8f0', paddingRight: 40 }}>
              <code>{CODE_TABS[tab].code}</code>
            </pre>
            <button
              onClick={() => copy(CODE_TABS[tab].code, 'code')}
              style={{
                position: 'absolute',
                top: 10,
                right: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: copied === 'code' ? '#34d399' : 'rgba(255,255,255,0.25)',
                transition: 'color 0.15s',
                padding: 4,
                lineHeight: 1,
              }}
              aria-label="Copy code"
            >
              {copied === 'code' ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
