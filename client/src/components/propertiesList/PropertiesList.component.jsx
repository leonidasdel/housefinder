import React, { useState, useEffect,useRef } from 'react';
import "./PropertiesList.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../redux/actions';
import axios from 'axios'
import { BASE_URL } from '../../Constants'
let displayInput = "displayNone"
let displayInput2 = "displayNone"
let displayInput3 = "displayNone"
let propertiesBackup= [];
function PropertiesList(props) {
    const city  =  useSelector(state => state.cityReducer)
    let properties = useSelector(state => state.propertiesReducer)
    const bedrooms = useSelector(state => state.bedroomsReducer)
    const bathrooms = useSelector(state => state.bathroomsReducer)
    const sortPrice = useSelector(state => state.sortReducer)
   
    let initialBedrooms = ["All","1+","2+", "3+", "4+"]
    let initialBathrooms = ["All","1+","2+", "3+", "4+"]
    let initialSort = ["Default", "Price low -> high", "Price high -> low"]
    
    const dispatch = useDispatch()
    
    let tempcity =city

    const filterData = (e) => {
        propertiesBackup =  JSON.parse(JSON.stringify(properties));
       let minPrice = parseInt(document.getElementById("price_min").value) || 0;
       let maxPrice =  parseInt(document.getElementById("price_max").value ) || 2500
       let bedrooms = document.getElementsByClassName("properties-container_filter_house_options_li")[0].textContent
       bedrooms = parseInt(bedrooms[0]) || 0
       let bathrooms = document.getElementsByClassName("properties-container_filter_house_options_li_2")[0].textContent
       bathrooms = parseInt(bathrooms[0]) || 0
       console.log(bathrooms[bathrooms.length - 1])
       let sortingMethod = document.getElementsByClassName("properties-container_filter_house_options_li_3")[0].textContent
       let testProperties =  properties.filter(el => el.price >= minPrice && el.price <= maxPrice && Number(el.bathrooms) >= bathrooms && Number(el.bedrooms) >= bedrooms)
       if(sortingMethod === "Price low -> high") {
        testProperties = testProperties.sort((a,b) => a.price - b.price);
       }
       else if(sortingMethod === "Price high -> low") {
         testProperties = testProperties.sort((a,b) => b.price - a.price);
       }
       dispatch(action.changePropertiesText(testProperties))
    
        
    }

    const changeOrder = (e) => {
        initialBedrooms = initialBedrooms.filter(item => item !== e.target.textContent)
        initialBedrooms.unshift(e.target.textContent)
        console.log(displayInput)
        dispatch(action.changeBedroomsText(initialBedrooms))
        let itemsList = document.querySelectorAll(".properties-container_filter_house_options_li");
        
        for (var i = 0; i < itemsList.length; ++i) {
            console.log("trigg")
            if(i == 0 && displayInput === "displayAll"){
                itemsList[i].classList.add('border-helper');
            }
            else if(i == 0 && displayInput === "displayNone"){
                itemsList[i].classList.remove('border-helper');
            }
            else{
            if(displayInput === "displayAll"){
               
                itemsList[i].classList.add('show-helper');
            }
            else if(displayInput === "displayNone") {
                
               
                itemsList[i].classList.remove('show-helper');
            }}
   
        }
        if(displayInput === "displayAll"){
            console.log("jjjjh")
            displayInput = "displayNone"
            console.log(displayInput)
        }
        else{
            displayInput = "displayAll"
        }
       console.log(displayInput)
        

    }
    const changeOrder2 = (e) => {
        initialBathrooms = initialBathrooms.filter(item => item !== e.target.textContent)
        initialBathrooms.unshift(e.target.textContent)
        console.log(displayInput2)
        dispatch(action.changeBathroomsText(initialBathrooms))
        let itemsList = document.querySelectorAll(".properties-container_filter_house_options_li_2");
        
        for (var i = 0; i < itemsList.length; ++i) {
            console.log("trigg")
            if(i == 0 && displayInput2 === "displayAll"){
                itemsList[i].classList.add('border-helper');
            }
            else if(i == 0 && displayInput2 === "displayNone"){
                itemsList[i].classList.remove('border-helper');
            }
            else{
            if(displayInput2 === "displayAll"){
               
                itemsList[i].classList.add('show-helper');
            }
            else if(displayInput2 === "displayNone") {
                
               
                itemsList[i].classList.remove('show-helper');
            }}
   
        }
        if(displayInput2 === "displayAll"){
            console.log("jjjjh")
            displayInput2 = "displayNone"
            console.log(displayInput2)
        }
        else{
            displayInput2 = "displayAll"
        }
       console.log(displayInput2)
        

    }

    const changeOrder3 = (e) => {
        initialSort = initialSort.filter(item => item !== e.target.textContent)
        initialSort.unshift(e.target.textContent)
        console.log(displayInput3)
        dispatch(action.changeSortText(initialSort))
        let itemsList = document.querySelectorAll(".properties-container_filter_house_options_li_3");
        
        for (var i = 0; i < itemsList.length; ++i) {
            console.log("trigg")
            if(i == 0 && displayInput3 === "displayAll"){
                itemsList[i].classList.add('border-helper');
            }
            else if(i == 0 && displayInput3 == "displayNone"){
                itemsList[i].classList.remove('border-helper');
            }
            else{
            if(displayInput3 === "displayAll"){
               
                itemsList[i].classList.add('show-helper');
            }
            else if(displayInput3 === "displayNone") {
                
               
                itemsList[i].classList.remove('show-helper');
            }}
   
        }
        if(displayInput3 === "displayAll"){
            console.log("jjjjh")
            displayInput3 = "displayNone"
            console.log(displayInput3)
        }
        else{
            displayInput3 = "displayAll"
        }
       console.log(displayInput3)
        

    }

    useEffect(() => {

        
        dispatch(action.changeBedroomsText(initialBedrooms))
        dispatch(action.changeBathroomsText(initialBathrooms))
        dispatch(action.changeSortText(initialSort))

    },[])

    useEffect(() => {
        console.log(properties == [])
        if(city != ''  ){
        axios.get(`${BASE_URL}/houses/${city}`)
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
                <div className="properties-container_filter">
                    <h4 className="properties-container_filter_title">Price Range</h4>
                    <input id="price_min" type="text"  inputMode="decimal" name="price_min" placeholder="From €"/>
                    <input id="price_max" type="text"  inputMode="decimal" name="price_max" placeholder="To €"/>
                    <h4 className="properties-container_filter_title">Bedrooms</h4>
                    <div className="properties-container_filter_house_options"> 
                    
                        <ul >
                            {/* onClick={(e) => toggleDisplay(e)} */}
                            {bedrooms.map((el,index) => index == 0 ? (<li className="properties-container_filter_house_options_li border-helper" onClick={(e)=> changeOrder(e)} >{el}</li>) : (<li onClick={(e)=> changeOrder(e)} className="properties-container_filter_house_options_li show-helper" >{el}</li>) )}

                         

                        </ul>
                       
                    </div>
                    <h4 className="properties-container_filter_title">WC</h4>
                    <div className="properties-container_filter_house_options"> 
                    
                        <ul >
                            {/* onClick={(e) => toggleDisplay(e)} */}
                            {bathrooms.map((el,index) => index == 0 ? (<li className="properties-container_filter_house_options_li_2 border-helper" onClick={(e)=> changeOrder2(e)} >{el}</li>) : (<li onClick={(e)=> changeOrder2(e)} className="properties-container_filter_house_options_li_2 show-helper">{el}</li>) )}

                         

                        </ul>
                       
                    </div>
                    <h4 className="properties-container_filter_title">Sort</h4>
                    <div className="properties-container_filter_house_options"> 
                    
                        <ul id="width-helper" >
                            {/* onClick={(e) => toggleDisplay(e)} */}
                            {sortPrice.map((el,index) => index == 0 ? (<li className="properties-container_filter_house_options_li_3 border-helper" onClick={(e)=> changeOrder3(e)} >{el}</li>) : (<li onClick={(e)=> changeOrder3(e)} className="properties-container_filter_house_options_li_3 show-helper">{el}</li>) )}

                         

                        </ul>
                       
                    </div>
                    <button className="properties-container_filter_submit" onClick={(e) => filterData(e)} type="submit">&gt;</button>
                </div>
               
                <section className="properties-container_houses">
                    {properties.map(el=>  (
                    <div className="properties-container_houses_box">
                        {console.log(`url(https://house.fra1.digitaloceanspaces.com/files/${el.houses_path != null ? el.houses_path.pathLocation : "30875dfa-338a-49fd-b498-b5c83900e6d5.jpg"}`)}
                        <div className="properties-container_houses_box_img" style={{ backgroundSize:"cover",backgroundPosition:"center",backgroundImage: `url(https://house.fra1.digitaloceanspaces.com/files/${el.houses_path != null ? el.houses_path.pathLocation : "30875dfa-338a-49fd-b498-b5c83900e6d5.jpg"})` }} ></div>
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