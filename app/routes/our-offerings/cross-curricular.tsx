import React from 'react'
import type { Route } from './+types/cross-curricular'

export function meta({}:Route.MetaArgs){
  return [
    { title: "Alegra Visuals Technology - Cross Curricular" },
    { name: "description", content: "Welcome to Alegra Visuals cross curricular" },
  ]
}

function crossCurricular() {
  return (
    <div>cross-curricular</div>
  )
}

export default crossCurricular