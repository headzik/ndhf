'use client'

import { MouseEvent } from "react"


export function MenuList() {

  const list = [
    'home', 'mission', 'about', 'donate', 'contact'
  ]

  const scrollSmoothly = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    let element = document.getElementById(id)
    event.preventDefault()
    element && element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      {list.map((name) =>
        <a
          key={name}
          onClick={(event) => scrollSmoothly(event, name)}
          href={`#${name}`}
        >
          {name.toUpperCase()}
        </a>
      )}
    </>
  )
}
