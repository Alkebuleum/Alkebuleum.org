import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchActiveEvent, ActiveEventConfig } from '../../services/activeEventService'

function pad2(n: number) {
  return n.toString().padStart(2, '0')
}

function computeCountdown(targetMs: number, nowMs: number) {
  const totalSecs = Math.max(0, Math.floor((targetMs - nowMs) / 1000))
  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    minutes: Math.floor((totalSecs % 3600) / 60),
  }
}

export default function ActiveEventBanner() {
  const [event, setEvent] = useState<ActiveEventConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [now, setNow] = useState(() => Date.now())
  const navigate = useNavigate()

  useEffect(() => {
    let cancelled = false
    fetchActiveEvent().then((result) => {
      if (!cancelled) { setEvent(result); setLoading(false) }
    })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (!event) return
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [event])

  if (loading || !event) return null

  const targetMs = new Date(event.goLiveAt).getTime()
  const hideAfterMs = event.hideAfter ? new Date(event.hideAfter).getTime() : undefined
  if (hideAfterMs && now > hideAfterMs) return null

  const isLive = now >= targetMs
  const cd = computeCountdown(targetMs, now)

  const handleClick = () => {
    if (!event.ctaHref) return
    if (event.ctaHref.startsWith('http')) { window.location.href = event.ctaHref }
    else { navigate(event.ctaHref) }
  }

  return (
    <div
      className="event-banner"
      role={event.ctaHref ? 'button' : 'banner'}
      tabIndex={event.ctaHref ? 0 : -1}
      onClick={event.ctaHref ? handleClick : undefined}
      style={{ cursor: event.ctaHref ? 'pointer' : 'default' }}
    >
      <div className="wrap event-banner-inner">
        <div>
          <div className="event-banner-name">{event.name}</div>
          <div className="event-banner-label">{event.label}</div>
        </div>
        <div className="event-banner-desc">
          {event.description}{' '}
          {event.ctaHref && event.ctaLabel && (
            <a href={event.ctaHref} onClick={(e) => e.stopPropagation()}>{event.ctaLabel}</a>
          )}
        </div>
        <div className="event-banner-countdown">
          {isLive ? (
            <span className="event-live-tag">Live Now</span>
          ) : (
            <>
              {[['Days', cd.days], ['Hours', cd.hours], ['Mins', cd.minutes]].map(([label, val]) => (
                <div className="event-cd-unit" key={label as string}>
                  <span className="event-cd-num">{pad2(val as number)}</span>
                  <span className="event-cd-label">{label}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
