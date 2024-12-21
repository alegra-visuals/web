import React from 'react'
import type { Route } from './+types/ourOfferings'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Our Offerings" },
    { name: "description", content: "Welcome to Alegra Visuals our offerings" },
  ];
}

function ourOfferings() {
  return (
    <div>ourOfferings</div>
  )
}

export default ourOfferings