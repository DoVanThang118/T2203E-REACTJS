import React from "react";
import Student from './components/Student';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    const url = "https://dummyjson.com/products?limit=20";
    fetch(url)
    .then(rs=>rs.json())
    .then(rs=>{
      this.setState({
        products:rs.products
      })
    })
    .catch(err=>{
      alert(err);
    })
  }

  render(){
    const products = this.state.products;
    return (
      <section>
        <div className="container">
          <h1>Danh sachs san pham</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              products.map((e,k)=>{
                return (
                  <div key={k} className = "col">
                    <div className="card h-100">
                      <div className="card">
                        <img src={e.thumbnail} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{e.title}</h5>
                          <p className="card-text">{e.description}</p>
                          <p className="text-danger">{e.price}</p>
                          <a href="#" className="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default App;
