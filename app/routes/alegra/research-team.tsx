import React from 'react'
import type { Route } from './+types/research-team'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Research Team" },
    { name: "description", content: "Welcome to Alegra Visuals research team" },
  ];
}

function researchTeam() {
  return (
    <div>research-team</div>
  )
}

export default researchTeam