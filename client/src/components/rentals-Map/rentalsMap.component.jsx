import React,{useEffect} from 'react';
import {useSelector,useDispatch,shouldComponentUpdate} from 'react-redux'
import * as action from '../redux/actions';
import axios from "axios"
import icon from '../../assets/icons8-home-32.png';


const google = (window.google = window.google ? window.google : {});
var geocoder;
var map;
var marker = [];
let tempMarker;
var infowindow = new google.maps.InfoWindow();


var options = {
	types: [ '(cities)' ],
	componentRestrictions: { country: 'gr' }
};

function RentalsMap(props) {
    const searchTerm  =  useSelector(state => state.searchReducer)
    const dispatch = useDispatch()
    const markers = useSelector(state => state.propertiesReducer)    
 
   

    useEffect(()=>{
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);
        
        geocoder = new google.maps.Geocoder();
        
		map = new google.maps.Map(document.getElementById('mapContainer'), {
			center: { lat: 54.3005, lng: -3.2522809 },
            zoom: 6,
            scrollwheel: false
            
        });
    
        if(searchTerm != "") geocodeLocation(searchTerm);
}, [])


useEffect(() => {
    for(let i =0; i<marker.length;i++){
        marker[i].setMap(null);
    }
    marker = [];
   
    
    for (let i = 0; i < markers.length; i++) {
        let markerId = markers[i].houses_path.pathLocation.split('.')[0]
        
        tempMarker = new google.maps.Marker({
          position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
          map: map,
          icon: icon
        })
            
        marker.push(tempMarker)

        // google.maps.event.addListener(marker[i], 'click', function () {
        //     infowindow.setContent(`${markers[i].streetAddress} <br/> ${markers[i].bedrooms} BD ${markers[i].bathrooms} WC ${markers[i].price}€` )
        //     infowindow.open(map, marker[i]);
        // });
        google.maps.event.addListener(marker[i], 'mouseover', () => {
            document.getElementById(markerId).style.transform = 'translateY(-0.1em) scale(1.03)'
            document.getElementById(markerId).style.boxShadow = '0 0.8em 4em rgba(0, 0, 0, 0.199)'
            infowindow.setContent(`${markers[i].streetAddress} <br/> ${markers[i].bedrooms} BD ${markers[i].bathrooms} WC ${markers[i].price}€` )
            infowindow.open(map, marker[i]);
        })
        google.maps.event.addListener(marker[i], 'mouseout', () => {
            document.getElementById(markerId).style.transform = '' // removes the styling of mouseover for transform
            document.getElementById(markerId).style.boxShadow = '' // removes the styling of mouseover for box shadow
            infowindow.close(map,marker[i])
        })
        
            
        

}},[markers])

const geocodeLocation = (searchTerm) => {
    let city;
    geocoder.geocode({ address: searchTerm }, function(results, status) {
        if (status === 'OK'){
            map.setCenter(results[0].geometry.location);
            map.fitBounds(results[0].geometry.viewport);
            let possibleCities = results[0].address_components
            
             for (let i =0;i<possibleCities.length;i++){
                if(possibleCities[i].types[0] == "locality" || possibleCities[i].types[0] == "postal_town") {
                    
                    city = possibleCities[i].long_name 
                    dispatch(action.changeCityText(city))
                    break;
                }
            }
        }
    })
}

    
        return(
            <div style={{width: "46%",height: "100%"}} id="mapContainer"></div>
        )
    }

export default RentalsMap;