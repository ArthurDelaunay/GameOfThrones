import React from 'react'

class Continent extends React.Component {
  render() {
    return (
        <article className="card box">
            <div className="card-body">
                <h2 className="card-title pt-2">{this.props.name}</h2>
            </div>     
        </article>

    )
  }
}

export default Continent