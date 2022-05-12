import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = ({ list, editItem, deleteItem }) => {
  return (
    <div className="grocery-list">
      {
        list.map(item =>
          <article className="grocery-item" key={ item.id }
          >
            <p className="title">{ item.title }</p>
            <div className="btn-container">
              <button className="edit-btn"
                onClick={e => editItem(e, item.id)}
              >
                <FaEdit />
              </button>
              <button className="delete-btn"
                onClick={e => deleteItem(e, item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      }
    </div>
  )
}


export default List
