import React from 'react'

const Header = ({title}) => {
  return (
    <header>
      <h1>{title} toDo </h1>
    </header>  )
}

Header.defaultProps ={
  title:"toDO"
}
export default Header
