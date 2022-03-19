import mercurio from '../assets/planets/mercurio.gif'
import venus from '../assets/planets/venus.gif'
import terra from '../assets/planets/terra.gif'
import marte from '../assets/planets/marte.gif'
import jupiter from '../assets/planets/jupiter.gif'
import saturno from '../assets/planets/saturno.gif'
import urano from '../assets/planets/urano.gif'
import netuno from '../assets/planets/netuno.gif'
import plutao from '../assets/planets/plutao.gif'
import React from 'react'

export default function planets(planet) {
    const thePlanet = () => {
        switch (planet){
            case 'Mercúrio':
                return mercurio
            case 'Vênus':
                return venus
            case "Terra":
                return terra
            case "Marte":
                return marte
            case 'Jupiter':
                return jupiter
            case 'Saturno':
                return saturno
            case 'Urano':
                return urano
            case 'Netuno':
                return netuno
            case 'Plutão':
                return plutao
        }

    }

  return (
    [thePlanet]
  )
}
