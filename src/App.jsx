
import './main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Routing from './router/Routing';

function App() {
  AOS.init({
    once: true,
  })
  return (
    <>
      <Routing/>
    
    </>
  )
}

export default App
