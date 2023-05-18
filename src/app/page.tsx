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

      <section className={clsx(styles.section)} id="home">
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
                alt="Giving Education"
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
                alt="Giving Education"
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
      {/* <div className="row">
              <div className="col-lg-4 col-md-4 project-wrap">
                <div className="single-project">
                  <div className="content">
                    <img className="content-image img-fluid d-block mx-auto" src="img/p1.jpg" alt="">

                  </div>
                </div>
                <div className="details">
                  <h2>Giving shelter. Giving food.</h2>
                  <p>We provide shelter for children so they keep dry during days and nights of rain.<br>
                    We offer nutritious meals to children after school twice a week, ensuring that no one goes without basic sustenance.</p>
                </div>

              </div>
              <div className="col-lg-4 col-md-4 project-wrap">
                <div className="single-project">
                  <div className="content">
                    <img className="content-image img-fluid d-block mx-auto" src="img/p2.jpg" alt="">
                  </div>
                </div>
                <div className="details">
                  <h2>Giving education. Fighting poverty.</h2>
                  <p>We empower children by teaching them skills and helping them to stay away from beer drinking and drugs. <br>
                    We have the goal to empower individuals and communities to break free from poverty.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 project-wrap">
                <div className="single-project">
                  <div className="content">
                    <img className="content-image img-fluid d-block mx-auto" src="img/p3.jpg" alt="">
                  </div>
                </div>
                <div className="details">
                  <h2>Changing lives. Giving hope.</h2>
                  <p>We help individuals to break free from cycles of poverty and hopelessness, supporting them as they transform their lives. <br> We encourage children to see a brighter future and believe in themselves.</p>
                </div>
              </div> */}

      {/* </div> */}
    </main >
  )
}
