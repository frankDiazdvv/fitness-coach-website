import './Mediaqueries.css'
import NavBar from './nav-bar'
import Dashboard from './dashboard'
import MyStory from './my-story'
import  AboutMe from './about-me'
import  Plans from './plans'
import  ContactMe from './contact-me'
import  Footer from './footer'
import BeforeAndAfter from './before-and-after'

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Dashboard/>
        <MyStory/>
        <AboutMe/>
        <Plans/>
        <BeforeAndAfter/>
        <ContactMe/>
      </main>
      <footer>
       <Footer/>
      </footer>
    </>
  )
}

export default App
