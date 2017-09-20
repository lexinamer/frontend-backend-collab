import React, {Component} from 'react';
import DisplayProducts from './DisplayProducts.js';

class GetProducts extends Component {
  constructor(props){
    super(props);
    this.state = {products: []};
  }

  componentDidMount() {
    let Data = 'http://10.253.100.108:8080/products';

    fetch(Data)
      .then(response => response.json())
        .then((json) => {
          this.setState({products: json})
        })
  }

  render() {
    return (
      <div>
        <DisplayProducts products={this.state.products}/>
      </div>
    );
    }
}

export default GetProducts;
