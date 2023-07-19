import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './UpdateTask';
import { useDispatch, useSelector } from 'react-redux';
import { removeTaskFromList, setSelectedTask } from './Slices/TasksSlices';

function TaskList() {
  const {tasksList}=useSelector((state)=>state.tasks)


  const dispatch=useDispatch()
    const [modalShow, setModalShow] = React.useState(false);

    const updateTask=(task)=>{
        console.log('updatetask');
        dispatch(setSelectedTask(task))
        setModalShow(true)
    }

    const deleteTask=(task)=>{
        console.log('deletetask');
        dispatch(removeTaskFromList(task))
    }
  return (
    <section className='my-3 '>
    <Table striped bordered hover>
    <thead className='text-center'>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody  >
    {
     tasksList && tasksList.map((task)=>(

      <tr className="text-center" key={task.id}>
        <td>#</td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td><Button variant="primary" className='mx-3' onClick={()=>updateTask(task)}><i className="bi bi-pencil-fill"></i></Button>
        <Button variant="primary" onClick={()=>deleteTask(task)}><i className="bi bi-x-circle-fill"></i></Button></td>
      </tr>
     ) )
}
      
      
    </tbody>
  </Table>
  <MyVerticallyCenteredModal
  show={modalShow}
  onHide={() => setModalShow(false)}
/>
    </section>
  )
}

export default TaskList
