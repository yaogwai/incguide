import { Outlet, useMatches } from "react-router";
import { PageNav } from "~/cmpts/nav";
import { Sidebar } from "~/cmpts/sidebar";
import { PAGES } from "~/utils"
import 'remark-github-blockquote-alert/alert.css'

export default function () {
  let matches = useMatches()
  let path = matches[matches.length - 1].pathname
  let [title] = PAGES.find(([t, p]) => p == path)

  return <div className="bg-stone-100 min-h-screen">
    <main className="relative grid grid-cols-[1fr_minmax(0px,72ch)_1fr] gap-12 p-8">
      <div />
      <div>
        <h1 className="text-5xl leading-[1.2]">{title}</h1>
      </div>
      <div />
      <Sidebar />
      <article className="prose prose-stone prose-headings:font-normal prose-table:bg-white lg:prose-lg">
        <Outlet />
      </article>
      <div />
      <div />
      <PageNav />
      <div />
    </main>
  </div>
}
