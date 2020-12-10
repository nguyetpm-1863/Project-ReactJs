import React, { useEffect } from 'react';
import Contact from './contact.js';
import Home from './home.js';
import Collection from './collection.js';
import Cart from './cart.js';
import Product from './product.js';

import Logo from '../assets/logo.png';
import { ReactComponent as CartIcon } from '../assets/cart.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const Header = () => {
  useEffect(() => {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;
    const handleScroll = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return (
    <div>
      <Router>
        <div className='topbar'>
          <div className='container'>
            <div className='topbar__wrap'>
              <div className='topbar__contact'>
                <a className='link' href='tel:+84 123 456 7890'>123 456 7890</a>
                <span>|</span>
                <a className='link' href='mailto:test.travel@gmail.com'>test.travel@gmail.com</a>
              </div>
              <div className='topbar__cart'>
                <Link className='image link' to='/cart'>
                  <CartIcon />
                  (<span className='topbar__cart-number'>0</span>)
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='header' className='header'>
          <div className='menubar container'>
            <div className='logo'>
              <Link className='link' to='/'>
                <img src={ Logo } alt='Logo'/>
              </Link>
            </div>
            <div className='main-menu'>
              <nav>
                <ul className='main-menu__list'>
                  <li>
                    <Link className='main-menu__link link' to='/'>Home</Link>
                  </li>
                  <li>
                    <Link className='main-menu__link link' to='/collection'>Danh sách tour</Link>
                  </li>
                  <li>
                    <Link className='main-menu__link link' to='/contact'>Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route
            path='/product/:handle'
            component={ <Product /> }
          />
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/collection'>
            <Collection />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Header;