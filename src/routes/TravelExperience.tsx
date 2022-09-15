import React from "react";
import NavButton from "../components/buttons/NavButton";
import Experienceelect from '../components/tripExperienceSelect/experienceSelect'

export default function TravelType() {
  return (
    <main className="main-selection-layout">
      <h2 className="title">What would you like to experience during your trip?</h2>
      <Experienceelect />
      <footer>
        <NavButton link="/envision" label="Envision" direction="back"/>
        <NavButton link="/budget" label="Budget" />
      </footer>
    </main>
  )
}