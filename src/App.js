
import './app.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/main'
import Navbar from './components/navbar/Navbar'

function App(){
    return(
        <>
          <Navbar/>
          <Home/>
          <Main/>
          <Footer/>  
        </>
    )
}
export default App