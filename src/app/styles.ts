import clsx from "clsx";

const main = clsx(
  'min-h-screen',
  'flex flex-col items-center',
)

const header = clsx(
  'fixed w-full h-12 py-1 px-5',
  'flex justify-center',
  'z-50 shadow-lg bg-white/80 backdrop-blur-sm',
)

const headerContent = clsx(
  'w-full max-w-3xl',
  'flex flex-row justify-between',
)

const menu = clsx(
  'relative flex items-center'
)

const section = 'relative h-96 w-full mt-12'

const lightText = 'text-gray-500 font-light'

const missionColumn = "flex flex-col col-span-3 xs:col-span-1 gap-3"

const missionImageContainer = clsx("relative w-full xs:h-[15vw] h-64")

export const styles = {
  main,
  header,
  headerContent,
  menu,
  section,
  lightText,
  missionColumn,
  missionImageContainer
}
