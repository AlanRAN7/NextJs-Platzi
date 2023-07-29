import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        {/* Favicon: Para importar iconos */}
        {/* Arial...: Para importar diferentes tipos de letras*/}
        {/* Webfont personalizadas */}
        {/* Agregar estilos externos */}
        {/* Agregar otros scripts */}
        </Head>
        <body className ="body-container">
          <Main />
          {/* Main sirve para englobar nuestra aplicación */}
          <NextScript />
          {/* También podemos agregar elementos adicionales */}
        </body>
      </Html>
    )
  }
}

export default MyDocument