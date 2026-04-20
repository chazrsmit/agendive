import { useState } from 'react'
import TopBar from './components/TopBar'
import SecondBar from './components/SecondBar'
import './App.css'
import Rectangle from './components/Rectangle'
import Date from './components/Date'

function App() {


  return (
    <>
    {/* <TopBar />
    <SecondBar /> */}
    {/* ici, les infos our chaque event sont hardcoded. elles viendront d'une database via mysql dans la version finale. */}
    <Date date={"16 avril 2026"} />
    <Rectangle titre={"Bozar Bassment #7: Crystallmess (live) - Akano Toto (live)"} lieu={"Bozar"} type={"concert"} type2={"musique"} couleur={"vert"} />
    <Rectangle titre={"Forward presents: Buda BXL"} lieu={"Buda BXL"} type={"clubbing"} type2={"musique"} couleur={"blue"} />
    <Rectangle titre={"Fuse presents: For Your Entertainment tour with VTSS (A/V)"} lieu={"Fuse"} type={"clubbing"} type2={"musique"} couleur={"purple"} />
    <Date date={"17 avril 2026"} />
    <Rectangle titre={"gl1tch.IV"} lieu={"La Fabriek"} type={"clubbing"} type2={"musique"} couleur={"yellow"} />
    <Rectangle titre={"Collectif Méta pres. MÉTA 3 YEARS w/ Eduardo De La Calle"} lieu={"Bodies in Space"} type={"clubbing"} type2={"musique"} couleur={"blue"} />
    <Rectangle titre={"Seefeel"} lieu={"AB Club"} type={"concert"} type2={"musique"} couleur={"purple"} />
    </>
  )
}

export default App
