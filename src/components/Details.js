import React from 'react'

export default function Details({details,close}) {

  return (
    <div className='detailDiv'>
      <h2>About Me</h2>
          <p>Gender:{details.gender}</p>
          <p>Mass:{details.mass}</p>
          <p>Birth Year:{details.birth_year}</p>
          <p>Eye Color:{details.eye_color}</p>
          <p>Hair Color:{details.hair_color}</p>
          <p>Skin Color:{details.skin_color}</p>
          <button onClick={close}>Close</button>
    </div>
  )
}