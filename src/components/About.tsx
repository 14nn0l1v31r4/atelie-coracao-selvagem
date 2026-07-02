import { MapPin, Sparkles } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'
import { instagramUrl } from '../data/content'

export function About() {
  return (
    <section id="sobre" className="section section-about scroll-mt-24">
      <div className="site-container py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow mb-5">Sobre o ateliê</p>
            <h2 className="section-heading max-w-xl">
              Uma brincadeira entre amigos com
              <span className="italic text-accent"> pressa de viver.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 opacity-82">
              Entre conversas, ideias e experimentações, o Ateliê Coração Selvagem compartilha coisinhas feitas de cerâmica fria — criações inspiradas na natureza, no cotidiano e nas coisas que despertam afeto
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 opacity-82">
              Um espaço coletivo para imaginar, modelar e transformar referências em peças que carregam presença e personalidade
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-current/20 px-4 py-2 text-sm font-medium">
              <MapPin size={17} className="text-accent" aria-hidden="true" />
              Campos dos Goytacazes · RJ
            </div>
          </div>

          <div className="about-collage">
            <figure className="about-collage__main">
              <img
                src="/images/colecao-folhas.webp"
                alt="Conjunto de peças botânicas do Ateliê Coração Selvagem"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="about-collage__small about-collage__small--one">
              <img src="/images/envelope-coracao.webp" alt="Envelope artesanal com coração" className="h-full w-full object-cover" loading="lazy" />
            </figure>
            <figure className="about-collage__small about-collage__small--two">
              <img src="/images/porta-copos-frutas.webp" alt="Porta-copos artesanais coloridos" className="h-full w-full object-cover" loading="lazy" />
            </figure>
            <div className="about-collage__spark" aria-hidden="true">
              <Sparkles size={24} />
            </div>
          </div>
        </div>

        <div className="instagram-cta mt-16 sm:mt-20">
          <div>
            <p className="font-display text-3xl leading-tight sm:text-4xl">
              Continue conhecendo
              <span className="block italic text-accent">nossas criações</span>
            </p>
            <p className="mt-3 max-w-lg text-sm leading-6 opacity-72">
              Acompanhe novos trabalhos, detalhes das peças e registros do processo criativo pelo Instagram do ateliê
            </p>
          </div>

          <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button--primary shrink-0">
            <InstagramIcon size={17} aria-hidden="true" />
            Acompanhar no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
