import React from "react";
import NavButton from "../components/buttons/NavButton";
import KindSelect from "../components/travellersKind/kindSelect"

export default function TravellersKind() {
  return (
    <main className="main-selection-layout">
      <h2 className="title">Who is travelling?</h2>
      <KindSelect />
      <footer>
        <NavButton link="/destination" label="Destination" direction="back"/>
        <NavButton link="/envision" label="Envision" />
      </footer>
    </main>
  )
}