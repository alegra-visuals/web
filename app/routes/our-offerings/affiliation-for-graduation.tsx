import React from 'react'
import type { Route } from './+types/affiliation-for-graduation'
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Affiliation for Graduation" },
    { name: "description", content: "Welcome to Alegra Visuals affiliation for graduation" },
  ];
}
function affiliationForGraduation() {
  return (
    <div>affiliation-for-graduation</div>
  )
}

export default affiliationForGraduation