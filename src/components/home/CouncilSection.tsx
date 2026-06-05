import { useState } from 'react'

const FORMSPREE = 'https://formspree.io/f/mbdblrae'

const ORG_TYPES = [
  'Central Bank',
  'Commercial Bank',
  'University / Academic Institution',
  'Government Ministry',
  'Financial Regulator',
  'Fintech',
  'Diaspora Institution',
  'Trade / Continental Body',
  'Other',
]

const CRITERIA = [
  {
    title: 'Serves Africa or the diaspora',
    desc: 'Your institution\'s primary mandate or customer base must be African nations, communities, or the global African diaspora.',
  },
  {
    title: 'Institutional standing',
    desc: 'Registered entities only — central banks, licensed financial institutions, accredited universities, government bodies, or recognized diaspora organizations.',
  },
  {
    title: 'Technical capacity',
    desc: 'Ability to operate and maintain a validator node, or willingness to work with a technical partner to do so.',
  },
  {
    title: 'Governance commitment',
    desc: 'Validators participate in protocol governance votes and are expected to engage on major network decisions.',
  },
  {
    title: 'Aligned mission',
    desc: 'Commitment to sovereign, open, and inclusive digital infrastructure for Africa — not speculative or extractive use.',
  },
  {
    title: 'Minimum stake',
    desc: 'Founding council validators are required to hold and lock a minimum amount of $ALKE as a security deposit during their validator tenure.',
  },
]

const tiles = [
  {
    name: 'Central Banks',
    sub: 'Monetary authorities & sovereign settlement',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 34h28M8 34V18l12-8 12 8v16M15 34V24h10v10"/></svg>,
  },
  {
    name: 'Commercial Banks',
    sub: 'Financial services & payment infrastructure',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="12" width="30" height="18" rx="1.5"/><path d="M5 18h30M11 25h6"/></svg>,
  },
  {
    name: 'Universities',
    sub: 'Academic credentials & research',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L4 14l16 8 16-8z"/><path d="M10 18v8c0 2 4 5 10 5s10-3 10-5v-8"/></svg>,
  },
  {
    name: 'Government Ministries',
    sub: 'Civic records & public services',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="28" height="24" rx="2"/><path d="M14 14h12M14 20h12M14 26h8"/></svg>,
  },
  {
    name: 'Regulators',
    sub: 'Financial, data & telecoms oversight',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4L8 9v10c0 7 5 14 12 17 7-3 12-10 12-17V9z"/><path d="M14 19l4 4 8-8"/></svg>,
  },
  {
    name: 'Fintechs',
    sub: 'Mobile money & digital finance leaders',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="10" y="6" width="20" height="28" rx="2"/><path d="M14 12h12M14 18h12M16 28h8"/></svg>,
  },
  {
    name: 'Diaspora Institutions',
    sub: 'Global African coalitions & investment vehicles',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="14"/><path d="M6 20h28M20 6a18 18 0 0 1 0 28M20 6a18 18 0 0 0 0 28"/></svg>,
  },
  {
    name: 'Trade & Continental Bodies',
    sub: 'AfCFTA-aligned coordination institutions',
    icon: <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="6"/><circle cx="28" cy="14" r="6"/><circle cx="21" cy="28" r="6"/><path d="M18 14h6M16 19l4 5M26 19l-4 5"/></svg>,
  },
]

type FormState = { org: string; name: string; email: string; type: string; country: string; message: string }
const EMPTY: FormState = { org: '', name: '', email: '', type: '', country: '', message: '' }

export default function CouncilSection() {
  const [applyOpen, setApplyOpen] = useState(false)
  const [criteriaOpen, setCriteriaOpen] = useState(false)
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          organization: form.org,
          contact_name: form.name,
          email: form.email,
          organization_type: form.type,
          country: form.country,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(EMPTY)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const closeApply = () => { setApplyOpen(false); setTimeout(() => setStatus('idle'), 300) }

  return (
    <section className="sec" id="governance">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">— The Council is forming</span>
          <h2>Governed by Africa. <span className="hl">Owned by everyone who builds it.</span></h2>
          <p>Alkebuleum is being secured by a founding council of African and diaspora institutions. The categories below define who we're building with — and who we're actively inviting to validate the network.</p>
        </div>

        <div className="council-grid">
          {tiles.map((t) => (
            <div className="council-tile" key={t.name}>
              <div className="council-icon">{t.icon}</div>
              <div className="council-name">{t.name}</div>
              <div className="council-sub">{t.sub}</div>
            </div>
          ))}
        </div>

        <div className="council-cta">
          <h3>Build the foundation with us.</h3>
          <p>If your institution serves Africa or the diaspora, we're inviting you to join the founding council. Validators shape the protocol, secure the network, and define how the continent's digital trust infrastructure is built.</p>
          <div className="council-actions">
            <button className="btn btn-dark" onClick={() => setApplyOpen(true)}>Apply to validate →</button>
            <a className="btn btn-outline-dark" href="https://council.alkebuleum.org">Visit the Council</a>
          </div>
        </div>
      </div>

      {/* Apply modal */}
      {applyOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeApply()}>
          <div className="modal">
            <div className="modal-head">
              <h3>Apply to join the founding council</h3>
              <button className="modal-close" onClick={closeApply} aria-label="Close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="modal-body">
              {status === 'success' ? (
                <div className="form-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
                  <h4>Application received</h4>
                  <p>Thank you. We'll review your application and reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Organization name *</label>
                      <input required value={form.org} onChange={set('org')} placeholder="e.g. Bank of Ghana" />
                    </div>
                    <div className="form-field">
                      <label>Contact name *</label>
                      <input required value={form.name} onChange={set('name')} placeholder="Your full name" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Email address *</label>
                    <input required type="email" value={form.email} onChange={set('email')} placeholder="contact@yourorg.org" />
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Organization type *</label>
                      <select required value={form.type} onChange={set('type')}>
                        <option value="">Select type…</option>
                        {ORG_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Country</label>
                      <input value={form.country} onChange={set('country')} placeholder="e.g. Nigeria" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Tell us about your institution</label>
                    <textarea value={form.message} onChange={set('message')} placeholder="What does your institution do, and why do you want to join the council?" />
                  </div>
                  {status === 'error' && (
                    <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 12 }}>Something went wrong. Please try again or email us at info@alkebuleum.org</p>
                  )}
                  <button className="btn btn-violet form-submit" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting…' : 'Submit application →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Criteria modal */}
      {criteriaOpen && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setCriteriaOpen(false)}>
          <div className="modal">
            <div className="modal-head">
              <h3>Council validator criteria</h3>
              <button className="modal-close" onClick={() => setCriteriaOpen(false)} aria-label="Close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="modal-body">
              <p>To join the Alkebuleum founding council as a validator, institutions must meet the following criteria.</p>
              <ul className="criteria-list">
                {CRITERIA.map((c, i) => (
                  <li className="criteria-item" key={c.title}>
                    <span className="criteria-num">0{i + 1}</span>
                    <div className="criteria-text">
                      <h5>{c.title}</h5>
                      <p>{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
