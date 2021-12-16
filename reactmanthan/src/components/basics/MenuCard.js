import React from 'react'

const MenuCard = ({x}) => {
    
    return (
        <>
        <section className='main-card--cointainer'>
        {x.map((y)=>{
            return ( <>
            <div className='card-container'key={y.id}>
             <div className = "card">
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>
                        {y.id}
                    </span>
                    <span  className='card-author subtile'>{y.name}</span>
                    <h2 className='card-title'>{y.name}</h2>
                    <span className='card-description subtle'>
                        {y.description}
                    </span>
                    <div className='card-read'>Read</div>
                    
                    </div>
                     <img src={y.image} alt="images" className='card-media' /> 
                    <span className='card-tag subtle'>Order Now</span>
            </div>

        </div>
        </>
        
        
            )
               
            
        })}
            
            
        

            </section>
        </>
    )
}

export default MenuCard
