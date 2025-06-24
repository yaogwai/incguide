import ToC from "./ToC";

export function Sidebar() {
  return <aside className="flex justify-end sticky top-0 self-start">
    <ToC />
  </aside>
}
