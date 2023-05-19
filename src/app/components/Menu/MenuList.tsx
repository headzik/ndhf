'use client'

import { MouseEvent, ReactNode } from "react"


export function MenuListItem({
  className,
  children,
  linkTo
}: {
  className?: string
  children?: ReactNode
  linkTo: string
}) {
  const scrollSmoothly = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    let element = document.getElementById(id)
    event.preventDefault()
    element && element.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <a
      onClick={(event) => scrollSmoothly(event, linkTo)}
      href={`#${name}`}
      className={className}
    >
      {children || linkTo.toUpperCase()}
    </a>
  )
}

export function MenuList() {

  const list = [
    'home', 'mission', 'about', 'donate', 'contact'
  ]

  return (
    <>
      {list.map((linkTo) => <MenuListItem key={linkTo} linkTo={linkTo} />)}
    </>
  )
}
