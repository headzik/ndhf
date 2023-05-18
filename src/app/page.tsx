import clsx from 'clsx'
import Image from 'next/image'
import { Menu } from './components/Menu'
import { styles } from './styles'


export default function Home() {

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#home">
            <Image
              className="relative"
              src="/logo.png"
              alt="Logo"
              width={70}
              height={37}
              priority
            />
          </a>
          <Menu />
        </div>
      </header>

      <section className="relative h-96 w-full mt-12" id="home">
        <Image
          src="/banner.jpg"
          alt="Banner"
          priority
          fill
          className='object-cover'
        />
        <div className={clsx(
          'absolute top-0 w-full h-full left-10 bg-black/50',
          'flex flex-col justify-center gap-5'
        )}>
          <h1 className='w-2/3 text-3xl text-white font-bold'>
            {`Bringing new dawn for children's future.`}
          </h1>
          <a href="#project"
            className="bg-white p-3 rounded-full text-xs uppercase  max-w-fit">
            Learn more
          </a>
        </div>
      </section>
    </main>
  )
}
