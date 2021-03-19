// Write your Character component here
import React, {useState} from 'react'
import Details from './Details'
import styled from 'styled-components'

const Styledchar = styled.div`
    margin: 25px;
    padding: 50px;
    border-style: solid;
    border-color: gold;
    border-radius: 25px;

    .charDisplay{
        display: flex;
        justify-content: space-between;
    }

    h3{
        color: brown;
    }
`
export default function Character({info}) {
    const [currentName, setCurrentName] = useState(null)

    const openDetails = name => {
      setCurrentName(name)
    }
  
    const closeDetails = () => {
      setCurrentName(null)
    }

    return (
        <div>
            <Styledchar>
                <div className='charDisplay'>
                    <h3>{info.name}</h3>
                    <button onClick={() => openDetails(info.name)}>{info.birth_year}</button>
                </div>
                <div className='detailInfo'>
                    {currentName && <Details details={info} close={closeDetails}/>}
                </div>
            </Styledchar>
        </div>
        
    )
}