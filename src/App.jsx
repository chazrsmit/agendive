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
    <Rectangle titre={"Bozar Bassment #7: Crystallmess (live) - Akano Toto (live)"} lieu={"Bozar"} type={"concert"} />
    </>
  )
}

export default App
