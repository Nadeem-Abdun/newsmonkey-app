import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 9; // Test case failed when pageSize exceed half of the recieving article results. 
  render() {
    return (
      <>
      <Navbar title='NewsMonkey' home='Home' about='About Us' newsCategories='News Categories' asiaCountyDropdown='Asia' euCountyDropdown='Europe' americasCountyDropdown='Americas' OceaniaCountyDropdown='Oceania' AfricaCountyDropdown='Africa'/>
      <Routes>
       {/* Home */}
      <Route exact path='/' element={<News key="general" country='in' category='general' pageSize={this.pageSize}/>} />
      {/* News Categories */}
      <Route exact path='/business' element={<News key="business" country='in' category='business' pageSize={this.pageSize}/>} />      
      <Route exact path='/entertainment' element={<News key="entertainment" country='in' category='entertainment' pageSize={this.pageSize}/>} />      
      <Route exact path='/general' element={<News key="general" country='in' category='general' pageSize={this.pageSize}/>} />      
      <Route exact path='/health' element={<News key="health" country='in' category='health' pageSize={this.pageSize}/>} />      
      <Route exact path='/science' element={<News key="science" country='in' category='science' pageSize={this.pageSize}/>} />      
      <Route exact path='/sports' element={<News key="sports" country='in' category='sports' pageSize={this.pageSize}/>} />      
      <Route exact path='/technology' element={<News key="technology" country='in' category='technology' pageSize={this.pageSize}/>} />
      {/* News Countries */}
      </Routes>
      </>
    )
  }
}
