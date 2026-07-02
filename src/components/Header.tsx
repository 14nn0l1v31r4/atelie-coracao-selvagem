import { Images, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { InstagramIcon } from './InstagramIcon'
import { instagramUrl } from '../data/content'
import type { Theme } from '../hooks/useTheme'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

const navigation = [
  {
    label: 'Criações',
    href: '/#criacoes',
  },
  {
    label: 'Galeria',
    href: '/galeria',
  },
  {
    label: 'Processo',
    href: '/#processo',
  },
  {
    label: 'Sobre',
    href: '/#sobre',
  },
]

export function Header({
  theme,
  onToggleTheme,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Logo />

        <nav
          className="header-nav"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
          />

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--primary header-instagram"
          >
            <InstagramIcon
              size={17}
              aria-hidden="true"
            />

            Visitar Instagram
          </a>

          <button
            type="button"
            className="icon-button header-menu-button"
            aria-label={
              menuOpen ? 'Fechar menu' : 'Abrir menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu--open' : ''
        }`}
      >
        <nav
          className="site-container flex flex-col gap-1 pb-5"
          aria-label="Navegação móvel"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {item.label === 'Galeria' && (
                <Images
                  size={17}
                  aria-hidden="true"
                />
              )}

              {item.label}
            </a>
          ))}

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--primary mt-2 justify-center"
            onClick={closeMenu}
          >
            <InstagramIcon
              size={17}
              aria-hidden="true"
            />

            Visitar Instagram
          </a>
        </nav>
      </div>
    </header>
  )
}