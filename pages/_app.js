import {  Fragment, useState } from 'react'
import '../styles/globals.css'

function PL({ Component, pageProps }) {

const [loading, setLoading] = useState(true);

setTimeout(()=>{
  setLoading(false);
}, 5000)




  return (
    <>
      <Component {...pageProps} /> 
    </>
    
  )
}

export default PL
