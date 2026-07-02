import { ArrowDown, Leaf, Sparkles } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'
import { instagramUrl } from '../data/content'

export function Hero() {
  return (
    <section id="inicio" className="section section-hero scroll-mt-24 overflow-hidden">
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />

      <div className="site-container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            Cerâmica fria · feita à mão
          </div>

          <p className="hero-tagline font-display italic text-accent">
            Uma brincadeira entre amigos que têm pressa de viver…
          </p>

          <h1 className="hero-title font-display">
            Natureza que
            <span className="mt-2 block italic text-accent">vira arte</span>
          </h1>

          <div className="my-7 flex items-center gap-4 text-accent" aria-hidden="true">
            <Leaf size={18} strokeWidth={1.5} />
            <span className="h-px w-28 bg-current opacity-60" />
          </div>

          <p className="max-w-lg text-base leading-7 opacity-85 sm:text-lg sm:leading-8">
            Compartilhando nossas coisinhas feitas de cerâmica fria, inspiradas em folhas, cores e afetos ✨
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#criacoes" className="button button--primary">
              Conheça as criações
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button--outline">
              <InstagramIcon size={17} aria-hidden="true" />
              Ver no Instagram
            </a>
          </div>
        </div>

        <div className="hero-artwork">
          <div className="hero-image-orbit" aria-hidden="true" />
          <img
            src="/images/colecao-folhas-recortada.webp"
            alt="Coleção de folhas artesanais coloridas do Ateliê Coração Selvagem"
            className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_36px_rgba(0,0,0,0.3)]"
            fetchPriority="high"
          />

          <div className="floating-note floating-note--top">
            <span className="floating-note__dot" />
            Formas da natureza
          </div>
          <div className="floating-note floating-note--bottom">
            <span className="font-display text-lg italic">Feito com amor</span>
            <span className="text-[0.68rem] uppercase tracking-[0.22em] opacity-65">Coração Selvagem</span>
          </div>
        </div>
      </div>
    </section>
  )
}
