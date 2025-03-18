import React from 'react'
import "./main.css"
import ComponenteSuperior from './ComponenteSuperior'
import ComponenteDerecho from './ComponenteDerecho'
import ComponentesInferiores from './ComponentesInferiores'
export default function ContenedorGeneral() {
  return (
    <main className='main'>
        <section className='sectionsuperior'>
        <ComponenteSuperior/>
        <ComponenteDerecho/>
        </section>    
        <section className='sectioninferior'>
            <ComponentesInferiores/>
            <ComponentesInferiores/>
            <ComponentesInferiores/>

        </section>
    </main>
    
  )
}
