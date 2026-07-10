export const galleryCategories = [
  'Todas',
  'Folhas',
  'Frases',
  'Afetos',
  'Utilitários',
  'Decorativas',
] as const

export type GalleryFilter =
  (typeof galleryCategories)[number]

export type GalleryCategory = Exclude<
  GalleryFilter,
  'Todas'
>

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  description: string
  image: string
  images?: string[]
  alt: string
  objectPosition?: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'quadro-folha-verde',
    title: 'Quadro folha verde',
    category: 'Decorativas',
    description:
      'Composição decorativa com folha verde rajada em relevo, apresentada em moldura preta.',
    image: '/images/galeria/decorativas/quadro-folha-verde-01.webp',
    images: [
      '/images/galeria/decorativas/quadro-folha-verde-01.webp',
      '/images/galeria/decorativas/quadro-folha-verde-02.webp',
    ],
    alt: 'Quadro preto com folha verde rajada em relevo',
    objectPosition: 'center',
  },
  {
    id: 'onca-ceramica',
    title: 'Onça em cerâmica',
    category: 'Decorativas',
    description:
      'Peça decorativa em formato de onça, com pintura amarela e manchas pretas.',
    image: '/images/galeria/decorativas/onca-ceramica-02.webp',
    images: [
      '/images/galeria/decorativas/onca-ceramica-02.webp',
      '/images/galeria/decorativas/onca-ceramica-01.webp',
    ],
    alt: 'Onça decorativa em cerâmica pintada de amarelo com manchas pretas',
    objectPosition: 'center',
  },
  {
    id: 'folha-verde-marrom',
    title: 'Folha verde e marrom',
    category: 'Folhas',
    description:
      'Folha orgânica com centro verde vibrante, bordas escuras e nervuras em tons terrosos.',
    image: '/images/galeria/folhas/folha-verde-marrom-01.webp',
    alt: 'Folha artesanal verde e marrom com nervuras em relevo',
    objectPosition: 'center',
  },
  {
    id: 'folha-veios-brancos',
    title: 'Folha com veios brancos',
    category: 'Folhas',
    description:
      'Folha alongada em tons de verde com nervura central escura e veios brancos em relevo.',
    image: '/images/galeria/folhas/folha-veios-brancos-01.webp',
    alt: 'Folha artesanal verde com veios brancos',
    objectPosition: 'center',
  },
  {
    id: 'folha-espada-rajada',
    title: 'Folha espada rajada',
    category: 'Folhas',
    description:
      'Folha estreita inspirada em espada-de-são-jorge, com pintura rajada em verdes e borda amarela.',
    image: '/images/galeria/folhas/folha-espada-amarela-01.webp',
    images: [
      '/images/galeria/folhas/folha-espada-amarela-01.webp',
      '/images/galeria/folhas/folha-rajada-amarela-01.webp',
    ],
    alt: 'Folha estreita verde rajada com borda amarela',
    objectPosition: 'center',
  },
  {
    id: 'folha-costela-adao',
    title: 'Folha Costela-de-adão',
    category: 'Folhas',
    description:
      'Peça inspirada na costela-de-adão, com recortes característicos e acabamento verde brilhante.',
    image: '/images/galeria/folhas/folha-costela-adao-01.webp',
    images: [
      '/images/galeria/folhas/folha-costela-adao-01.webp',
      '/images/galeria/folhas/folha-costela-adao-02.webp',
      '/images/galeria/folhas/folha-costela-adao-03.webp',
    ],
    alt: 'Folha artesanal costela-de-adão verde esmaltada',
    objectPosition: 'center',
  },
  {
    id: 'folha-pintada-vinho',
    title: 'Folha pintada com borda vinho',
    category: 'Folhas',
    description:
      'Folha escura com pintas brancas, detalhes em verde e borda em tom vinho.',
    image: '/images/galeria/folhas/folha-pintada-vinho-01.webp',
    images: [
      '/images/galeria/folhas/folha-pintada-vinho-01.webp',
      '/images/galeria/folhas/folha-pintada-vinho-02.webp',
    ],
    alt: 'Folha artesanal escura com pintas brancas e borda vinho',
    objectPosition: 'center',
  },
  {
    id: 'folha-veios-vermelhos',
    title: 'Folha com veios vermelhos',
    category: 'Folhas',
    description:
      'Folha verde escura com pintas brancas e nervuras em vermelho, com acabamento brilhante.',
    image: '/images/galeria/folhas/folha-vermelha-02.webp',
    images: [
      '/images/galeria/folhas/folha-vermelha-02.webp',
      '/images/galeria/folhas/folha-vermelha-01.webp',
    ],
    alt: 'Folha artesanal verde com veios vermelhos e pintas brancas',
    objectPosition: 'center',
  },
  {
    id: 'folha-rosa-parede',
    title: 'Folha rosa na parede',
    category: 'Folhas',
    description:
      'Folha decorativa de parede com fundo rosa e pintura botânica em tons de verde.',
    image: '/images/galeria/folhas/folha-rosa-parede-01.webp',
    alt: 'Folha artesanal rosa com detalhes verdes fixada na parede',
    objectPosition: 'center',
  },
  {
    id: 'folha-coracao-verde-branca',
    title: 'Folha coração verde e branca',
    category: 'Afetos',
    description:
      'Folha em formato de coração com composição em verde profundo, branco e pequenos pontos claros.',
    image: '/images/galeria/afetos/folha-coracao-verde-branca-01.webp',
    alt: 'Folha em formato de coração verde e branca',
    objectPosition: 'center',
  },
  {
    id: 'folha-coracao-rosa',
    title: 'Folha coração rosa',
    category: 'Afetos',
    description:
      'Peça em formato de coração com centro rosa, bordas verdes e nervuras vermelhas.',
    image: '/images/galeria/afetos/folha-coracao-rosa-01.webp',
    images: [
      '/images/galeria/afetos/folha-coracao-rosa-01.webp',
      '/images/galeria/afetos/folha-coracao-rosa-02.webp',
    ],
    alt: 'Folha artesanal em formato de coração rosa e verde',
    objectPosition: 'center',
  },
  {
    id: 'folha-coracao-pintas-rosa',
    title: 'Folha coração com pintas rosas',
    category: 'Afetos',
    description:
      'Folha em formato de coração com fundo verde escuro e manchas rosas em contraste.',
    image: '/images/galeria/afetos/folha-coracao-pintas-rosa-01.webp',
    alt: 'Folha artesanal em formato de coração escura com pintas rosas',
    objectPosition: 'center',
  },
  {
  id: 'colecao-botanica-parede',
  title: 'Coleção botânica na parede',
  category: 'Folhas',
  description:
    'Composição de parede formada por diferentes folhas artesanais, com formatos, cores e pinturas inspiradas na diversidade botânica.',
  image: '/images/galeria/folhas/colecao-botanica-parede-01.webp',
  alt: 'Composição de parede com várias folhas artesanais coloridas e uma pequena peça com frase',
  objectPosition: 'center',
  },
]