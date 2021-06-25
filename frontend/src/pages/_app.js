import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import '../styles/global.scss'

function MyApp({ Component, pageProps }){
  return (
    <div>
      <main>
        <Header/>
        <Component {...pageProps}/>
        <Footer/>
      </main>

    </div>
  )
}

/*  */
export default MyApp;