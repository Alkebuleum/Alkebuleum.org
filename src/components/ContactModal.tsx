import { useState } from 'react'

const FORMSPREE = 'https://formspree.io/f/mbdblrae'

type FormState = { name: string; email: string; message: string }
const EMPTY: FormState = { name: '', email: '', message: '' }

interface Props {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, _subject: 'Contact request — Alkebuleum' }),
      })
      if (res.ok) { setStatus('success'); setForm(EMPTY) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const close = () => { onClose(); setTimeout(() => setStatus('idle'), 300) }

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
      <div className="modal">
        <div className="modal-head">
          <h3>Talk to the team</h3>
          <button className="modal-close" onClick={close} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="modal-body">
          {status === 'success' ? (
            <div className="form-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>
              <h4>Message sent</h4>
              <p>Thanks for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Your name *</label>
                  <input required value={form.name} onChange={set('name')} placeholder="Full name" />
                </div>
                <div className="form-field">
                  <label>Email address *</label>
                  <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-field">
                <label>Message *</label>
                <textarea required value={form.message} onChange={set('message')} placeholder="What would you like to discuss?" style={{ minHeight: 120 }} />
              </div>
              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: 13, marginBottom: 12 }}>Something went wrong. Please try again or email us at info@alkebuleum.org</p>
              )}
              <button className="btn btn-violet form-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
