import type { Route } from "./+types/_index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "跨境指南" },
    { name: "description", content: "免费跨境教程、指导" },
  ];
}

export default function Landing() {
  return <Hero />
}

function Hero() {
  return <div className="flex flex-col gap-8 max-w-6xl mx-auto">
    <h1 className="font-normal text-5xl  text-center">跨境指南</h1>
    <p>Why cross border sells: domestic rat race, higher price perception, etc</p>
    <p>Difficulties establishing </p>
    <p>What this guide solves. Comprehensive guide from us incorporation to </p>
  </div>
}
