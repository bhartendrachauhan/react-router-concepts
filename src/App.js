import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';
import Profile from './Components/Profile';
import { AuthProvider } from './Components/Auth';
import Login from './Components/Login';
import RequiredAuth from './Components/RequiredAuth'
const LazyAbout = React.lazy(()=> import('./Components/About'))

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={
      <Suspense fallback='Loading...'>{/*you can also pass any component in fallback */}
      <LazyAbout/>
      </Suspense>}></Route>
      <Route path='/order-summary' element={<OrderSummary/>}></Route>
      <Route path='*' element={<NoMatch/>}></Route>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}></Route>
        <Route path='featured' element={<FeaturedProducts/>}></Route>
        <Route path='new' element={<NewProducts/>}></Route>
      </Route>
      <Route path='/users' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='profile' element={<RequiredAuth><Profile/></RequiredAuth> }></Route>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </AuthProvider>
    </>
  );
}

export default App;

// <Route path='*' element={<NoMatch/>}></Route> means all the routes which are not identified will show this component.
