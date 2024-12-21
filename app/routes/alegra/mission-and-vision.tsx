import React from 'react'
import type { Route } from './+types/mission-and-vision'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology - Mission & Vision" },
    { name: "description", content: "Welcome to Alegra Visuals mission and vision" },
  ];
}

function missionAndVision() {
  return (
    <div>mission-and-vision</div>
  )
}

export default missionAndVision