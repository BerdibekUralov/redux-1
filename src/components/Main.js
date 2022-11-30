import React from 'react'

export default function Main({caunter, inc, dec, random}) {
  return (
    <div>
      <h1>Counter: {caunter}</h1>
      <button onClick={inc} className="btn btn-primary"> + </button>
      <button onClick={dec} className="btn btn-danger"> - </button>
      <button onClick={random} className="btn btn-info"> # </button>
    </div>
  )
}



