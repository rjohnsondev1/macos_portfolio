import React from 'react'
import gsap from 'gsap';
import {Navbar, Dock, Welcome} from "#components";
import {Finder, Resume, Terminal, Text, Image, Contact} from "#windows"
import { Draggable} from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
       <main>
           <Navbar />
           <Welcome />
           <Dock />
           <Terminal />

           <Resume />
           <Finder />
           <Text />
           <Image />
           <Contact />



       </main>
    )
}
export default App
