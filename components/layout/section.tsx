import React from 'react'

const Section = ({children} : {children: React.ReactNode}) => {
  return (
    <section className="w-full border-y border-border">
        {children}
    </section>
  )
}

export default Section