import React from 'react'
import type { Route } from './+types/Contact'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alegra Visuals Technology- Contact" },
    { name: "description", content: "Welcome to Alegra Visuals contact" },
  ];
}

function Contact() {
  return (
    <div>Contact</div>
  )
}

export default Contact