import clsx from "clsx";

const main = clsx(
  'min-h-screen',
  'flex flex-col items-center justify-center p-24'
)

const header = clsx(
  'absolute w-full h-12 top-0 left-0 py-1 px-5',
  'flex justify-center',
  'shadow-lg',
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
