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

export const styles = {
  main,
  header,
  headerContent,
  menu
}
