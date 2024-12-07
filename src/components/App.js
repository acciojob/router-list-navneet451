import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
import './../styles/App.css'

const App = () => {
  return (
    <div>
        <h1>List items</h1>
        <ul>
            <li><Link to={'/item1'}>Item1</Link></li>
            <li><Link to={'/item2'}>Item2</Link></li>
            <li><Link to={'/item3'}>Item3</Link></li>
        </ul>
        <Routes>
            <Route path='/item1' element={<Item1 />}/>
            <Route path='/item2' element={<Item2 />}/>
            <Route path='/item3' element={<Item3 />}/>
        </Routes>
    </div>
  )
}

export default App
