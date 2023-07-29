import {AppProps} from "next/app";
import Layout from "@components/Layout/Layout";
import "../style.css";
import { Fragment } from "react";
export default function MyApp({ Component, pageProps } = AppProps) {
    // Providers - Context / Providers, Theme, Data
    // Layout
    // Props adicionales
    return(
      <div className="container">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
    ) 
    // Se pueden añadir otros props a la etiqueta de Component
  }

  /* ¿Cómo funciona Next Js
  - Extendemos Next Js
  - Documento
  - App
    - Nuestra app / pages /
  */