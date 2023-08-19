import React from "react";

import ItemList from "./ItemList";

const Content = ({items,setItems,handleCheck,handleDelete}) => {
     
  return (
    <main>
        {(items.length) ?(
        <ItemList
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        ):(
            <p style={{color:"violet"}}>Your list is EMPTY </p>
        )
}
  </main>
  )}

export default Content
