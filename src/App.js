import React from 'react'
import Character from './component/Character'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  async componentDidMount() {
    const response = await (await fetch("https://thronesapi.com/api/v2/Characters")).json()
    console.log(response)
  }




	render() {
		return(
      <section>
        <h1>Game of thrones</h1>
        <Character />
      </section>
			
		)
	}
}

export default App