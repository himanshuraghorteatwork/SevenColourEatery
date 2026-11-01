import { MenuExplorer } from '../components/MenuExplorer'
import { SectionHeading } from '../components/SectionHeading'

export function MenuPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Digital menu"
          title="Search the colours of the table"
          copy="Categories follow the brief. Dish names are taken from public restaurant coverage. Prices are placeholders — edit them in Kitchen notes or confirm with the team before publishing as live tariffs."
        />
        <div className="mt-14">
          <MenuExplorer />
        </div>
      </section>
    </div>
  )
}
