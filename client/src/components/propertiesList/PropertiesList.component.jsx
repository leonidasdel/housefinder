import React, { useState, useEffect,useRef } from 'react';
import "./PropertiesList.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../redux/actions';
import axios from 'axios'

function PropertiesList(props) {
    const city  =  useSelector(state => state.cityReducer)
    let properties = useSelector(state => state.propertiesReducer)
    const dispatch = useDispatch()
    const prevUser = useRef();
    let tempcity =city
    useEffect(() => {
        console.log(properties == [])
        if(city != ''  ){
            let user = "user"
        let password = "password"
        let basicAuthHeader =  'Basic ' + window.btoa(user + ":" + password)
        axios.get(`http://localhost:8080/houses/${city}`,{headers:{
            authorization:basicAuthHeader
        }})
            .then(res => {
                console.log(res)
                dispatch(action.changePropertiesText(res.data))
            })
            .catch(err => console.log(err))}
    },[city])
    return(
        (
            <section className="properties-container">
                <div className="properties-container_title"> 
                <h3 className="properties-container_title_text">
                   {city!="" && `Showing ${properties.length} properties in ${city}`} 
                </h3>
                </div>
                
               
                <section className="properties-container_houses">
                    {properties.map(el=>  (
                    <div className="properties-container_houses_box">
                        
                        <div className="properties-container_houses_box_img" style={{ backgroundSize:"cover",backgroundPosition:"center",backgroundImage: `url(${require("../../assets/house-pictures/"+ (el.houses_path != null ? el.houses_path.pathLocation  : "home-main.jpg"))})`  }} ></div>
                        <div className="properties-container_houses_box_description">
                            <div className="properties-container_houses_box_description_first">
                                <h3 className="properties-container_houses_box_description_first_text"> {el.streetAddress}, {el.city}</h3>
                                
                            </div>
                            <div className="properties-container_houses_box_description_second">
                                <h3 className="properties-container_houses_box_description_second_text"> {el.bedrooms} BD </h3>
                                <h3 className="properties-container_houses_box_description_second_text"> {el.bathrooms} WC </h3>
                                <h3 className="properties-container_houses_box_description_second_text"> {el.price} €</h3>
                            </div>
                        </div>
                    </div>
                    
                    ))}
                </section>
            </section>
        )
    )
}
export default PropertiesList;