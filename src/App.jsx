
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
        <Navbar/>
        <br />
        <br />
       <div className="cardAlign flex flex-wrap justify-center bg-gray-100 py-8 gap-10 mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>

      
    
    </>
  )
}

export default App
