import React from 'react'
import emptyHeart from "../emptyHeart.png"
import redFullHeart from "../redFullHeart.png"

class Character extends React.Component {
	render() {
		return(
        
            <article className="card box">
                <div className="card-body">
                    <img className="card-img-top" src={this.props.image} alt="character"/>
                    <div className="">
                        <h2 className="card-title pt-2">{this.props.name}</h2>
                        <p className="card-text">{this.props.title}</p>
                    </div> 
                </div>
                <div className="d-flex justify-content-center pb-3">
                    <img onClick={this.props.favorite} src={emptyHeart} alt="heart" width={"32px"}/>
                </div>
            </article>
		)
	}
}

export default Character