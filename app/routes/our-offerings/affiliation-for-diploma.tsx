import React from 'react'
import type { Route } from './+types/affiliation-for-diploma'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Affiliation for Diploma" },
    { name: "description", content: "Welcome to Alegra Visuals affiliation for diploma" },
  ];
}

function affiliationForDiploma() {
  return (
    <div>affiliation-for-diploma</div>
  )
}

export default affiliationForDiploma