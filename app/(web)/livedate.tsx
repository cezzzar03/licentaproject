'use client'

import { useEffect, useState } from 'react'

export default function Livedate() {
  const [ziData, setZiData] = useState('')
  const [ora, setOra] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()

      const zi = now.toLocaleDateString('ro-RO', { weekday: 'long' })
      const data = now.toLocaleDateString('ro-RO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      const oraRo = now.toLocaleTimeString('ro-RO', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Bucharest',
      })

      setZiData(`${capitalize(zi)}, ${data}`)
      setOra(oraRo)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="bg-white text-black px-4 py-2 rounded-lg shadow text-sm font-mono text-right leading-tight">
      <div>🗓️ {ziData}</div>
      <div>🕒 {ora}</div>
    </div>
  )
}