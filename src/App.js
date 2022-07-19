import React from 'react'

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
			<h1>Game of thrones</h1>
		)
	}
}

export default App