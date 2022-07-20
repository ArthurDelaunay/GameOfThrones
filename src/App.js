import React from 'react'
import Character from './component/Character'
import Continent from './component/Continent';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      favorites: [],
      continents: [],
      isDisplayCharacters : true,
      isDisplayContinents : false,
    }
  }

  async componentDidMount() {
    const responseCharacters = await (await fetch("https://thronesapi.com/api/v2/Characters")).json()
    const responseMap = await (await fetch("https://thronesapi.com/api/v2/Continents")).json()
    this.setState({
      characters : responseCharacters,
      continents: responseMap,
    })
  }

  handleFavoriteClick = (character) => {
    const clonedFavorites = [...this.state.favorites, character]
    this.setState({
      favorites: clonedFavorites,
    })
    
  }

  handleCharactersDisplayClick = () => {
    this.setState({
      isDisplayCharacters : true,
      isDisplayContinents: false
        
    })
  }

  handleContinentsDisplayClick = () => {
    this.setState({
      isDisplayCharacters : false,
      isDisplayContinents : true,
    })
  }


    render() {
        console.log(this.state)
        return(
            <div className="background-color_dark">
                <nav className="nav-bar d-flex justify-content-center align-items-end">
                  <button onClick={this.handleCharactersDisplayClick} className="view-selection">Characters</button>
                  <button onClick={this.handleContinentsDisplayClick} className="view-selection">Continents</button>
                </nav>
                <h1 className="title mt-3">Game of thrones</h1>
                <div className="">
                    <div className="">
                        {this.state.isDisplayCharacters 
                            && <section className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                                    {this.state.characters.map( (character) => {
                                    return (
                                        <Character
                                            key={`${character.fullName}${character.id}`}
                                            name={character.fullName}
                                            title={character.title}
                                            image={character.imageUrl}
                                            addToFavorite={() => this.handleFavoriteClick(character)}
                                        />
                                    )
                                    })}
                                </section>
                      }
                        {this.state.isDisplayContinents
                            && <section className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                                    {this.state.continents.map ( (continent) =>{
                                    return (
                                        <Continent
                                            key={`${continent.name}${continent.id}`}
                                            name={continent.name}
                                        />
                                    )
                                    })}
                                </section>
                        } 
                        
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App