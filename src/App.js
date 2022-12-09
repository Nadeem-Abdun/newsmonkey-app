import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import About from './Components/About';

export default class App extends Component {
  pageSize = 10; // Test case failed when pageSize exceed half of the recieving article results. 
  // For setting state of a loading bar
  state = {
    progress: 0,   // This is to specify that the default state of the progress component
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})  // Getting this prop from news component
  }
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
      <LoadingBar color='#f11946' progress={this.state.progress} loaderSpeed={3000} transitionTime={3000} waitingTime={2000} shadow={true} height={3}/>
      <Navbar title='NewsMonkey' home='Home' about='About Us' newsCategories='News Categories' asiaCountyDropdown='Asia' euCountyDropdown='Europe' americasCountyDropdown='Americas' OceaniaCountyDropdown='Oceania' AfricaCountyDropdown='Africa'/>
      <Routes>
      {/* Home */}
      <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" country='in' county ='India' category='general' pageSize={this.pageSize}/>} />
      {/* About */}
      <Route exact path='/about' element={<About/>}/>

      {/* News Categories */}
      <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" country='in' county ='India' category='business' pageSize={this.pageSize}/>} />      
      <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" country='in' county ='India' category='entertainment' pageSize={this.pageSize}/>} />      
      <Route exact path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" country='in' county ='India' category='general' pageSize={this.pageSize}/>} />      
      <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" country='in' county ='India' category='health' pageSize={this.pageSize}/>} />      
      <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" country='in' county ='India' category='science' pageSize={this.pageSize}/>} />      
      <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" country='in' county ='India' category='sports' pageSize={this.pageSize}/>} />      
      <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" country='in' county ='India' category='technology' pageSize={this.pageSize}/>} />

      {/* News Countries */}

      {/* Europe Countries */}
      <Route exact path='/ukraine' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="ukraine" country='ua' county ='Ukraine' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/france' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="france" country='fr' county ='France' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/sweden' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sweden" country='se' county ='Sweden' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/norway' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="norway" country='no' county ='Norway' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/germany' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="germany" country='de' county ='Germany' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/poland' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="poland" country='pl' county ='Poland' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/italy' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="italy" country='it' county ='Italy' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/unitedkingdom' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="unitedkingdom" country='gb' county ='United Kingdom' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/romania' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="romania" country='ro' county ='Romania' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/greece' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="greece" country='gr' county ='Greece' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/bulgaria' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="bulgaria" country='bg' county ='Bulgaria' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/hungary' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="hungary" country='hu' county ='Hungary' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/portugal' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="portugal" country='pt' county ='Portugal' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/serbia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="serbia" country='rs' county ='Serbia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/austria' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="austria" country='at' county ='Austria' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/czechrepublic' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="czechrepublic" country='cz' county ='Czech Republic' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/ireland' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="ireland" country='ie' county ='Ireland' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/lithuania' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="lithuania" country='lt' county ='Lithuania' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/latvia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="latvia" country='lv' county ='Latvia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/slovakia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="slovakia" country='sk' county ='Slovakia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/switzerland' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="switzerland" country='ch' county ='Switzerland' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/netherlands' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="netherlands" country='nl' county ='Netherlands' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/belgium' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="belgium" country='be' county ='Belgium' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/turkey' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="turkey" country='tr' county ='Turkey' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/slovenia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="slovenia" country='si' county ='Slovenia' category='general' pageSize={this.pageSize}/>} />

      {/* Asia Countries */}
      <Route exact path='/russia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="russia" country='ru' county ='Russia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/china' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="china" country='cn' county ='China' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/india' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="india" country='in' county ='India' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/saudiarabia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="saudiarabia" country='sa' county ='Saudi Arabia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/indonesia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="indonesia" country='id' county ='Indonesia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/thailand' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="thailand" country='th' county ='Thailand' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/japan' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="japan" country='jp' county ='Japan' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/malaysia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="malaysia" country='my' county ='Malaysia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/philippines' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="philippines" country='ph' county ='Philippines' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/southkorea' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="southkorea" country='kr' county ='South Korea' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/uae' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="uae" country='ae' county ='UAE' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/egypt' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="egypt" country='eg' county ='Egypt' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/taiwan' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="taiwan" country='tw' county ='Taiwan' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/israel' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="israel" country='il' county ='Israel' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/singapore' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="singapore" country='sg' county ='Singapore' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/hongkong' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="hongkong" country='hk' county ='Hong Kong' category='general' pageSize={this.pageSize}/>} />

      {/* Americas Countries */}
      <Route exact path='/unitedstates' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="unitedstates" country='us' county ='United States' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/canada' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="canada" country='ca' county ='Canada' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/cuba' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="cuba" country='cu' county ='Cuba' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/mexico' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="mexico" country='mx' county ='Mexico' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/argentina' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="argentina" country='ar' county ='Argentina' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/brazil' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="brazil" country='br' county ='Brazil' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/colombia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="colombia" country='co' county ='Colombia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/venuzuela' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="venuzuela" country='ve' county ='Venuzuela' category='general' pageSize={this.pageSize}/>} />

      {/* Oceania Countries */}
      <Route exact path='/australia' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="australia" country='au' county ='Australia' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/newzealand' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="newzealand" country='nz' county ='New Zealand' category='general' pageSize={this.pageSize}/>} />

      {/* African Countries */}
      <Route exact path='/southafrica' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="southafrica" country='za' county ='South Africa' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/nigeria' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="nigeria" country='ng' county ='Nigeria' category='general' pageSize={this.pageSize}/>} />
      <Route exact path='/morocco' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="morocco" country='ma' county ='Morocco' category='general' pageSize={this.pageSize}/>} />
      </Routes>
      </>
    )
  }
}