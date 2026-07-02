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
    id: 'colecao-botanica',
    title: 'Coleção botânica',
    category: 'Folhas',
    description:
      'Conjunto de folhas artesanais inspirado em diferentes espécies, formatos, nervuras e combinações de cores.',
    image: '/images/galeria/folhas/colecao-botanica.jpeg',
    images: [
      '/images/galeria/folhas/colecao-botanica.jpeg',
      '/images/galeria/folhas/colecao-botanica-detalhe.jpeg',
    ],
    alt: 'Coleção de folhas artesanais em diferentes formatos e cores',
    objectPosition: 'center',
  },
  {
    id: 'monstera-dois-tons',
    title: 'Monstera em dois tons',
    category: 'Folhas',
    description:
      'Peça inspirada na folha da monstera, com recortes característicos e pintura em diferentes tonalidades de verde.',
    image: '/images/galeria/folhas/monstera-dois-tons.jpeg',
    alt: 'Folha artesanal de monstera pintada em dois tons de verde',
    objectPosition: 'center',
  },
  {
    id: 'folha-geometrica',
    title: 'Folha Ficus',
    category: 'Folhas',
    description:
      'Folha alongada com pintura abstrata composta por verde profundo, verde médio, amarelo e uma nervura central escura.',
    image: '/images/galeria/folhas/folha-geometrica.jpeg',
    alt: 'Folha artesanal com pintura geométrica verde, amarela e preta',
    objectPosition: 'center',
  },
  {
    id: 'folha-coracao',
    title: 'Folha Pink Princess - Philodendron ',
    category: 'Folhas',
    description:
      'Folha em formato de coração com composição livre em verde profundo, verde oliva e rosa.',
    image: '/images/galeria/folhas/folha-coracao-rosa-verde-01.jpeg',
    images: [
      '/images/galeria/folhas/folha-coracao-rosa-verde-01.jpeg',
      '/images/galeria/folhas/folha-coracao-rosa-verde-02.jpeg',
      '/images/galeria/folhas/folha-coracao-rosa-verde-03.jpeg',
    ],
    alt: 'Folha artesanal em formato de coração pintada de verde e rosa',
    objectPosition: 'center',
  },
  {
    id: 'liberdade-para-voltar',
    title: 'Liberdade para voltar',
    category: 'Frases',
    description:
      'Prato decorativo azul com um pequeno barco vermelho e a frase “Liberdade é ter pra onde voltar”.',
    image: '/images/galeria/frases/liberdade-para-voltar.jpeg',
    alt: 'Prato azul com um barco vermelho e uma frase gravada ao redor',
    objectPosition: 'center',
  },
  {
    id: 'no-tempo-certo',
    title: 'No tempo certo',
    category: 'Frases',
    description:
      'Uma peça em vermelho bordô com a frase “A gente nunca está atrasado pro que é nosso”.',
    image: '/images/galeria/frases/no-tempo-certo.jpeg',
    alt: 'Peça circular vermelha com uma frase gravada',
    objectPosition: 'center',
  },
  {
    id: 'o-melhor-lugar',
    title: 'O melhor lugar',
    category: 'Frases',
    description:
      'Uma lembrança de que o melhor lugar do mundo pode estar exatamente onde estamos.',
    image: '/images/galeria/frases/o-melhor-lugar.jpeg',
    alt: 'Peça circular azul com a frase O melhor lugar do mundo é aqui',
    objectPosition: 'center',
  },
  {
    id: 'tudo-aqui-foi-um-sonho',
    title: 'Tudo aqui já foi um sonho',
    category: 'Frases',
    description:
      'Uma paisagem colorida com uma pequena casa em relevo, celebrando sonhos que ganharam forma.',
    image: '/images/galeria/frases/tudo-aqui-foi-um-sonho-02.jpeg',
    images: [
      '/images/galeria/frases/tudo-aqui-foi-um-sonho-02.jpeg',
      '/images/galeria/frases/tudo-aqui-foi-um-sonho-01.jpeg',
      '/images/galeria/frases/tudo-aqui-foi-um-sonho-ambientada.jpeg',
    ],
    alt: 'Peça circular colorida com uma casa e a frase Tudo aqui já foi um sonho',
    objectPosition: 'center',
  },
  {
    id: 'marca-de-carinho',
    title: 'Marca de Gamora',
    category: 'Afetos',
    description:
      'Uma pequena memória moldada em cerâmica fria, preservando a impressão de uma pata.',
    image: '/images/galeria/afetos/marca-de-carinho.jpeg',
    alt: 'Peça circular verde com a impressão de uma pata',
    objectPosition: 'center',
  },
  {
    id: 'travessia',
    title: 'Travessia',
    category: 'Utilitários',
    description:
      'Pratinho de bordas orgânicas com acabamento pontilhado, palavra gravada e uma seta indicando movimento.',
    image: '/images/galeria/utilitarios/travessia.jpeg',
    alt: 'Pratinho artesanal claro com a palavra Travessia e uma seta',
    objectPosition: 'center',
  },
  {
    id: 'rosto-essencial',
    title: 'Rosto essencial',
    category: 'Decorativas',
    description:
      'Um rosto construído com linhas simples e volumes em relevo sobre uma base em tom de terracota.',
    image: '/images/galeria/decorativas/rosto-essencial.jpeg',
    alt: 'Peça decorativa em terracota com desenho abstrato de um rosto',
    objectPosition: 'center',
  },
]