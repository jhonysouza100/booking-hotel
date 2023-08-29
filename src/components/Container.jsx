import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Container({children}) {
  return(
    <>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  )
}
