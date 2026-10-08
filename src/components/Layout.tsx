import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'relative text-sm font-semibold tracking-wide transition-colors',
    isActive ? 'text-honey' : 'text-mist/85 hover:text-white',
  ].join(' ')

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-pine-deep/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <NavLink to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              Красный Огорок
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-sage/80 sm:inline">
              семейный гид
            </span>
          </NavLink>
          <nav className="flex items-center gap-5 sm:gap-8">
            <NavLink to="/" end className={linkClass}>
              База
            </NavLink>
            <NavLink to="/suzdal" className={linkClass}>
              Суздаль
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="mt-20 border-t border-pine/15 bg-pine-deep text-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-xl text-white">Отпуск у леса</p>
            <p className="mt-1 max-w-md text-sm text-sage/90">
              Подборка мест вокруг деревни Красный Огорок и однодневный маршрут по Суздалю
              с ребёнком 3 лет. Рейтинги и меню уточняйте перед поездкой — они меняются.
            </p>
          </div>
          <p className="text-xs text-sage/70">Владимирская область · Киржачский район · Суздаль</p>
        </div>
      </footer>
    </div>
  )
}
