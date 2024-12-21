import React from 'react'
import type { Route } from './+types/entrepreneurship'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Entrepreneurship" },
    { name: "description", content: "Welcome to Alegra Visuals entrepreneurship" },
  ];
}

function entrepreneurship() {
  return (
    <div>entrepreneurship</div>
  )
}

export default entrepreneurship