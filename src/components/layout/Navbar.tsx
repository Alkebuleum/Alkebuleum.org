import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  onContact?: () => void
}

const ECOSYSTEM_LINKS = [
  { label: 'Alkebuleum Council', href: '/council' },
  { label: 'AlkeLedger', href: '/alkeledger' },
  { label: 'AlkePay', href: '/alkepay' },
  { label: 'AlkeID', href: '/alkeid' },
  { label: 'AlkeCredit', href: '/alkecredit' },
  { label: 'AlkeCoin', href: '/alkecoin' },
]

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
)

export default function Navbar({ onContact }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const close = () => setDrawerOpen(false)

  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a className="logo" href="/">
            <svg style={{ width: 42, height: 42, flexShrink: 0 }}><use href="#logo-nav" /></svg>
            <span className="logo-word">
              <span className="logo-alke">Alke</span><span className="logo-buleum">buleum</span>
            </span>
          </a>
          <div className="nav-right">
            <div className="nav-links">
              {ECOSYSTEM_LINKS.map(l => (
                <Link key={l.label} to={l.href}>{l.label}</Link>
              ))}
            </div>
            <button className="menu-btn" aria-label="Menu" onClick={() => setDrawerOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {drawerOpen && (
        <>
          <div className="drawer-overlay" onClick={close} />
          <div className="drawer">
            {/* Header */}
            <div className="drawer-head">
              <a className="logo" href="/" style={{ color: '#fff' }} onClick={close}>
                <svg style={{ width: 36, height: 36, flexShrink: 0 }}><use href="#logo-nav" /></svg>
                <span className="logo-word">
                  <span className="logo-alke">Alke</span><span className="logo-buleum">buleum</span>
                </span>
              </a>
              <button className="drawer-close" onClick={close} aria-label="Close menu">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="drawer-body">
              {/* Ecosystem */}
              <div className="drawer-section">
                <div className="drawer-section-label">Ecosystem</div>
                {ECOSYSTEM_LINKS.map(l => (
                  <Link key={l.label} className="drawer-link" to={l.href} onClick={close}>
                    {l.label} <ChevronRight />
                  </Link>
                ))}
              </div>

              <div className="drawer-divider" />

              {/* Resources */}
              <div className="drawer-section">
                <div className="drawer-section-label">Resources</div>
                <Link className="drawer-link" to="/resources" onClick={close}>
                  Resources <ChevronRight />
                </Link>
                <a className="drawer-link" href="/whitepaper.html" target="_blank" rel="noopener" onClick={close}>
                  Whitepaper <ChevronRight />
                </a>
                <Link className="drawer-link" to="/grants" onClick={close}>
                  Grants <ChevronRight />
                </Link>
              </div>

              <div className="drawer-divider" />

              {/* Community */}
              <div className="drawer-section">
                <div className="drawer-section-label">Community</div>
                <a className="drawer-link" href="https://t.me/alkebuleum" target="_blank" rel="noopener noreferrer" onClick={close}>
                  Join Telegram <ChevronRight />
                </a>
                <a className="drawer-link" href="https://twitter.com/alkebuleum" target="_blank" rel="noopener noreferrer" onClick={close}>
                  Follow on X <ChevronRight />
                </a>
                <a className="drawer-link" href="https://github.com/alkebuleum" target="_blank" rel="noopener noreferrer" onClick={close}>
                  GitHub <ChevronRight />
                </a>
              </div>

              <div className="drawer-divider" />

              {/* Actions */}
              <div className="drawer-section">
                <div className="drawer-section-label">Get involved</div>
                {onContact ? (
                  <button className="drawer-link" onClick={() => { close(); onContact() }}>
                    Contact us <ChevronRight />
                  </button>
                ) : (
                  <a className="drawer-link" href="mailto:info@alkebuleum.org" onClick={close}>
                    Contact us <ChevronRight />
                  </a>
                )}
                <Link className="drawer-link" to="/council" onClick={close}>
                  Join the Council <ChevronRight />
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="drawer-footer">
              <div className="drawer-social">
                <a href="https://twitter.com/alkebuleum" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://t.me/alkebuleum" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a href="https://facebook.com/alkebuleum" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com/alkebuleum" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
