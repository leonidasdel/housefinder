import React,{useEffect} from 'react';
import {useSelector,useDispatch,shouldComponentUpdate} from 'react-redux'
import * as action from '../redux/actions';
import axios from "axios"

const google = (window.google = window.google ? window.google : {});
var geocoder;
var map;
var marker = [];
var options = {
	types: [ '(cities)' ],
	componentRestrictions: { country: 'gr' }
};

function RentalsMap(props) {
    const searchTerm  =  useSelector(state => state.searchReducer)
    const dispatch = useDispatch()
        
 
   

    useEffect(()=>{
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);
        
        geocoder = new google.maps.Geocoder();
        
		map = new google.maps.Map(document.getElementById('mapContainer'), {
			center: { lat: 54.3005, lng: -3.2522809 },
            zoom: 6,
            
			scrollwheel: false
        });
    
        if(searchTerm != "") geocodeLocation(searchTerm);
}

        
, [])

const geocodeLocation = (searchTerm) => {
    let city;
    console.log(searchTerm)
    geocoder.geocode({ address: searchTerm }, function(results, status) {
        console.log(results,status)
        if (status === 'OK'){
            map.setCenter(results[0].geometry.location);
            map.fitBounds(results[0].geometry.viewport);
            let possibleCities = results[0].address_components
            
             for (let i =0;i<possibleCities.length;i++){
                 console.log(possibleCities)
                if(possibleCities[i].types[0] == "locality" || possibleCities[i].types[0] == "postal_town") {
                    
                    city = possibleCities[i].long_name 
                    dispatch(action.changeCityText(city))
                    break;
                }
            }
            console.log(city)
            
        }
    })
}

    
        return(
            <div style={{width: "46%",height: "100%"}} id="mapContainer"></div>
        )
    }

export default RentalsMap;