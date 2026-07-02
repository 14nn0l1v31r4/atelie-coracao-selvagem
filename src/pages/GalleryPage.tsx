import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Leaf,
  X,
} from 'lucide-react'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Link } from 'react-router-dom'

import { InstagramIcon } from '../components/InstagramIcon'
import { instagramUrl } from '../data/content'
import {
  galleryCategories,
  galleryItems,
  type GalleryFilter,
} from '../data/gallery'

export function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>('Todas')

  const [selectedId, setSelectedId] =
    useState<string | null>(null)

  const [
    selectedImageIndex,
    setSelectedImageIndex,
  ] = useState(0)

  const visibleItems = useMemo(() => {
    if (activeCategory === 'Todas') {
      return galleryItems
    }

    return galleryItems.filter(
      (item) =>
        item.category === activeCategory,
    )
  }, [activeCategory])

  const selectedIndex =
    visibleItems.findIndex(
      (item) => item.id === selectedId,
    )

  const selectedItem =
    selectedIndex >= 0
      ? visibleItems[selectedIndex]
      : null

  const selectedImages = useMemo(() => {
    if (!selectedItem) {
      return []
    }

    if (
      selectedItem.images &&
      selectedItem.images.length > 0
    ) {
      return selectedItem.images
    }

    return [selectedItem.image]
  }, [selectedItem])

  const selectedImage =
    selectedImages[selectedImageIndex] ??
    selectedItem?.image

  const closeModal = useCallback(() => {
    setSelectedId(null)
    setSelectedImageIndex(0)
  }, [])

  const openItem = useCallback(
    (itemId: string) => {
      setSelectedId(itemId)
      setSelectedImageIndex(0)
    },
    [],
  )

  const showPrevious = useCallback(() => {
    if (visibleItems.length === 0) {
      return
    }

    const currentIndex =
      selectedIndex >= 0
        ? selectedIndex
        : 0

    const previousIndex =
      currentIndex <= 0
        ? visibleItems.length - 1
        : currentIndex - 1

    setSelectedId(
      visibleItems[previousIndex].id,
    )

    setSelectedImageIndex(0)
  }, [selectedIndex, visibleItems])

  const showNext = useCallback(() => {
    if (visibleItems.length === 0) {
      return
    }

    const currentIndex =
      selectedIndex >= 0
        ? selectedIndex
        : 0

    const nextIndex =
      currentIndex >=
      visibleItems.length - 1
        ? 0
        : currentIndex + 1

    setSelectedId(
      visibleItems[nextIndex].id,
    )

    setSelectedImageIndex(0)
  }, [selectedIndex, visibleItems])

  const showPreviousImage =
    useCallback(() => {
      if (selectedImages.length <= 1) {
        return
      }

      setSelectedImageIndex(
        (currentIndex) =>
          currentIndex <= 0
            ? selectedImages.length - 1
            : currentIndex - 1,
      )
    }, [selectedImages.length])

  const showNextImage = useCallback(() => {
    if (selectedImages.length <= 1) {
      return
    }

    setSelectedImageIndex(
      (currentIndex) =>
        currentIndex >=
        selectedImages.length - 1
          ? 0
          : currentIndex + 1,
    )
  }, [selectedImages.length])

  useEffect(() => {
    if (!selectedItem) {
      return
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        closeModal()
      }

      if (
        event.key === 'ArrowLeft' &&
        !event.shiftKey
      ) {
        showPrevious()
      }

      if (
        event.key === 'ArrowRight' &&
        !event.shiftKey
      ) {
        showNext()
      }

      if (
        event.key === 'ArrowLeft' &&
        event.shiftKey
      ) {
        showPreviousImage()
      }

      if (
        event.key === 'ArrowRight' &&
        event.shiftKey
      ) {
        showNextImage()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [
    closeModal,
    selectedItem,
    showNext,
    showNextImage,
    showPrevious,
    showPreviousImage,
  ])

  const changeCategory = (
    category: GalleryFilter,
  ) => {
    setActiveCategory(category)
    setSelectedId(null)
    setSelectedImageIndex(0)
  }

  return (
    <main
      className="min-h-screen overflow-hidden pt-24 sm:pt-28"
      style={{
        color:
          'var(--botanical-text, #f4efe5)',

        background:
          'radial-gradient(circle at 85% 5%, color-mix(in srgb, var(--accent, #690624) 12%, transparent), transparent 28%), var(--botanical-bg, #052f29)',
      }}
    >
      {/* Apresentação da galeria */}

      <section className="border-b border-current/10">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium opacity-65 transition hover:gap-3 hover:opacity-100"
          >
            <ArrowLeft
              size={17}
              aria-hidden="true"
            />

            Voltar para o início
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,1.15fr)] lg:items-end">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent,#690624)]">
                <Leaf
                  size={16}
                  aria-hidden="true"
                />

                Acervo artesanal
              </p>

              <h1 className="font-display mt-5 max-w-[12ch] text-[clamp(3rem,7vw,6.4rem)] leading-[0.9] tracking-[-0.055em]">
                Uma galeria de

                <span className="block italic text-[var(--accent,#690624)]">
                  formas e afetos
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 opacity-75 sm:text-lg">
                Folhas, pequenos objetos e
                registros do processo criativo
                reunidos em uma exposição
                digital do Ateliê Coração
                Selvagem.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm opacity-60">
                <Images
                  size={18}
                  aria-hidden="true"
                />

                {galleryItems.length}{' '}
                criações disponíveis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros e peças */}

      <section>
        <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="flex flex-col gap-6 border-b border-current/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent,#690624)]">
                Galeria
              </p>

              <h2 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
                Explore as criações
              </h2>

              <p className="mt-2 text-sm opacity-60">
                {visibleItems.length}{' '}

                {visibleItems.length === 1
                  ? 'peça nesta seleção'
                  : 'peças nesta seleção'}
              </p>
            </div>

            <div
              className="flex max-w-full gap-2 overflow-x-auto pb-2"
              role="group"
              aria-label="Filtrar peças da galeria"
            >
              {galleryCategories.map(
                (category) => {
                  const active =
                    activeCategory ===
                    category

                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        changeCategory(
                          category,
                        )
                      }
                      className={[
                        'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition',

                        active
                          ? 'border-[var(--accent,#690624)] bg-[var(--accent,#690624)] text-white shadow-lg'
                          : 'border-current/20 bg-current/[0.035] opacity-70 hover:border-current/40 hover:opacity-100',
                      ].join(' ')}
                    >
                      {category}
                    </button>
                  )
                },
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[310px] lg:grid-cols-3 xl:auto-rows-[340px] xl:grid-cols-4">
            {visibleItems.map(
              (item, index) => {
                const featured =
                  index === 0

                return (
                  <article
                    key={item.id}
                    className={[
                      'group relative min-h-[420px] break-inside-avoid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b3a32] shadow-[0_24px_70px_rgba(0,0,0,0.18)]',

                      featured
                        ? 'sm:col-span-2 lg:row-span-2 lg:min-h-0'
                        : 'lg:min-h-0',
                    ].join(' ')}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        openItem(item.id)
                      }
                      className="relative block h-full w-full overflow-hidden text-left"
                      aria-label={`Ampliar ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading={
                          index < 4
                            ? 'eager'
                            : 'lazy'
                        }
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055]"
                        style={{
                          objectPosition:
                            item.objectPosition ??
                            'center',
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#021d19]/95 via-[#021d19]/20 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="mb-3 flex justify-end">
                          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/25 text-white opacity-80 backdrop-blur-md transition group-hover:rotate-6 group-hover:opacity-100">
                            <Expand
                              size={16}
                              aria-hidden="true"
                            />
                          </span>
                        </div>

                        <h3
                          className={[
                            'font-display text-white',

                            featured
                              ? 'text-3xl sm:text-4xl'
                              : 'text-2xl',
                          ].join(' ')}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={[
                            'mt-2 max-w-xl leading-6 text-white/70',

                            featured
                              ? 'text-sm sm:text-base'
                              : 'line-clamp-3 text-sm',
                          ].join(' ')}
                        >
                          {item.description}
                        </p>
                      </div>
                    </button>
                  </article>
                )
              },
            )}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-current/10 bg-current/[0.035] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-3xl sm:text-4xl">
                Novas criações continuam
                surgindo.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 opacity-65">
                Acompanhe no Instagram os
                novos trabalhos, detalhes das
                peças e registros do processo
                criativo.
              </p>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--accent,#690624)] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <InstagramIcon
                size={18}
                aria-hidden="true"
              />

              Acompanhar no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Modal da peça */}

      {selectedItem &&
        selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#001b17]/90 p-3 backdrop-blur-xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização de ${selectedItem.title}`}
          >
            <button
              type="button"
              className="absolute inset-0 cursor-default"
              onClick={closeModal}
              aria-label="Fechar visualização"
            />

            <div className="relative z-10 grid max-h-[94svh] w-full max-w-6xl overflow-y-auto rounded-[1.75rem] border border-white/15 bg-[#f4efe5] text-[#082f29] shadow-[0_40px_120px_rgba(0,0,0,0.55)] lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] lg:overflow-hidden">
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-4 top-4 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#002d27]/75 text-white backdrop-blur-lg transition hover:scale-105"
                aria-label="Fechar visualização"
              >
                <X size={20} />
              </button>

              <div className="relative flex min-h-[320px] items-center justify-center bg-[#021d19]">
                <img
                  src={selectedImage}
                  alt={`${selectedItem.alt}. Foto ${selectedImageIndex + 1} de ${selectedImages.length}`}
                  className={[
                    'max-h-[62svh] w-full object-contain lg:max-h-[94svh]',

                    selectedImages.length >
                    1
                      ? 'pb-20'
                      : '',
                  ].join(' ')}
                />

                {selectedImages.length >
                  1 && (
                  <>
                    <button
                      type="button"
                      onClick={
                        showPreviousImage
                      }
                      className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#001b17]/75 text-white backdrop-blur-md transition hover:scale-105"
                      aria-label="Foto anterior da peça"
                    >
                      <ChevronLeft
                        size={21}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#001b17]/75 text-white backdrop-blur-md transition hover:scale-105"
                      aria-label="Próxima foto da peça"
                    >
                      <ChevronRight
                        size={21}
                      />
                    </button>

                    <div className="absolute bottom-4 left-1/2 z-20 flex max-w-[calc(100%-2rem)] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl bg-[#001b17]/80 p-2 shadow-xl backdrop-blur-xl">
                      {selectedImages.map(
                        (
                          image,
                          imageIndex,
                        ) => {
                          const active =
                            selectedImageIndex ===
                            imageIndex

                          return (
                            <button
                              key={`${image}-${imageIndex}`}
                              type="button"
                              onClick={() =>
                                setSelectedImageIndex(
                                  imageIndex,
                                )
                              }
                              className={[
                                'h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-16 sm:w-16',

                                active
                                  ? 'border-[var(--accent,#690624)] opacity-100'
                                  : 'border-transparent opacity-55 hover:opacity-100',
                              ].join(' ')}
                              aria-label={`Exibir foto ${imageIndex + 1} de ${selectedItem.title}`}
                              aria-pressed={
                                active
                              }
                            >
                              <img
                                src={image}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </button>
                          )
                        },
                      )}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h2 className="font-display text-4xl leading-none">
                  {selectedItem.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#082f29]/70">
                  {selectedItem.description}
                </p>

                {selectedImages.length >
                  1 && (
                  <p className="mt-4 text-xs font-medium text-[#082f29]/45">
                    Foto{' '}
                    {selectedImageIndex + 1}{' '}
                    de{' '}
                    {
                      selectedImages.length
                    }
                  </p>
                )}

                <div className="mt-8 flex items-center justify-between border-t border-[#082f29]/15 pt-5">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#082f29]/20 transition hover:bg-[#082f29] hover:text-white"
                    aria-label="Peça anterior"
                  >
                    <ChevronLeft
                      size={21}
                    />
                  </button>

                  <span className="text-sm font-medium text-[#082f29]/55">
                    {selectedIndex + 1}{' '}
                    de{' '}
                    {visibleItems.length}
                  </span>

                  <button
                    type="button"
                    onClick={showNext}
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#082f29]/20 transition hover:bg-[#082f29] hover:text-white"
                    aria-label="Próxima peça"
                  >
                    <ChevronRight
                      size={21}
                    />
                  </button>
                </div>

                <p className="mt-4 text-center text-[0.68rem] leading-5 text-[#082f29]/40">
                  As setas inferiores alternam
                  entre as peças.
                </p>
              </div>
            </div>
          </div>
        )}
    </main>
  )
}