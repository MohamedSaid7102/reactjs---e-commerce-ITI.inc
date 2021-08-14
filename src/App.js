import React from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ProductsContainer from './Components/ProductsContainer';
import faker from 'faker';
import Hero from './Components/Hero';
class App extends React.Component {
  generateID = () => {
    return Math.round(Math.random() * 1000);
  };

  state = {
    numberOfProducts: 0,
    appData: [
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        header: 'B’Natural',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Makup',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/4765366/pexels-photo-4765366.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        header: 'Iphone 689 plus',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Phones',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        header: 'Galaxi npx 7',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Phones',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/4620838/pexels-photo-4620838.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        header: 'Makeup Maven',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Makup',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/3201768/pexels-photo-3201768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        header: 'Lenovo RS 8',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Laptops',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        header: 'Beautyview',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Makup',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        header: 'Huwaie 67s',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Laptops',
      },
      {
        id: this.generateID(),
        imgUrl:
          'https://images.pexels.com/photos/3844565/pexels-photo-3844565.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        header: 'DELL 12 p',
        description: faker.commerce.productDescription().substring(0, 25),
        type: 'Laptops',
      },
    ],
  };

  onAddProduct = () => {
    this.setState((previousState) => ({
      numberOfProducts: previousState.numberOfProducts + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <NavBar numberOfProducts={this.state.numberOfProducts} />
        <Hero />
        <ProductsContainer
          data={this.state.appData}
          onAddProduct={this.onAddProduct}
          handleAddProduct={this.handleAddProduct}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
