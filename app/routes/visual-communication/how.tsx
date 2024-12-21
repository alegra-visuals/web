import React from 'react'
import type { Route } from './+types/how'
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - How" },
    { name: "description", content: "Welcome to Alegra Visuals how" },
  ];
}
function how() {
  return (
    <div>how</div>
  )
}

export default how