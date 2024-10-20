import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Example from './components/Example'
import Footer from './components/Footer'

const data = [
  {title:'Dog', Url:'1'},
  {title:'Cat', Url:'2'},
  {title:'Frog', Url:'3'}
]

const dataElement = data.map((e, i) => {
  return <h1 key={i}>{e.title} - {e.Url}</h1>
})

class Car {
  constructor(brand){
    this.name = brand
  }
  present(){
    return `I have a ${this.name}`
  }
}

class Model extends Car {
  constructor(brand,mod){
    super(brand)
    this.model = mod
  }
  show(){
    return this.present() + ',it is a' + this.model
  }
}
let mycar1 = new Car('BMW')
console.log(mycar1)
let mycar2 = new Model ('Ford','Mustang')
console.log(mycar2)

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Example/>
      <Footer/>
      <div> {dataElement} </div>
    </div>
  )
}

export default App