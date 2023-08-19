import AddItems from './AddItems';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState } from 'react'
import SearchItem from './SearchItem';
function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('toDo list'))
    
     )
    
   const[newItem,setNewItem]=useState('')
   const[search,setSearch]=useState('')

   const addItem=(item)=>{
    const id= items.length ? items[ items.length-1 ].id
    +1:1;
    const addNewItem={id,checked:false, activity:item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem('toDo list',JSON.stringify(listItems))
  }

    const handleCheck=(id)=>{
     const listItems=items.map(item=>item.id===id ? {...item,checked:!item.checked}: item)
     setItems(listItems)
     localStorage.setItem('toDo list',JSON.stringify(listItems))
    }
    
    const handleDelete=(id)=>{
        const listDelete = items.filter((item)=>
            item.id!==id)
            setItems(listDelete)
    localStorage.setItem('toDo list',JSON.stringify(listDelete))
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(!newItem) return;
      // console.log(newItem);
      addItem(newItem)
      setNewItem('')
    }
  
   return (
    <div className="App">
    
     <Header title="Shafs"/>
     <AddItems 
     newItem={newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit}
     
     />
     <SearchItem 
     search={search}
     setSearch={setSearch}
     />

     <Content items={items.filter(it=>(it.activity).toLowerCase().includes(search.toLowerCase()))}
      setItems={setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
     <Footer
     length={items.length}
     />
    </div>
  )
  }

export default App;
