import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export interface ActiveEventConfig {
  id: string
  name: string
  label: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  goLiveAt: string
  hideAfter?: string
}

export async function fetchActiveEvent(): Promise<ActiveEventConfig | null> {
  try {
    const eventsRef = collection(db, 'events')
    const q = query(eventsRef, where('bannerEnabled', '==', true))
    const snap = await getDocs(q)

    if (snap.empty) return null

    const now = new Date()
    const candidates: ActiveEventConfig[] = []

    snap.forEach((doc) => {
      const data = doc.data() as {
        name: string
        label: string
        description: string
        ctaLabel?: string
        ctaHref?: string
        goLiveAt: Timestamp
        hideAfter?: Timestamp
      }

      if (!data.goLiveAt) return

      const goLiveAtDate = data.goLiveAt.toDate()
      const hideAfterDate = data.hideAfter?.toDate()

      if (hideAfterDate && hideAfterDate < now) return

      candidates.push({
        id: doc.id,
        name: data.name,
        label: data.label,
        description: data.description,
        ctaLabel: data.ctaLabel,
        ctaHref: data.ctaHref,
        goLiveAt: goLiveAtDate.toISOString(),
        hideAfter: hideAfterDate?.toISOString(),
      })
    })

    if (candidates.length === 0) return null

    candidates.sort(
      (a, b) => new Date(a.goLiveAt).getTime() - new Date(b.goLiveAt).getTime()
    )

    return candidates[0]
  } catch {
    return null
  }
}
