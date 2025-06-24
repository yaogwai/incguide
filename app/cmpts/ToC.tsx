import { NavLink } from "react-router"
import { PAGES } from "~/utils"

export default function ToC() {
  return <nav className="min-w-[min(100%,_188px)]">
    <ul className="toc flex flex-col gap-0 divide-stone-200 divide-y border-stone-200 bg-white rounded-sm shadow-stone-200 shadow-sm">
      {PAGES.map(([title, path]) => (
        <NavLink to={path} key={path}>
          <li className="py-2 px-4 font-semibold lg:text-lg in-[.active]:text-pink-700">
            {title}
          </li></NavLink>
      ))}
    </ul>
  </nav>
}
