import { Route, Routes } from 'react-router-dom'

import { About } from './components/About'
import { BotanicalGallery } from './components/BotanicalGallery'
import { CreativeProcess } from './components/CreativeProcess'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OtherCreations } from './components/OtherCreations'
import { useTheme } from './hooks/useTheme'
import { GalleryPage } from './pages/GalleryPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <BotanicalGallery />
      <OtherCreations />
      <CreativeProcess />
      <About />
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <div className="text-center">
        <p className="eyebrow justify-center">
          Página não encontrada
        </p>

        <h1 className="font-display mt-4 text-4xl">
          Esta página não existe.
        </h1>

        <a
          href="/"
          className="button button--primary mt-8"
        >
          Voltar ao início
        </a>
      </div>
    </main>
  )
}

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/galeria"
          element={<GalleryPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App