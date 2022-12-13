import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
return(
    <div>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>


    </div>
    
)}

export default MyApp
