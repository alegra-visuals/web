import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology" },
    { name: "description", content: "Welcome to Alegra Visuals Technology!" },
  ];
}

export default function Home() {
  return <>
  
      <div>Home</div>
  </>;
}
