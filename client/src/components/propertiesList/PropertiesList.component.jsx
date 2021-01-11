import React, { useState, useEffect } from 'react';
import "./PropertiesList.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../redux/actions';
import axios from 'axios'

function PropertiesList(props) {
    const city  =  useSelector(state => state.cityReducer)
    let properties = useSelector(state => state.propertiesReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(city)
        if(city != '' ){
        axios.get(`http://localhost:8080/houses/${city}`)
            .then(res => {
                console.log(res)
                dispatch(action.changePropertiesText(res.data))
            })
            .catch(err => console.log(err))}
    })
    return(
        (
            <section className="properties-container">
                <h3 className="properties-container_title">
                    Showing {properties.length} properties in {city}
                </h3>
                {properties.map(el=>  <h1>{el.firstName}</h1>)}
            </section>
        )
    )
}
export default PropertiesList;