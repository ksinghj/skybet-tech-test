import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useReduceMotion } from 'react-reduce-motion'
import { Globals } from 'react-spring'

import Home from '../Home'
import EventDetails from '../EventDetails'

function App() {
  // keeps app accessible by disabling animations (e.g. the dropdown) if required
  const prefersReducedMotion = useReduceMotion()
  React.useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    })
  }, [prefersReducedMotion])

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event-details' element={<EventDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
