'use client'

import { useState, useCallback } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev
      const index = document.getElementById('index')
      const closingLayer = document.getElementById('closing-layer')

      if (next) {
        index?.classList.add('open')
        closingLayer?.classList.add('visible')
      } else {
        index?.classList.remove('open')
        closingLayer?.classList.remove('visible')
      }

      return next
    })
  }, [])

  return (
    <>
      <button className="index-toggle" onClick={toggle} aria-label="Toggle navigation">
        <div id="nav-toggle" className={open ? 'active' : ''}>
          <span />
        </div>
      </button>
    </>
  )
}
