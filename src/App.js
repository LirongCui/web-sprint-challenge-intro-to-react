import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'
import './App.css';

const StyledDiv = styled.div`
  margin: 50px;
  text-align: center;
  
  h1{
    color: black;
    background-color: darkgray;
  }

  h2{
    color: royalblue;
  }
  }
  button{
    color: rosybrown;
    &:hover {
      transform: scale(1.5);
      transition: all .05s ease-in-out;
  }
  transition: all 1s ease-in-out;
  }
`


const App = () => {
  const[charData, setCharData] = useState([])


  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledDiv className="container">
      <div className="headerDiv">
       <h1 className="title">React War</h1>
      </div>
      <div className="bodyDiv">
        <div className="charactersDiv">
          <h2>Characters</h2>
          <div className="character">
            {
              charData.map(char => {
                return <Character key={char.id} info={char}/>
              })
            }
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

export default App;
