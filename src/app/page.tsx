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

      <section className='relative h-96 w-full mt-12' id="home">
        <Image
          src="/banner.jpg"
          alt="Banner"
          priority
          fill
          className='object-cover'
        />
        <div className={clsx(
          'absolute w-full h-full top-0 left-0 bg-black/50',
          'flex flex-col justify-center items-center'
        )}>
          <div className={clsx(
            'w-1/2 -ml-40',
            'flex flex-col justify-center gap-5'
          )}>
            <h1 className='text-white font-bold lg:text-5xl'>
              {`Bringing new dawn for children's future.`}
            </h1>
            <a href="#project"
              className="bg-white py-2 px-5 rounded-full text-[0.5rem] uppercase max-w-fit">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className={clsx(
        styles.section,
        'flex flex-col items-center gap-10'
      )}
        id="mission"
      >
        <div className='flex flex-col items-center text-center w-4/5 gap-3'>
          <h1>Our mission</h1>
          <p className={styles.lightText}>
            We are committed to making a positive difference in the lives of those in need.<br />
            We provide shelter, food, education, and hope to individuals and families struggling
            with poverty.<br />
            Join us in our mission to create a brighter future for all.
          </p>
        </div>
        <div className='container px-14 max-w-3xl grid grid-cols-3 gap-5'>

          <div className={styles.missionColumn}>
            <div className={styles.missionImageContainer}>
              <Image
                src="/p1.jpg"
                alt="Giving shelter"
                fill
                className='object-cover'
              />
            </div>
            <h2>Giving shelter. Giving food.</h2>
            <p className={styles.lightText}>
              We provide shelter for children so they keep dry during days and nights of rain.<br />
              We offer nutritious meals to children after school twice a week,
              ensuring that no one goes without basic sustenance.
            </p>
          </div>

          <div className={styles.missionColumn}>
            <div className={styles.missionImageContainer}>
              <Image
                src="/p2.jpg"
                alt="Giving Education"
                fill
                className='object-cover'
              />
            </div>
            <h2>Giving education. Fighting poverty.</h2>
            <p className={styles.lightText}>
              We empower children by teaching them skills and helping them to stay away from
              beer drinking and drugs. <br />
              We have the goal to empower individuals and communities to break free from poverty.
            </p>
          </div>

          <div className={styles.missionColumn}>
            <div className={styles.missionImageContainer}>
              <Image
                src="/p3.jpg"
                alt="Giving hope"
                fill
                className='object-cover'
              />
            </div>
            <h2>Changing lives. Giving hope.</h2>
            <p className={styles.lightText}>
              We help individuals to break free from cycles of poverty and hopelessness,
              supporting them as they transform their lives. <br />
              We encourage children to see a brighter future and believe in themselves.
            </p>
          </div>
        </div>
      </section>


      <section className={clsx(
        styles.section,
        'bg-zinc-800'
      )}
        id="about"
      >
        <div className="container px-4 sm:px-16 mx-auto">
          <Image
            src="/about.jpg"
            alt="Founder"
            width={150}
            height={150}
            className='float-left m-2'
          />
          <h1 className='text-white font-bold'>The founder</h1>
          <p className='text-white font-light'>
            {`
                  My name is Sibusisiwe Sithole, Busi for short. I am a Zimbabwean woman,
                  mother of 2, and grandmother of 5, but raised about 30 children I used
                  to accommodate. I always believed in the importance of changing children's
                  lives by teaching them skills and helping them to stay away from beer drinking
                  and drugs. I was born with a loving kind heart and grew up with the compassion
                  to help others. Helping people has always been a part of my life.
                `}
          </p>
          <h1 className='text-white font-bold mt-3'>History</h1>
          <p className='text-white font-light'>
            {`
              I started giving food to poor people in the streets in 2004. 
              In 2011 I moved to Knysna (South Africa) while taking care of my sister's two children,
               as she was not able to do that herself due to health problems. I opened an art and craft
                shop which in 2019 was visited by a customer from Sweden who advised me to register a 
                Non Profitable Organization called the New Dawn Hope Foundation. I felt it was time 
                for me to stand and I took it as confirmation from God to help children who are hungry 
                by cooking fresh food for them after school. I became a popular soup kitchen that 
                feeds between 30 to 50 kids twice a week up to now.
              `}
          </p>
          <iframe
            src="https://www.youtube.com/embed/LGfA543xFJw"
            title="The Introduction of New Daw Hope Foundation International"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='float-right m-2 w-[280px]'
          />
          <h1 className='text-white font-bold mt-3'>Challenges</h1>
          <p className='text-white font-light'>
            I have a shop that I must open daily to earn money to feed the kids. During the pandemic, my business
            did not do well and prices continue to rise. It is not easy especially when you do it alone. I use a very
            small stove which makes it challenging to cook. I wake up as early as I can, usually at 3 a.m. to cook
            fresh food for the kids. At the moment I am asking for help from anyone out there to be able to employ
            someone to help me cook, buy food, and buy a bigger stove and necessary kitchen utensils. My biggest
            dream is to see the Foundation grow, to have my own place where I can build a shelter and help more kids out there.
          </p>
        </div>
      </section>
    </main>
  )
}
