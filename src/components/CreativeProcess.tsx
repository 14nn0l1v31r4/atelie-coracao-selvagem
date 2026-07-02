import { Brush, Heart, Leaf, Sparkles } from 'lucide-react'

const processSteps = [
  { label: 'Modelagem manual', icon: Leaf },
  { label: 'Pintura artesanal', icon: Brush },
  { label: 'Acabamento cuidadoso', icon: Sparkles },
  { label: 'Peças únicas', icon: Heart },
]

export function CreativeProcess() {
  return (
    <section id="processo" className="section section-process scroll-mt-24">
      <div className="site-container grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="process-photo-wrap">
          <img
            src="/images/processo-pintura.webp"
            alt="Processo manual de pintura de uma folha artesanal"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="process-seal" aria-hidden="true">
            <Heart size={25} strokeWidth={1.35} />
            <span>Feito à mão</span>
            <small>com presença</small>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Processo criativo</p>
          <h2 className="section-heading max-w-xl">
            Cada detalhe passa pelas
            <span className="italic text-accent"> mãos.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 opacity-82">
            Da modelagem à pintura e ao acabamento, cada etapa é realizada artesanalmente. O processo manual torna cada peça singular e preserva pequenas variações que fazem parte de sua identidade.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {processSteps.map(({ label, icon: Icon }) => (
              <div key={label} className="process-step">
                <Icon size={25} strokeWidth={1.35} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
