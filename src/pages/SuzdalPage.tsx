import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { suzdalEats, suzdalRoute, suzdalSights } from '../data/suzdal'
import { useReveal } from '../hooks/useReveal'

const HERO_IMAGE = '/hero-suzdal.jpg'

export function SuzdalPage() {
  useReveal()

  return (
    <main>
      <section className="relative isolate min-h-[78vh] overflow-hidden text-white">
        <img
          src={HERO_IMAGE}
          alt="Суздаль: купола и исторический центр"
          className="animate-drift absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/60 to-pine/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(122,158,171,0.25),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-honey-soft">
            Золотое кольцо · день из Красного Огорока
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-3xl font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            Суздаль
          </h1>
          <p className="animate-rise-late mt-5 max-w-xl text-base leading-relaxed text-mist/95 sm:text-lg">
            Сводка мест, которые стоит посетить с ребёнком 3 лет, и ресторанов с высокими рейтингами —
            без перегруза маршрута.
          </p>
          <div className="animate-rise-late mt-8 flex flex-wrap gap-3">
            <a
              href="#sights"
              className="inline-flex items-center bg-honey px-5 py-3 text-sm font-semibold text-pine-deep transition hover:bg-honey-soft"
            >
              Что посмотреть
            </a>
            <a
              href="#eats"
              className="inline-flex items-center border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Где поесть
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="reveal flex flex-col gap-4 border-l-4 border-honey pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            Из Красного Огорока до Суздаля примерно 2,5–3 часа на машине. Выезжайте пораньше, заложите
            тихий час в дороге или в кафе и не планируйте больше трёх «взрослых» точек за день.
          </p>
          <Link to="/" className="shrink-0 text-sm font-semibold text-moss underline-offset-4 hover:underline">
            ← Вернуться к базе
          </Link>
        </div>
      </section>

      <section id="sights" className="bg-pine-deep py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            light
            eyebrow="Достопримечательности"
            title="Куда идти с трёхлеткой"
            lead="Приоритет — открытые пространства и короткие впечатления. Закрытые экспозиции оставляйте на запас."
          />

          <div className="mt-12 space-y-0">
            {suzdalSights.map((sight) => (
              <article
                key={sight.name}
                className="reveal grid gap-5 border-t border-white/10 py-9 md:grid-cols-[1.2fr_1.5fr]"
              >
                <div>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">{sight.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <p>
                      <span className="text-honey-soft/80">Возраст · </span>
                      <span className="text-mist">{sight.ages}</span>
                    </p>
                    <p>
                      <span className="text-honey-soft/80">Время · </span>
                      <span className="text-mist">{sight.time}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-mist/95">{sight.why}</p>
                  <p className="mt-3 border-l-2 border-honey/60 pl-4 text-sm leading-relaxed text-sage">
                    {sight.tip}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Маршрут на один день"
          title="Четыре шага без гонки"
          lead="Так город читается целиком, а ребёнок не выгорает к обеду."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {suzdalRoute.map((item) => (
            <li key={item.step} className="reveal">
              <p className="font-display text-4xl text-honey">{item.step}</p>
              <h3 className="mt-3 font-display text-xl text-pine-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="eats" className="border-y border-pine/10 bg-gradient-to-b from-mist/60 to-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Гастрономия"
            title="Где вкусно поесть в Суздале"
            lead="Подборка мест с высокими оценками и узнаваемыми рекомендациями гидов. Для семьи с малышом особенно удобны «Огурец», «Дом русского чаепития», «Улей» и «Агроном»."
          />

          <div className="mt-12 space-y-0">
            {suzdalEats.map((place) => (
              <article
                key={place.name}
                className="reveal grid gap-4 border-b border-pine/10 py-8 md:grid-cols-[1fr_1.2fr_0.8fr]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-2xl text-pine-deep">{place.name}</h3>
                    {place.kids ? (
                      <span className="rounded-sm bg-white/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-moss">
                        комфортно с детьми
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-honey">{place.rating}</p>
                  <p className="mt-2 text-sm text-muted">{place.address}</p>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-ink/90">{place.vibe}</p>
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-semibold text-pine">Заказать: </span>
                    {place.order}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-moss">Средний чек</p>
                  <p className="mt-1 font-display text-xl text-pine-deep">{place.check}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal max-w-2xl">
          <h2 className="font-display text-3xl text-pine-deep sm:text-4xl">Короткий чек-лист на день</h2>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted">
            <li>— Запасные носки и перекус в машину: между точками малыш устаёт быстрее взрослых.</li>
            <li>— Коляска пригодится на валах и длинных переходах между кремлём и рядами.</li>
            <li>— Бронируйте популярные рестораны заранее в сезон — особенно «Огурец» и «Агроном».</li>
            <li>— Если день выдался тяжёлым, оставьте монастыри «на следующий раз» без чувства вины.</li>
          </ul>
          <Link
            to="/"
            className="mt-8 inline-flex bg-pine px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine-deep"
          >
            Назад к Красному Огороку
          </Link>
        </div>
      </section>
    </main>
  )
}
