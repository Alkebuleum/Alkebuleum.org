interface Props {
  onContact: () => void
}

export default function BigCTASection({ onContact }: Props) {
  return (
    <section className="bigcta">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />
      <div className="glow" />
      <div className="wrap inner">
        <svg className="cta-mark" style={{ color: 'rgba(255,255,255,0.65)' }}><use href="#logo-bold" /></svg>
        <h2>Build the rails<br />that <span className="hl">Africa</span> actually needs.</h2>
        <p>Whether you're a ministry, a bank, a developer, or a diaspora organization — there's a place for you in what we're building.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn btn-violet" href="#developers">Start Building</a>
          <button className="btn btn-outline" onClick={onContact}>Talk to the team</button>
        </div>
      </div>
    </section>
  )
}
