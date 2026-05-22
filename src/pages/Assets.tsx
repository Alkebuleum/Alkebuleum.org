import { useEffect } from 'react'

export default function Assets() {
  useEffect(() => { window.location.replace('/assets') }, [])
  return null
}
