import React, { Component } from 'react'

export default class FoodBox extends Component {
  constructor(){
    super()
    this.state={
      quantity:0

    }
    
  }
  changeQuantity(e){
    console.log(e.target.value)
    // let newState={
    //   ...this.state,
    //   quantity:e.target.value
      
  
    // };
    this.setState({
      ...this.state,
      quantity:e.target.value
      
  
    })
    
  }
  render() {
    return (
      <div>
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input onChange={e=>this.changeQuantity(e)}
            className="input"
            type="number" 
            value={this.props.quantity}
          />
        </div>
        <div className="control">
          <button onChange={e=>this.sendQuantity(e)} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
      </div>
    )
  }
}
