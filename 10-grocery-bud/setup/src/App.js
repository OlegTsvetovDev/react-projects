import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const clearList = () => {
    setList([])
    setAlert({ show: true, msg: 'All list is cleared', type: 'danger' })
  }

  const createItem = e => {
    e.preventDefault()

    if (!name) {
      setAlert({ show: true, msg: 'item can not be empty', type: 'danger' })
      return setList([...list])
    }

    if (name && isEditing) {
      const editedItems = list.map(item => {
        if (item.id === editId) item.title = name
        return item
      })
      setList(editedItems)
      setEditId(null)
      setAlert({ show: true, msg: 'Item successfully edited', type: 'success' })
      return setIsEditing(false)
    }

    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
    }

    setList([...list, newItem])
    setAlert({ show: true, msg: 'New Item Added', type: 'success' })
    setName('')
  }

  const handleChange = e => setName(e.target.value)

  const deleteItem = (e, id) => {
    e.preventDefault()

    const newList = list.filter(item => item.id !== id)
    const newAlert = { show: true, msg: 'Item is deleted', type: 'danger' }
    setList(newList)
    setAlert(newAlert)
  }

  const editItem = (e, id) => {
    e.preventDefault()

    const editedItem = list.find(item => item.id === id)
    setName(editedItem.title)
    setEditId(id)
    setIsEditing(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, msg: '', type: '' })
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [list])

  useEffect(() => {
    const initialList = localStorage.getItem('list')
    setList(JSON.parse(initialList))
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className="grocery-form"
        onSubmit={createItem}
      >
        { alert.show && <Alert { ...alert } /> }
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs"
            value={name} onChange={handleChange}
          />
          <button type="submit" className="submit-btn">{ isEditing ? 'Edit' : 'Add' }</button>
        </div>
      </form>
      {
        list.length
        ?
          <div className="grocery-container">
            <List list={list} editItem={editItem} deleteItem={deleteItem} />
            <button className="clear-btn"
              onClick={clearList}
            >
              Clear List
            </button>
          </div>
        :
          null
      }
    </section>
  )
}


export default App
