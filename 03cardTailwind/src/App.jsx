import './App.css'
import Card from './components/Card'
function App() {
return <div className='flex gap-3 m-3'>
    <Card userName='Hiren'/>
    <Card userName='Uma' btnClick='View Uma Profile'/>
  </div>
}
export default App
