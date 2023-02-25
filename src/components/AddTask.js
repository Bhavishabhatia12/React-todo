import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setreminder]= useState(false)
    const onSubmit = (e) =>{
      e.preventDefault()
      if(!text){
        alert('please add task')
        return
      }
      onAdd({text, day, time, reminder})
      setText('')
      setDay('')
      setTime('')
      setreminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
    <label>Task</label>
    <input type= 'text' placeholder='add your task here' 
    value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
    <div className='form-control'>
    <label>Day & time </label>
    <input type= 'date'    
     value={day} onChange={(e)=>setDay(e.target.value)}
 />
    <input type= 'time'  
    value={time} onChange={(e)=>setTime(e.target.value)}

    />

    </div>
    <div className='form-control form-control-check'>
    <label>Set Reminder</label>
    <input type= 'checkbox' 
    checked={reminder}
     value={reminder} onChange={(e)=>setreminder(e.currentTarget.checked)}
 />
    </div>

    <input className='form-control btn' type= 'submit' value='Submit Task' />
    </form>
  )
}

export default AddTask
