import React from "react";
import NavButton from "../components/buttons/NavButton";
import EnvisionSelect from '../components/tripEnvisionSelect/envisionSelect'

export default function UserPreferences() {
  return (
    <main className="main-selection-layout">
      <h2 className="title">What do you envision for your trip?</h2>
      <EnvisionSelect />
      <footer>
        <NavButton link="/destination" label="Destination" direction="back"/>
        <NavButton link="/" label="Home" />
      </footer>
    </main>

  )
}