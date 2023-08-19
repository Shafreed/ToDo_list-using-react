import React from 'react'

import LineItem from './LineItem';
const ItemList = ({items,setItems,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((item)=>(
        <LineItem
        item={item}
        key={item.id}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
    ))}         
</ul>
    )
}

export default ItemList
