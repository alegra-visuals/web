
import type { Route } from "./+types/certification";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Certification" },
    { name: "description", content: "Welcome to Alegra Visuals certification" },
  ];
}
function certification() {
  return (
    <div>certification</div>
  )
}

export default certification