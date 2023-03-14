import { useState, useEffect } from 'react'
import Goal from '../components/Goal.jsx'

const URL = 'http://localhost:8000'

function App() {
  const [goals, setGoals] = useState([])
  const [popup, setPopup] = useState(false)
  const [form, setForm] = useState('')

  useEffect(()=> {
    fetch(URL + '/goals')
      .then(res => res.json())
      .then(data => {
        setGoals(data)
      })
  }, [])

  function changeComplete(id) {
    setGoals(prev => {
      return prev.map(x => {
        return x._id == id ? {...x, complete: !x.complete} : x
      })
    })
    fetch(URL + '/updateGoal/' + id, {method: 'put'})
  }

  function deleteGoal(id){
    setGoals(prev => {
      return prev.filter(el => el._id !== id)
    })
    fetch(URL + '/deleteGoal/' + id, {method: 'delete'})
  }

  const goalsElements = goals.map(el => {
    return <Goal props = {el} key = {el._id} onClick = {changeComplete} deleteGoal = {deleteGoal}/>
  })

  function handleChange(event){
    const {value} = event.target
    setForm(value)
  }

  async function addGoal(event){
    event.preventDefault()
    const response = await fetch(URL + '/createGoal', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        goal: form
      })
    })
    const data = await response.json()
    setGoals(prev => [
      ...prev,
      data
    ])
    setForm('')
    setPopup(false)
  }



  return (
    <div className="App">
      <h1>Goal Tracker</h1>
      <h4>Your Goals</h4>
      {goalsElements.length > 0 ? goalsElements : <p>You currently have no goals.</p>}

      <div className = 'addPopup' onClick = {() => setPopup(true)}>+</div>


      {popup && (<div className='popup'>
        <div className="closePopup" onClick={() => setPopup(false)}>X</div>
        <div className="content">
          <h3>Add Goal</h3>
          <form onSubmit={addGoal}>
            <input className="add-goal-input" type="text" name = "goal" value = {form} onChange = {handleChange}/>
            <button className="button">Add</button>
          </form>
        </div>
        
      </div>)}

    </div>
  )
}

export default App
