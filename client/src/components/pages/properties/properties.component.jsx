import React,{ useEffect} from 'react';
import "./properties.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../../redux/actions';
import RentalsMap from "../../rentals-Map/rentalsMap.component"

function Properties(props) {

    return(
        <section className="properties_section">
            <RentalsMap/>
            <div>Properties</div>
        </section>
      
    )
}
 export default Properties;