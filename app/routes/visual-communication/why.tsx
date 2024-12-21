import React from 'react'
import type { Route } from './+types/why'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Why" },
    { name: "description", content: "Welcome to Alegra Visuals why" },
  ];
}

function why() {
  return (
    <div>why</div>
  )
}

export default why