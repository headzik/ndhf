import Image from 'next/image'


export default function Slideshow() {

  return (
    <div className='marquee'>
      <Image
        src={'/image1.png'}
        height={250}
        width={500}
        layout='fixed'
      />
      <Image
        src={'/image1.png'}
        height={250}
        width={500}
        layout='fixed'
      />
      <Image
        src={'/image1.png'}
        height={250}
        width={500}
        layout='fixed'
      />
      <Image
        src={'/image1.png'}
        height={250}
        width={500}
        layout='fixed'
      />
    </div>
  )
}
