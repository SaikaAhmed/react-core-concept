import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Saika', 'Seli', 'Tono']
  // const nayikaNames = name.map(names => names);
  // console.log(nayikaNames);
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$50.99'},
    {name: 'Premier El', price: '$24.99'}
  ]  
  return (
    <div className="App">
      <header className="App-header">
     <p>I am a react person</p>
     <Counter></Counter>
     <Users></Users>
     <ul>
       {
         name.map( names => <li>{names}</li>)
       }
       {
         products.map( product => <li>{product.name}</li>)
       }
  {/* <li>{name[0]}</li>
  <li>{name[1]}</li>
  <li>{name[2]}</li> */}

     </ul>
     {
       products.map(pd => <Products product={pd}></Products>)
}
     {/* <Products name={products[0].name} price={products[0].price}></Products> */}
     <Products product = {products[0]}></Products>
     {/* <Products name={products[1].name} price={products[1].price}></Products> */}
     <Products product={products[1]}></Products>
     </header>
     </div>
      ) ;
     }
 
     function Counter(){
       const [count, setCount] = useState(0);
       const handleIncrease = () =>  setCount(count + 1);
      //  const newCOunt = count + 1;
      const handleDecrease = () => setCount(count -1 );
       return (
         <div>
           <h1>Counter: {count}</h1>
           <button onMouseMove={handleIncrease}>Increase</button>
           <button onClick={handleDecrease}>Decrease</button>
         </div>
       )
     }

     function Users(){
       const[users, seTUsers] = useState([]);
       useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => seTUsers(data));
       }, []) 
       return(
         <div>
           <h3>Dynamic Users: {users.length}</h3>
          <ul>
            {
       users.map(user => <li>{user.name}</li>)
            }
            </ul>
         </div>
       )
     }

     function  Products(props) {
       const productStyle={
         border: '1px solid grey',
         borderRadius: '5px',
         backgroundColor: 'lightgray',
         height: '250px',
         width: '200px',
         float: 'left',
         margin: '20px'
       }
       const {name, price} = props.product;
       return (
         <div style={productStyle}>
       <h2>{name}</h2>
      <h1>{price}</h1>
       <button>Buy Now</button>
         </div>
       )
     }












export default App;
