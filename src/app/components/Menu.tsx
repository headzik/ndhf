'use client'

import clsx from "clsx"
import Hamburger from "hamburger-react"
import { useState } from "react"
import { styles } from "../styles"


export function Menu() {
  const [isOpen, setOpen] = useState(false)

  const List = () => (
    <>
      <a href="#home">Home</a>
      <a href="#mission">Mission</a>
      <a href="#about">About</a>
      <a href="#donate">Donate</a>
    </>
  )

  return (
    <div className={styles.menu}>
      <nav className={
        clsx("hidden gap-2 sm:flex")
      }
      >
        <List />
      </nav>
      <nav className={
        clsx(
          "sm:hidden absolute right-0 top-[25px] flex flex-col gap-2 bg-white p-2 rounded-md duration-200 transition-all",
          isOpen ? 'opacity-1' : 'opacity-0'
        )
      }
      >
        <List />
      </nav>
      <div className="sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
    </div>
  )
}
