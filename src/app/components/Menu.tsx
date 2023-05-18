'use client'

import clsx from "clsx"
import Hamburger from "hamburger-react"
import { useState } from "react"
import { styles } from "../styles"


export function Menu() {
  const [isOpen, setOpen] = useState(false)

  const List = () => (
    <>
      <a className='text-sm' href="#home">Home</a>
      <a className='text-sm' href="#mission">Mission</a>
      <a className='text-sm' href="#about">About</a>
      <a className='text-sm' href="#donate">Donate</a>
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
          "sm:hidden absolute right-[15px] top-[30px] flex flex-col gap-2 bg-white/80 backdrop-blur-lg p-2 rounded-md duration-200 transition-all",
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
