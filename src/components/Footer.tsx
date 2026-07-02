import { InstagramIcon } from './InstagramIcon'
import { instagramUrl } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="section-footer">
      <div className="site-container flex flex-col items-center justify-between gap-5 py-7 text-center sm:flex-row sm:text-left">
        <Logo />
        <p className="text-sm opacity-70">Uma brincadeira entre amigos, feita com pressa de viver e tempo para criar</p>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="icon-button"
          aria-label="Abrir Instagram do Ateliê Coração Selvagem"
        >
          <InstagramIcon size={20} />
        </a>
      </div>
    </footer>
  )
}
