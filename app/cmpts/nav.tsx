import { MoveLeft, MoveRight } from "lucide-react"
import { Link, useMatches } from "react-router"
import { getNextPage, getPrevPage } from "~/utils"

function Nav({ page, children }: { page: string[], children: React.ReactNode }) {
  return <Link to={page[1]} className="relative cursor-pointer py-4 px-6 bg-white rounded-md border border-stone-200 hover:border-stone-300 shadow-xs flex justify-start last:flex-row-reverse">
    {children}
  </Link>
}

function PageLink({ page }: { page: string[] }) {
  return <span className="text-2xl leading-none">{page[0]}</span>
}

export function PageNav() {
  const matches = useMatches()
  let { pathname } = matches[matches.length - 1]
  let prevPage = getPrevPage(pathname)
  let nextPage = getNextPage(pathname)

  return <div className="my-8 gap-8 grid grid-cols-2">
    {
      prevPage ? (
        <Nav page={prevPage}>
          <div className="flex gap-4 items-center">
            <MoveLeft />
            <div className="flex flex-col gap-1">
              <span className="text-stone-500">上页</span>
              <PageLink page={prevPage} />
            </div>
          </div>
        </Nav>
      ) : <div />
    }

    {
      nextPage ? (
        <Nav page={nextPage}>
          <div className="flex flex-row-reverse items-center gap-4">
            <MoveRight />
            <div className="flex flex-col items-end gap-1">
              <span className="text-stone-500">下页</span>
              <PageLink page={nextPage} />
            </div>
          </div>
        </Nav>
      ) : <div />
    }

  </div>
}
