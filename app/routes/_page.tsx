import { Outlet, useMatches } from "react-router";
import { PageNav } from "~/cmpts/nav";
import { Sidebar } from "~/cmpts/sidebar";
import { PAGES } from "~/utils"

export default function () {
  let matches = useMatches()
  let path = matches[matches.length - 1].pathname
  let [title] = PAGES.find(([t, p]) => p == path)

  return <main className="relative grid grid-cols-[1fr_minmax(0px,72ch)_1fr] gap-8 m-8">
    <div />
    <div>
      <h1 className="text-5xl leading-[1.2]">{title}</h1>
    </div>
    <div />
    <Sidebar />
    <article className="prose prose-stone lg:prose-lg">
      <Outlet />
    </article>
    <div />
    <div />
    <PageNav />
    <div />
  </main>
}
