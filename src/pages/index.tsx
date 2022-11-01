import { Container } from '@nextui-org/react'
import Image from 'next/image'


export default function Home() {
  return (
    <Container
      css={{
        justifyContent: 'center',
        alignContent: 'center',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Image
        src={'/underConstruction.png'}
        alt={''}
        fill
        style={{
          objectFit: 'contain'
        }}
      />
    </Container>
  )
}
