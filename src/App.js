import data from './data';

function App() {
  return (
    
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">LizzyBlue</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                     <a href="signin.html"></a> 
                </div>
            </header>
             <main>
                 <div className="row center">

                   {data.products.map(product=>(
                      <div key={product._id} className="card">
                      <a href={`/product/${product._id}`}>
                         <img className="medium" src={product.images} alt={product.name}/> 
                      </a>
                  <div className="card-body">
                  <a href={`/product/${product._id}`}>
                          <h2>{product.name}</h2>
                      </a>
                      <div className="price">
                        ${product.price}
                      </div>
                  </div>
                  </div>
                   ))}
                    

                    


                 </div>  
             </main>  
             <footer className="row center">All rights reserved</footer>
        </div>
  
  );
}

export default App;
