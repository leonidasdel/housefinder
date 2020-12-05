import React,{ useEffect} from 'react';
import "./homepage.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../../redux/actions';

// initialize places
var places = window.places = window.places ? window.places : {}

// redux actions
// const searchTerm  =  useSelector(state => state.searchReducer)
// const dispatch = useDispatch()

function HomePage(props)  {
 
// redux actions
const searchTerm  =  useSelector(state => state.searchReducer)
const dispatch = useDispatch()
    
    
    
      useEffect(()=>{
            var fixedOptions = {
                appId: 'plSOVEGFQIJC',
                apiKey: '9c3882c9bb8f2d0ef574bab66820aabc',
                container: document.querySelector('#address_input'),
                templates: {
                    value: function(suggestion) {
                      return `${suggestion.name},  ${suggestion.country} ${suggestion.administrative}`;
                    },
                    suggestion: function(suggestion) {
                      return `${suggestion.name} , ${suggestion.country}` ;
                    }}
              };

              
              
              var reconfigurableOptions = {
                language: 'en', // Receives results in Greece
                countries: ['gb'], // Search in Greece
                type: 'city', // Search only for cities names
                aroundLatLngViaIP: false // disable the extra search/boost around the source IP
              };
              var placesInstance = places(fixedOptions).configure(reconfigurableOptions);})
       
        
     
        function handleSubmit(e){
            e.preventDefault()
            let text = document.getElementById('address_input').value
            dispatch(action.changeSearchText(text))
            props.history.push('/houses');
        }


        return(
            <main className="mainPage">
                <section className="mainPage_search">
                    <h1 className="mainPage_search_title">
                        Εύρεση Διαμερισμάτων<span className="mainPage_search_title_span">Με ένα μόνο κλικ!</span>
                    </h1>
                    <form onSubmit={(e) => handleSubmit(e)} action="" className="mainPage_search_bar">
                        <input   type="search" id="address_input" placeholder="Αθήνα,Θεσσαλονίκη,Πάτρα..." className="mainPage_search_bar_input" />
                        <i className="fas fa-search"></i>
                    </form>
                </section>

            </main>
        )
    }

export default HomePage;