import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <hr className="border-slate-200" />

      <p className='cta-text'>
        Have a project in mind?
        <br className='sm:block hidden' />
        Let's Bring it to <span className='blue-gradient_text font-semibold'>Life</span>
      </p>
      <Link to="/contact" className='btn'> Let's Talk</Link>
      
      <hr className="border-slate-200" />
    </section>
  )
}

export default CTA