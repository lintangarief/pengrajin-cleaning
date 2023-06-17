import React, { useEffect } from 'react'
import '../styles/App.css'
import '../styles/index.css';
import '../styles/header.css';
import '../styles/content.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
import '@ionic/core/css/core.css';
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import {Quicksand} from '@next/font/google'



const quickSand = Quicksand({
  subsets : ['latin'],
  weight :'600',
})
export default function App({ Component, pageProps }) {
  useEffect(() => {
    ionDefineCustomElements(window)
  })

   return (
   <main className={quickSand.className}>
     <Component className="App" {...pageProps} />
   </main>
   )
}
