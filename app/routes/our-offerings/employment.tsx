import React from 'react'
import type { Route } from './+types/employment'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Employment" },
    { name: "description", content: "Welcome to Alegra Visuals Employment" },
  ];
}

function employment() {
  return (
    <div>employment</div>
  )
}

export default employment