import React from 'react'

const Card = () => {
  const url ="https://images.unsplash.com/photo-1652455361972-6a35aced61ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  return (
    <div className="m-5">
        <img className="m-10 h-40 w-40" src={url}></img>
    </div>
  )
}

export default Card