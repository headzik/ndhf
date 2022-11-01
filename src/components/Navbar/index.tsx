import { Button, Link as NextUILink, Navbar as NextUINavbar } from '@nextui-org/react'
import Logo from 'components/Logo'
import Link from 'next/link'


export default function Navbar() {
  const items = [
    { name: 'Contact', link: '#' },
    { name: 'Mission', link: '#' },
    { name: 'About us', link: '#' },
  ]
  return (
    <NextUINavbar
      css={{
        background: '$primaryLight',
      }}
      containerCss={{
        background: '$none',
      }}
      disableBlur
      variant='sticky'
    >
      <NextUINavbar.Brand>
        <Link href='/'>
          <Logo />
        </Link>
      </NextUINavbar.Brand>
      <NextUINavbar.Content
        hideIn='xs' variant='underline' activeColor='primary'
      >
        {items.map(({ name, link }) => (
          <NextUINavbar.Link
            key={name}
            href={link}
            css={{ color: '$primaryDark' }}
          >
            {name}
          </NextUINavbar.Link>
        ))}
      </NextUINavbar.Content>
      <NextUINavbar.Content>
        <Button
          css={{ background: '$secondaryDark' }}
          rounded
        >
          Donate
        </Button>
      </NextUINavbar.Content>
      <NextUINavbar.Toggle showIn='xs' />
      <NextUINavbar.Collapse css={{ bg: '$primaryLight' }}>
        {items.map(({ name, link }) => (
          <NextUINavbar.CollapseItem key={name}>
            <Link
              style={{ minWidth: '100%', }}
              href={link}
            >
              <NextUILink
                color='primary'
                block
                css={{ minWidth: '100%', }}
              >
                {name}
              </NextUILink>
            </Link>
          </NextUINavbar.CollapseItem>
        ))}
      </NextUINavbar.Collapse>
    </NextUINavbar >
  )
}
