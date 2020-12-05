import React,{useEffect} from 'react';
import {useSelector,useDispatch,shouldComponentUpdate} from 'react-redux'
import * as action from '../redux/actions';

var H = window.H = window.H ? window.H : {}
function RentalsMap(props) {
    const searchTerm  =  useSelector(state => state.searchReducer)
    const dispatch = useDispatch()
        

    useEffect(()=>{
       
            
            var platform = new H.service.Platform({
                'apikey': 'wZRhT3ips1BsXM2p83hd0kv8XfA1OJGaQm6Hc1QV1_k'
              });
        
       // Get the default map types from the Platform object:
    var defaultLayers = platform.createDefaultLayers();
         
    // Instantiate the map:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
            zoom: 6,
            center: { lat:  38.842242, lng:24.536632 }
        }); 

    // Create the default UI:
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    var service = platform.getSearchService();
    window.addEventListener('resize', () => map.getViewPort().resize());
    service.geocode({
        q: searchTerm
      }, (result) => {
        // Add a marker for each location found

            console.log(result)
            var bbox = new H.geo.Rect(result.items[0].mapView.north,result.items[0].mapView.west,result.items[0].mapView.south,result.items[0].mapView.east);
            // map.setCenter({lat:result.items[0].position.lat, lng:result.items[0].position.lng});
            map.getViewModel().setLookAtData({
                bounds: bbox
              });

        });
      

    }, [])

    
        return(
            <div style={{width: "46%",height: "100%"}} id="mapContainer"></div>
        )
    }

export default RentalsMap;