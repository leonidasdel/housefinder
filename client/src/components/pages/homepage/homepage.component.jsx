import React,{ useEffect, useState} from 'react';
import "./homepage.styles.scss"
import {useSelector,useDispatch} from 'react-redux'
import * as action from '../../redux/actions';

// initialize google maps and restrict results to cities and uk
const google = window.google = window.google ? window.google : {} 
var options = {
    types: ['(cities)'],
    componentRestrictions: {country: "gb"}
   };


function HomePage(props)  {

    const [flagWrongSearch,setFlagWrongSearch] = useState(false)
 
    // redux actions
    const searchTerm  =  useSelector(state => state.searchReducer)
    const dispatch = useDispatch()
    
    
    
      useEffect(()=>
      {
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('address_input'), options)
        if(props.location.state){
            setFlagWrongSearch(true)}
      });

      const handleSubmit = (e) => {
            e.preventDefault()
            let address = document.getElementById('address_input').value
            dispatch(action.changeSearchText(address))
            props.history.push('/houses');
        }


        return(
            <main className="mainPage">
                 { flagWrongSearch && <div className="alert">               
                <h5 className="alert_text">You need to search a property to see all the listings there!</h5>
                <span className="closebtn" onClick={(e) => {
                    document.getElementsByClassName("alert")[0].style.opacity ='0'
                    setTimeout(() => {  document.getElementsByClassName("alert")[0].style.display = "none"; },600)
                 } } >&times;</span>
                </div>   }
                <section className="mainPage_search">
                    <h1 className="mainPage_search_title">
                       Search for Apartments<span className="mainPage_search_title_span">With just one click!</span>
                    </h1>
                    <form onSubmit={(e) => handleSubmit(e)} action="" className="mainPage_search_bar">
                        <input type="search" id="address_input" placeholder="Manchester, Blackpool, Liverpool..." defaultValue="London" className="mainPage_search_bar_input" />
                        <button type="submit" className="btn btn-success" >
                            <i type="submit" className="fas fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </section>

            </main>
        )
    }

export default HomePage;