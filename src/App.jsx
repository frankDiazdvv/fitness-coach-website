import './App.css'
import './Mediaqueries.css'
import NavBar from './nav-bar'
import Dashboard from './dashboard'
import  AboutMe from './about-me'
import  Plans from './plans'
import  ContactMe from './contact-me'
import  Footer from './footer'

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <Dashboard/>
        <AboutMe/>
        <Plans/>
        <ContactMe/>
      </main>
      <Footer/>
    </>
  )
}

export default App
