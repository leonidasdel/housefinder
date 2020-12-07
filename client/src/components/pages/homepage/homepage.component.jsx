import React,{ useEffect} from 'react';
import "./homepage.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../../redux/actions';

// initialize google maps
const google = window.google = window.google ? window.google : {} 
var options = {
    types: ['(cities)'],
    componentRestrictions: {country: "gb"}
   };


// redux actions
// const searchTerm  =  useSelector(state => state.searchReducer)
// const dispatch = useDispatch()

function HomePage(props)  {
 
// redux actions
const searchTerm  =  useSelector(state => state.searchReducer)
const dispatch = useDispatch()
    
    
    
      useEffect(()=>{
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('address_input'), options)});
        // autocomplete.addListener("place_changed", handlePlaceSelect)}
        //     )
       
        
     
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
                        <input   type="search" id="address_input" placeholder="Manchester, Blackpool, Liverpool..." className="mainPage_search_bar_input" />
                        <i className="fas fa-search"></i>
                    </form>
                </section>

            </main>
        )
    }

export default HomePage;