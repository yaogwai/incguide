export const PAGES = [
  ['引言', '/intro'],
  ['注册美国公司', '/incorporation'],
  ['收款', '/stripe'],
  ['税务', '/taxes']
]

export function getPageIndex(pathname: string): number {
  return PAGES.findIndex(([_title, path]) => path === pathname);
}

export function isLastPage(pathname: string): boolean {
  const pageIndex = getPageIndex(pathname);
  return pageIndex === PAGES.length - 1;
}

export function getNextPage(pathname: string) {
  const pageIndex = getPageIndex(pathname);
  if (pageIndex === PAGES.length - 1) return null;
  return PAGES[pageIndex + 1];
}

export function getPrevPage(pathname: string) {
  const pageIndex = getPageIndex(pathname);
  if (pageIndex === 0) return null;
  return PAGES[pageIndex - 1];
}
