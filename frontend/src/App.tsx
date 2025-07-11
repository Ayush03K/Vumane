import './App.css'
import BCard from './components/BCard'
import BkCard from './components/BkCard'
import ButtonR from './components/ButtonR'
import RCard from './components/RCard'
import Footer from './components/Footer'
import BlogDetails from './pages/BlogDetails'
import Create from './pages/Create'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  
  return (
    <>
      <div className='bg-[rgb(0,1,2)]'>
        {/* <Signup/> */}
        {/* <Home/> */}
        {/* <Create/> */}
        {/* <BlogDetails/> */}
        <ButtonR/>
        <div className='h-[10px]'>

        </div>
        <div className='p-[100px] flex gap-[50px]'>
          <RCard/>
          <BkCard/>
          <BCard/>
        </div>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
