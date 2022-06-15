import React from 'react'

export default function App() {
  const names = ['Naveh', 'Echo','Leo','Amit Roushan','Lsabel','Eric','Mihi','Chris Denney'];
  const lis = names.map( name => {
      return <li>{name}</li>
  })
  return (
    <section className='wrap'>
        <h1>React-Display-List</h1>
        <ul className='name--list'>
        {lis}
        </ul>
    </section>
  )
}
