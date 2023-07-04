import React,{ useEffect} from 'react';
import SellHouse from '../../sellHouse/SellHouse.component';

function houseSubmit(props){
    
    return(
        <section className="container_page">
            <section className="container_page_title">
                <h1 className="container_page_title_text">Put for rent your property</h1>
            </section>
            <SellHouse/>
        </section>
      
    )
}
export default houseSubmit;