import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { ArrowRight } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "跨境学堂" },
    { name: "description", content: "免费跨境教程、指导，一站式跨境解决方案" },
  ];
}

export default function Landing() {
  return <div className="max-w-6xl flex flex-col items-center mx-auto">
    <Hero />
    <Copy /></div>
}

const subHeading = `专为雄心勃勃的跨境创业者打造的终极指南，助您从零到一，快速启动并实现盈利。`

function Hero() {
  return <div className="flex flex-col items-center gap-8 mx-auto my-24 text-center max-w-4xl">
    <h1 className="font-normal text-6xl text-center">开启您的跨境掘金之旅</h1>
    <h3 className="text-xl text-stone-700">{subHeading}</h3>
    <Link to='/intro'>
      <Button>免费阅读</Button>
    </Link>
  </div>
}

function Copy() {
  return <div className="text-center my-24">
    <h2 className="text-4xl font-bold mb-8">为什么选择跨境电商？</h2>
    <div className="flex justify-center gap-12 text-lg">
      <div className="max-w-xs">
        <h3 className="text-2xl font-semibold mb-4">蓝海市场</h3>
        <p>摆脱国内内卷，探索广阔的海外市场，享受更高的利润空间。</p>
      </div>
      <div className="max-w-xs">
        <h3 className="text-2xl font-semibold mb-4">品牌出海</h3>
        <p>建立国际品牌，提升品牌价值，让您的产品走向世界。</p>
      </div>
      <div className="max-w-xs">
        <h3 className="text-2xl font-semibold mb-4">弯道超车</h3>
        <p>抓住全球化机遇，实现业务转型升级，轻松超越竞争对手。</p>
      </div>
    </div>
  </div>
}

function Button({ children }: { children: React.ReactNode }) {
  return <button className="relative cursor-pointer rounded-sm group">
    <span className="absolute inset-0 bg-stone-500 rounded-sm group-hover:blur-xs group-hover:translate-y-1 peer-active:blur-[2px] transition-all" />
    <span className="absolute inset-0 bg-amber-900 rounded-sm" />
    <span className="peer inline-flex items-center rounded-sm text-2xl text-stone-50 bg-amber-700 gap-x-2 px-8 py-4 leading-none -translate-y-1 active:-translate-y-0.5 group-hover:-translate-y-1.5 transition-all group-hover:brightness-110 ease-out ">
      {children} <ArrowRight />
    </span>
  </button>
}
