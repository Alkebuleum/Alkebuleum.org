const items = [
  { tag: 'News', text: 'Liberia launches first national anti-corruption program on Alkebuleum' },
  { tag: 'Council', text: 'Pan-African DAO opens validator program to 11 African universities' },
  { tag: 'Diaspora', text: 'First diaspora investment vehicles go live on mainnet' },
  { tag: 'Partnership', text: 'Ministry of Posts & Telecoms joins as founding network operator' },
]

export default function TickerSection() {
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="tag">{item.tag}</span>
            <span className="dot" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
