import './App.css'
import BioData from './components/BioData'

function App() {


  return (
    <>
      <BioData name="Al Muksid" email="web.almuksid@gmail.com" mobile="+8801770058637" linkedin="linkedin.com/in/almuksid" skills={["React.js", "Django"]} interests={["Cricket", "Football", "Badminton"]} />
      <hr />
      <BioData name="Mesion Sheikh" email="sheikh@gmail.com" mobile="+880" linkedin="linkedin.com/in/" skills={["React.js", "Django"]} interests={["Cricket", "Football", "Badminton"]} />
    </>
  )
}

export default App
