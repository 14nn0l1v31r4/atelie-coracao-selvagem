import { Heart, Leaf } from 'lucide-react'
import { otherCreations } from '../data/content'

export function OtherCreations() {
  return (
    <section id="alem-das-folhas" className="section section-other scroll-mt-24">
      <div className="site-container py-20 sm:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-accent" aria-hidden="true">
            <Leaf size={18} strokeWidth={1.4} />
            <Heart size={17} strokeWidth={1.4} />
          </div>
          <h2 className="section-heading">Além das folhas</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 opacity-80">
            O ateliê também explora objetos, símbolos e ideias que ganham forma por meio do trabalho artesanal.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherCreations.map((creation, index) => (
            <article key={creation.title} className={`other-card ${index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="other-card__image-wrap">
                <img src={creation.image} alt={creation.alt} className="other-card__image" loading="lazy" />
              </div>
              <div className="px-1 pt-4 text-center">
                <h3 className="font-display text-xl">{creation.title}</h3>
                <p className="mt-1 text-sm opacity-65">{creation.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
