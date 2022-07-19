import React from 'react'
import Character from './component/Character'
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      favorites: [],
    }
  }

  async componentDidMount() {
    const response = await (await fetch("https://thronesapi.com/api/v2/Characters")).json()
    this.setState({
      characters : response
    })
  }
  componentDidUpdate() {
    console.log(this.state.favorites)
    // pour log
  }

  handleFavoriteClick = (character) => {
    this.setState({
      favorites: this.state.favorites.concat()
      // a finir
    })
    
  }

    render() {
      
        return(
            <div className="background-color_dark">
                <h1 className="title">Game of thrones</h1>
                <div className="">
                    <div className="">
                        <section className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                            {this.state.characters.map( (character) => {
                            return (
                                <Character
                                    key={character.id}
                                    name={character.fullName}
                                    title={character.title}
                                    image={character.imageUrl}
                                    favorite={this.handleFavoriteClick}
                                />
                            )
                            })}
                        </section>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App