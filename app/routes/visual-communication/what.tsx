import React from 'react'
import type { Route } from './+types/what'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - what" },
    { name: "description", content: "Welcome to Alegra Visuals what" },
  ];
}

function what() {
  return (
    <div>what</div>
  )
}

export default what