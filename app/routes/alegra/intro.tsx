import React from 'react'
import type { Route } from './+types/intro'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology- Intro" },
    { name: "description", content: "Welcome to Alegra Visuals intro" },
  ];
}

function intro() {
  return (
    <div>intro</div>
  )
}

export default intro