import React, { useState, useEffect, useRef } from 'react';
import "./PropertiesList.styles.scss"
import { useSelector, useDispatch } from 'react-redux'
import * as action from '../redux/actions';
import axios from 'axios'
import { BASE_URL } from '../../Constants'

let propertiesBackup = [];
function PropertiesList(props) {
    const city = useSelector(state => state.cityReducer)
    const properties = useSelector(state => state.propertiesReducer)
    const bedrooms = useSelector(state => state.bedroomsReducer)
    const bathrooms = useSelector(state => state.bathroomsReducer)
    const sortPrice = useSelector(state => state.sortReducer)

    let initialBedrooms = ["All", "1+", "2+", "3+", "4+"]
    let initialBathrooms = ["All", "1+", "2+", "3+", "4+"]
    let initialSort = ["Default", "Price low -> high", "Price high -> low"]

    const dispatch = useDispatch()

    let tempcity = city

    const filterData = (e) => {
        if(propertiesBackup === undefined || propertiesBackup.length == 0){
            console.log("hello world")
            propertiesBackup = JSON.parse(JSON.stringify(properties));
        }
        
        console.log(propertiesBackup)
        let minPrice = parseInt(document.getElementById("price_min").value) || 0;
        let maxPrice = parseInt(document.getElementById("price_max").value) || 2500
        let bedrooms = document.getElementsByClassName("properties-container_filter_house_options_li")[0].textContent
        bedrooms = parseInt(bedrooms[0]) || 0
        let bathrooms = document.getElementsByClassName("properties-container_filter_house_options_li_2")[0].textContent
        bathrooms = parseInt(bathrooms[0]) || 0
        let sortingMethod = document.getElementsByClassName("properties-container_filter_house_options_li_3")[0].textContent
        let testProperties = propertiesBackup.filter(el => el.price >= minPrice && el.price <= maxPrice && Number(el.bathrooms) >= bathrooms && Number(el.bedrooms) >= bedrooms)
        if (sortingMethod === "Price low -> high") {
            testProperties = testProperties.sort((a, b) => a.price - b.price);
        }
        else if (sortingMethod === "Price high -> low") {
            testProperties = testProperties.sort((a, b) => b.price - a.price);
        }
        dispatch(action.changePropertiesText(testProperties))
    }

    const changeOrder = (e) => {
        let nameOfClass = e.target.classList.value.split(" ")[0]
        let secondNameOfClass = e.target.classList.value.split(" ")[1]

        switch (nameOfClass) {
            case "properties-container_filter_house_options_li":
                initialBedrooms = initialBedrooms.filter(item => item !== e.target.textContent)
                initialBedrooms.unshift(e.target.textContent)
                dispatch(action.changeBedroomsText(initialBedrooms))
                break;
            case "properties-container_filter_house_options_li_2":
                initialBathrooms = initialBathrooms.filter(item => item !== e.target.textContent)
                initialBathrooms.unshift(e.target.textContent)
                dispatch(action.changeBathroomsText(initialBathrooms))
                break;
            case "properties-container_filter_house_options_li_3":
                initialSort = initialSort.filter(item => item !== e.target.textContent)
                initialSort.unshift(e.target.textContent)
                dispatch(action.changeSortText(initialSort))
                break;
        }
        let itemsList = document.querySelectorAll(`.${nameOfClass}`);
        for (let i = 0; i < itemsList.length; ++i) {
            if (i == 0 && secondNameOfClass === undefined) {
                itemsList[i].classList.add('border-helper');
            }
            else if (i == 0) {
                itemsList[i].classList.remove('border-helper');
            }
            else {
                if (secondNameOfClass === undefined) {
                    itemsList[i].classList.add('show-helper');
                }
                else {
                    itemsList[i].classList.remove('show-helper');
                }
            }

        }

    }

    useEffect(() => {
        dispatch(action.changeBedroomsText(initialBedrooms))
        dispatch(action.changeBathroomsText(initialBathrooms))
        dispatch(action.changeSortText(initialSort))
    }, [])

    useEffect(() => {

        if (city != '') {
            axios.get(`${BASE_URL}/houses/${city}`)
                .then(res => {
                    
                    dispatch(action.changePropertiesText(res.data))
                })
                .catch(err => console.log(err))
        }
        propertiesBackup = []
    }, [city])
    return (
        (
            <section className="properties-container">
                <div className="properties-container_title">
                    <h3 className="properties-container_title_text">
                        {city != "" && `Showing ${properties.length} properties in ${city}`}
                    </h3>
                </div>
                <div className="properties-container_filter">
                    <h4 className="properties-container_filter_title">Price Range</h4>
                    <input id="price_min" type="text" inputMode="decimal" name="price_min" placeholder="From €" />
                    <input id="price_max" type="text" inputMode="decimal" name="price_max" placeholder="To €" />
                    <h4 className="properties-container_filter_title">Bedrooms</h4>
                    <div className="properties-container_filter_house_options">

                        <ul >
                            {bedrooms.map((el, index) => index == 0 ? (<li className="properties-container_filter_house_options_li border-helper"
                                onClick={(e) => changeOrder(e)} >{el}</li>) : (<li onClick={(e) => changeOrder(e)} className="properties-container_filter_house_options_li show-helper" >{el}</li>))}
                        </ul>

                    </div>
                    <h4 className="properties-container_filter_title">WC</h4>
                    <div className="properties-container_filter_house_options">

                        <ul >
                            {bathrooms.map((el, index) => index == 0 ? (<li className="properties-container_filter_house_options_li_2 border-helper" 
                            onClick={(e) => changeOrder(e)} >{el}</li>) : (<li onClick={(e) => changeOrder(e)} className="properties-container_filter_house_options_li_2 show-helper">{el}</li>))}



                        </ul>

                    </div>
                    <h4 className="properties-container_filter_title">Sort</h4>
                    <div className="properties-container_filter_house_options">

                        <ul id="width-helper" >
                            {sortPrice.map((el, index) => index == 0 ? (<li className="properties-container_filter_house_options_li_3 border-helper" 
                            onClick={(e) => changeOrder(e)} >{el}</li>) : (<li onClick={(e) => changeOrder(e)} className="properties-container_filter_house_options_li_3 show-helper">{el}</li>))}
                        </ul>

                    </div>
                    <button className="properties-container_filter_submit" onClick={(e) => filterData(e)} type="submit">&gt;</button>
                </div>

                <section className="properties-container_houses">
                    {properties.map(el => (
                        <div id={el.houses_path.pathLocation.split(".")[0]} className="properties-container_houses_box">
                            <div className="properties-container_houses_box_img" style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${process.env.REACT_APP_STORAGE_BASE_PATH}${el.houses_path.pathLocation})` }} ></div>
                            <div className="properties-container_houses_box_description">
                                <div className="properties-container_houses_box_description_first">
                                    <h3 className="properties-container_houses_box_description_first_text"> {el.streetAddress}, {el.city}</h3>
                                    <h3 className="properties-container_houses_box_description_first_text"> {el.squareMeters} sqm</h3>
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