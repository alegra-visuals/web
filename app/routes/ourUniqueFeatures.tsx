import React from 'react'
import type { Route } from './+types/ourUniqueFeatures'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Our Unique Features" },
    { name: "description", content: "Welcome to Alegra Visuals our unique features" },
  ];
}

function ourUniqueFeatures() {
  return (
    <div>ourUniqueFeatures</div>
  )
}

export default ourUniqueFeatures