import { Outlet } from "react-router";
import { Sidebar } from "~/cmpts/sidebar";

export default function () {
  return <main className="grid grid-cols-[1fr_minmax(0px,72ch)_1fr] gap-8">
    <Sidebar />
    <article className="prose lg:prose-lg">
      <Outlet />
    </article>
  </main>
}
