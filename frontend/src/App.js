
import './App.css';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { BrowserRouter,Route, Link } from 'react-router-dom';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return ( <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand-name">
            <button className="sidebar-button" onClick={openMenu}>&#9776;</button>
            <Link to="/">Olx Copy</Link>
           
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="login.html">Log In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shooping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="car.html">cars</a>
            </li>
            <li>
              <a href="bike.html">bike</a>

            </li>
          </ul>

        </aside>

        <main className="main">
          <div className="content">
            <Route path='/product/:id' exact={true} component={ProductScreen} />
            <Route path='/' exact={true} component={HomeScreen} />
            

          </div>

        </main>
        <footer className="footer">
          all Right Reseverd
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
