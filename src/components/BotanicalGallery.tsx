import { ArrowRight, Leaf } from 'lucide-react'
import { botanicalCreations } from '../data/content'

export function BotanicalGallery() {
  return (
    <section id="criacoes" className="section section-botanical scroll-mt-24">
      <div className="site-container py-20 sm:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[0.36fr_1fr]">
          <div>
            <Leaf className="mb-5 text-accent" size={26} strokeWidth={1.4} aria-hidden="true" />
            <p className="eyebrow mb-4">Galeria</p>
            <h2 className="section-heading">
              Criações
              <span className="block italic text-accent">botânicas</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-7 opacity-80">
              Folhas, texturas e cores reinterpretadas em peças únicas, cheias de vida e personalidade.
            </p>
            <a href="/galeria" className="text-link mt-7">
              Abrir galeria completa
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="gallery-scroll" role="list" aria-label="Criações botânicas">
            {botanicalCreations.map((creation, index) => (
              <article
                key={creation.title}
                className="creation-card group"
                role="listitem"
                style={{ '--card-delay': `${index * 60}ms` } as React.CSSProperties}
              >
                <div className="creation-card__image-wrap">
                  <img
                    src={creation.image}
                    alt={creation.alt}
                    className="creation-card__image"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-xl leading-tight">{creation.title}</h3>
                  <p className="mt-1 text-sm opacity-65">{creation.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
