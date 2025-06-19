import { Link } from "react-router"

const PAGES = [
  ['Intro', '/intro'],
  ['Stripe', '/stripe']
]

export default function ToC() {
  return <nav>
    <ul className="">
      {PAGES.map(([title, path]) => (
        <li className="my-4">
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
}
