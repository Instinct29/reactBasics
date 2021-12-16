import React,{useState} from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard";

const Resturant = () => {
    const [menuData,setMenuData]= useState(Menu);

    function clickHandler(category){
        const updatedList = Menu.filter((curElem)=> {
            return curElem.category === category;

        });

        setMenuData(updatedList);
    }
   
    return (
        <>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={()=>clickHandler("breakfast")}>Breakfast</button>
                <button className='btn-group__item' onClick={()=>clickHandler("lunch")}>Lunch</button>
                <button className='btn-group__item' onClick={()=>clickHandler("evening")}>Evening</button>
                <button className='btn-group__item' onClick={()=>clickHandler("dinner")}>Dinner</button>
                <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>

            </div>

        </nav>

        <MenuCard x = {menuData}/>
        
            
        </>
    )
}

export default Resturant
