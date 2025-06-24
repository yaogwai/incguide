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
  return <div className="bg-white min-h-screen">
    <Hero />
    <Copy /></div>
}

function Hero() {
  return <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
    <h1 className="font-normal text-5xl  text-center">跨境指南</h1>
    <Link to='/intro'><Button>开始阅读</Button></Link>
  </div>
}

function Copy() {
  return <div>
    <p>Why cross border sales: domestic rat race, higher price perception, etc</p>
    <p>Difficulties establishing </p>
    <p>What this guide solves. Comprehensive guide from 0 to sold </p>
    <p>Make the message aspirational, trasformational, sprinkle in urgency and scarcity.
      Address reader directly. Dont introduce the guide, introduce a fantasy framing the book as a vechicle
      for achieving that.
      Selling belonging by relating guide to a group - successful cross border founders
      Corroberate by fake social proof
    </p>
  </div>
}

function Button({ children }: { children: React.ReactNode }) {
  return <button className="relative cursor-pointer rounded-sm group">
    <span className="absolute inset-0 bg-stone-500 rounded-sm group-hover:blur-xs transition-transform" />
    <span className="absolute inset-0 bg-pink-900 rounded-sm" />
    <span className="inline-flex items-center rounded-sm text-2xl text-stone-50 bg-pink-700 gap-x-2 px-8 py-4 leading-none -translate-y-1 active:-translate-y-0.5 group-hover:-translate-y-1.5 transition-all group-hover:brightness-110 ">
      {children} <ArrowRight />
    </span>
  </button>
}
