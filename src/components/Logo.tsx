export function Logo() {
  return (
    <a
      href="/#inicio"
      className="brand-logo group rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
      aria-label="Voltar ao início"
    >
      <svg
        viewBox="0 0 100 92"
        className="brand-logo__mark drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="heart-logo-clip">
            <path d="M50 88C42 76 8 57 8 30C8 13 20 4 34 4C43 4 49 9 50 16C52 9 58 4 67 4C82 4 92 14 92 30C92 57 59 76 50 88Z" />
          </clipPath>
        </defs>
        <image
          href="/images/colecao-folhas.webp"
          width="100"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#heart-logo-clip)"
        />
        <path
          d="M50 88C42 76 8 57 8 30C8 13 20 4 34 4C43 4 49 9 50 16C52 9 58 4 67 4C82 4 92 14 92 30C92 57 59 76 50 88Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.75"
        />
      </svg>

      <span className="brand-logo__text font-display">
        <span className="block">Ateliê</span>
        <span className="block">Coração Selvagem</span>
      </span>
    </a>
  )
}
