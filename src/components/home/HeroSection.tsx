import { useEffect } from 'react'
import Navbar from '../layout/Navbar'

interface Props {
  onContact: () => void
}

const LAYERS = [
  'slab','slab','slab','slab','slab','slab-bright',
  'slab','slab','slab-bright','slab','slab','slab-bright',
  'slab','slab','slab-bright','slab','slab','slab','slab','slab','slab','slab',
]

const FINAL_Z = [-110,-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100]

export default function HeroSection({ onContact }: Props) {
  useEffect(() => {
    const LAYER_DELAY = 55
    const HOLD_DURATION = 2200
    const FLY_FROM = -420
    const LOOP_PAUSE = 400

    function runAnimation() {
      const layers = Array.from(document.querySelectorAll<HTMLElement>('.stack-inner .layer'))
      if (!layers.length) return

      layers.forEach((el, i) => {
        el.style.transition = 'none'
        el.style.opacity = '0'
        el.style.transform = `translateZ(${FINAL_Z[i] + FLY_FROM}px)`
      })

      layers[0].getBoundingClientRect()

      layers.forEach((el, i) => {
        el.style.transition = 'transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease'
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.transform = `translateZ(${FINAL_Z[i]}px)`
        }, i * LAYER_DELAY)
      })

      const totalBuildTime = layers.length * LAYER_DELAY + 600
      setTimeout(() => {
        setTimeout(runAnimation, LOOP_PAUSE)
      }, totalBuildTime + HOLD_DURATION)
    }

    const t = setTimeout(runAnimation, 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero">
      <div className="hero-glow" />
      <Navbar onContact={onContact} />
      <div className="hero-inner">
        <div className="stack rise d1">
          <div className="stack-inner">
            {LAYERS.map((id, i) => (
              <div className="layer" key={i}>
                <svg><use href={`#${id}`} /></svg>
              </div>
            ))}
          </div>
        </div>
        <h1 className="hero-title rise d2">A Ledger of Trust, Built by Africa.</h1>
        <p className="hero-sub rise d3">
          Sovereign blockchain infrastructure for identity, finance, and institutional records — built for governments, institutions, and the diaspora.
        </p>
        <div className="hero-cta rise d4">
          <a className="btn btn-violet" href="#developers">Start Building</a>
          <button className="btn btn-outline" onClick={onContact}>Contact</button>
        </div>
      </div>
    </section>
  )
}
