import React, { Component } from 'react';

export default class DisplayProducts extends Component{

  render(){
    let products = this.props.products.map((product) => {
      return(
      <section key={product.id}>
        <p><span>Name:</span> {product.name}</p>
        <p><span>Price:</span> {product.price}</p>
        <p><span>Description:</span> {product.description}</p>
      </section>
      )
    })

    return(
      <div>
        {products}
      </div>
    )
  }
}
