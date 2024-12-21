import React from 'react'
import type { Route } from './+types/internship'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Internship" },
    { name: "description", content: "Welcome to Alegra Visuals internship" },
  ];
}


function internship() {
  return (
    <div>internship</div>
  )
}

export default internship