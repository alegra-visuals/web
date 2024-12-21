import React from 'react'
import type { Route } from './+types/visualTechnology'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Visual Technology" },
    { name: "description", content: "Welcome to Alegra Visuals Technology" },
  ];
}

function visualTechnology() {
  return (
    <>
    <div>visual-technology</div>
   
    </>
  )
}

export default visualTechnology