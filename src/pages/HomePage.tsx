import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { dayPlan, ogorokActivities, ogorokRestaurants } from '../data/ogorok'
import { useReveal } from '../hooks/useReveal'

const HERO_IMAGE = '/hero-forest.jpg'

export function HomePage() {
  useReveal()

  return (
    <main>
      <section className="relative isolate min-h-[88vh] overflow-hidden text-white">
        <img
          src={HERO_IMAGE}
          alt="Хвойный лес вокруг деревни Красный Огорок"
          className="animate-drift absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/55 to-pine/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,163,90,0.22),transparent_45%)]" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-honey-soft">
            Владимирская область · Киржачский район
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-3xl font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            Красный Огорок
          </h1>
          <p className="animate-rise-late mt-5 max-w-xl text-base leading-relaxed text-mist/95 sm:text-lg">
            Тихий лесной отпуск с ребёнком 3 лет: где поесть рядом с базой, чем занять малыша
            без гонки и как спланировать день.
          </p>
          <div className="animate-rise-late mt-8 flex flex-wrap gap-3">
            <a
              href="#activities"
              className="inline-flex items-center bg-honey px-5 py-3 text-sm font-semibold text-pine-deep transition hover:bg-honey-soft"
            >
              Активности с малышом
            </a>
            <a
              href="#food"
              className="inline-flex items-center border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Где поесть
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Ориентир"
          title="Деревня у хвойного леса"
          lead="Красный Огорок — точка спокойного загородного отдыха в Киржачском районе. Рядом базы Busel Park Hotel и Les Holidays, а до Киржача около 20 минут — за семейным кафе и парком."
        />
        <div className="reveal mt-10 grid gap-8 border-t border-pine/10 pt-10 sm:grid-cols-3">
          {[
            {
              label: 'Ритм',
              value: 'Лес, бассейн, мангал',
              note: 'Без перегруза аттракционами — подходит трёхлетке.',
            },
            {
              label: 'Еда рядом',
              value: 'Ресторан на базе + Киржач',
              note: 'Высокие оценки у «Бусела», семейные кафе в городе.',
            },
            {
              label: 'День наружу',
              value: 'Суздаль ~2,5–3 ч',
              note: 'Отдельная страница с маршрутом и ресторанами.',
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">{item.label}</p>
              <p className="mt-2 font-display text-2xl text-pine-deep">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="bg-pine-deep py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            light
            eyebrow="С ребёнком 3 лет"
            title="Активности, которые реально вписываются"
            lead="Короткие слоты, много воздуха и минимум очередей. Всё ниже рассчитано на темп малыша, а не на чек-лист взрослых."
          />

          <div className="mt-12 space-y-0">
            {ogorokActivities.map((activity, index) => (
              <article
                key={activity.title}
                className="reveal grid gap-4 border-t border-white/10 py-8 sm:grid-cols-[7rem_1fr_8rem] sm:gap-8"
              >
                <p className="font-display text-3xl text-honey/90">{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <h3 className="font-display text-2xl text-white">{activity.title}</h3>
                  <p className="mt-1 text-sm text-sage">{activity.where}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist/90 sm:text-base">
                    {activity.description}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-honey-soft/80">Возраст</p>
                  <p className="mt-1 text-sm font-medium text-white">{activity.ages}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-honey-soft/80">Время</p>
                  <p className="mt-1 text-sm font-medium text-white">{activity.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="food" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Высокий рейтинг и семейный формат"
          title="Где поесть вокруг Красного Огорока"
          lead="В самой деревне основной якорь — ресторан базы «Бусел». Для разнообразия и детского меню удобно съездить в Киржач или остановиться на трассе."
        />

        <div className="mt-12 space-y-8">
          {ogorokRestaurants.map((place) => (
            <article
              key={place.name}
              className="reveal grid gap-4 border-b border-pine/10 pb-8 sm:grid-cols-[1.1fr_1.4fr] sm:gap-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-2xl text-pine-deep">{place.name}</h3>
                  {place.kids ? (
                    <span className="rounded-sm bg-mist px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-moss">
                      с детьми
                    </span>
                  ) : null}
                </div>
                {place.rating ? <p className="mt-2 text-sm font-semibold text-honey">{place.rating}</p> : null}
                <p className="mt-3 text-sm text-muted">
                  <span className="font-semibold text-pine">{place.distance}</span>
                  <span className="mx-2 text-sage">·</span>
                  {place.address}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-ink/90">{place.why}</p>
                {place.tip ? (
                  <p className="mt-3 border-l-2 border-honey/70 pl-4 text-sm leading-relaxed text-muted">
                    {place.tip}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-pine/10 bg-gradient-to-br from-mist/80 via-paper to-sky/10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Пример дня на базе"
            title="Три спокойных блока"
            lead="Не пытайтесь успеть всё. С трёхлеткой работает формула: одно «событие» до обеда и одно после."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {dayPlan.map((block) => (
              <div key={block.time} className="reveal">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-river">{block.time}</p>
                <h3 className="mt-3 font-display text-2xl text-pine-deep">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal relative overflow-hidden bg-pine px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-honey/20 blur-2xl" />
          <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sky/30 blur-2xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-honey-soft">Отдельный день</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Суздаль стоит отдельной страницы</h2>
            <p className="mt-4 text-base leading-relaxed text-mist/90">
              Кремль, музей деревянного зодчества и рестораны с рейтингом 4.8–5.0 — всё собрано в короткой
              сводке: что смотреть с малышом и где вкусно поесть.
            </p>
            <Link
              to="/suzdal"
              className="mt-8 inline-flex bg-honey px-5 py-3 text-sm font-semibold text-pine-deep transition hover:bg-honey-soft"
            >
              Открыть гид по Суздалю
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
