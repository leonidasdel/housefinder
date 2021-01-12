import React,{ useEffect,useState } from 'react';
import "./SellHouse.styles.scss"

const google = window.google = window.google ? window.google : {} 
var geocoder;
var options = {
    componentRestrictions: {country: "gb"}
   };
var formData;
function SellHouse(props){

    useEffect(()=> {
        let autocomplete = new google.maps.places.Autocomplete(document.getElementById('street_address'), options);
        geocoder = new google.maps.Geocoder();
        formData = new FormData();
    })

    const file = document.querySelector('#file');
    let changeFile =  (e) => {
        // Get the selected file
        const [file] = e.target.files;
        
        // Get the file name and size
        const { name: fileName, size } = file;
        // Convert size in bytes to kilo bytes
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            document.getElementById("helper-notify").style.display ="none"
            document.querySelector('.file-name').textContent = fileName;
            console.log(e.target.files[0])
            formData = new FormData();
            formData.append('house',e.target.files[0])
            console.log(formData)

        }else{
            alert("Only jpg/jpeg and png files are allowed!");
        } 
        
       
};

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
       
        let objData = {
            "firsName": e.target[0].value
        }
        formData.append('objArr', JSON.stringify( objData))
        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
    }

    const autofillAddress = (e) => {
        geocoder.geocode({ address: e.target.value }, function(results, status) {
            let possibleAddresses = results[0].address_components
            console.log(possibleAddresses)
            for (let i =0;i<possibleAddresses.length;i++){
                if(possibleAddresses[i].types[0] === "postal_town"){
                    document.getElementById("city").value = possibleAddresses[i].long_name
                }
                else if(possibleAddresses[i].types[0] === "country"){
                    document.getElementById("country").value = possibleAddresses[i].long_name
                }
                else if(possibleAddresses[i].types[0] === "postal_code"){
                    document.getElementById("postal_code").value = possibleAddresses[i].long_name
                }
            }
        })
    }

    return (
    <section className="container_page_form">
        <div id="picture"></div>
        <div id="form_sell" className="form_sell">
            <div className="form_sell_container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form_sell_container_row">
                    <div className="form_sell_container_row_item">
                    <input id="first_name" type="text" className="input-field_text" placeholder="First Name"  />
                        <label className="input-field_label" htmlFor="first_name">First Name</label>
                    </div>
                    <div className="form_sell_container_row_item">
                    <input id="last_name" type="text" className="input-field_text" placeholder="Last Name"/>
                        <label className="input-field_label" htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="form_sell_container_row">
                    <div className="form_sell_container_row_item">
                    <input id="email" type="text" className="input-field_text" placeholder="Email"/>
                        <label className="input-field_label" htmlFor="email">Email</label>
                    </div>
                    <div className="form_sell_container_row_item">
                    <input id="phone_number" type="text" className="input-field_text" placeholder="Phone Number"/>
                        <label className="input-field_label" htmlFor="phone_number">Phone Number</label>
                    </div>
                </div>
                <div className="form_sell_container_row">
                    <div className="form_sell_container_row_item">
                    <input id="street_address" type="text" className="input-field_text" placeholder="Street Address" onBlur={(e) => autofillAddress(e)}/>
                        <label className="input-field_label" htmlFor="street_address">Street Address</label>
                    </div>
                    <div className="form_sell_container_row_item">
                    <input id="postal_code" type="text" className="input-field_text" placeholder="Postal Code"/>
                        <label className="input-field_label" htmlFor="postal_code">Postal Code</label>
                    </div>
                </div>
                <div className="form_sell_container_row">
                    <div className="form_sell_container_row_item">
                    <input id="city" type="text" className="input-field_text" placeholder="City"/>
                        <label className="input-field_label" htmlFor="city">City</label>
                    </div>
                    <div className="form_sell_container_row_item">
                    <input id="country" type="text" className="input-field_text" placeholder="Country"/>
                        <label className="input-field_label" htmlFor="country">Country</label>
                    </div>
                </div>
                <div className="form_sell_container_row">
                    <div className="form_sell_container_row_item">
                    <input id="bedrooms" type="text" className="input-field_text" placeholder="Bedrooms(only numbers)"/>
                        <label className="input-field_label" htmlFor="bedrooms">Bedrooms</label>
                    </div>
                    <div className="form_sell_container_row_item">
                    <input id="bathrooms" type="text" className="input-field_text" placeholder="Bathrooms(only numbers)"/>
                        <label className="input-field_label" htmlFor="bathrooms">Bathrooms</label>
                    </div>
                </div>
                <div className="form_sell_container_row">
                    <div className="form_sell_container_row_item">
                    <input id="square_meters" type="text" className="input-field_text" placeholder="Sqm(only numbers)"/>
                        <label className="input-field_label" htmlFor="square_meters">Square Meters</label>
                    </div>
                    <div className="form_sell_container_row_item">
                    <input id="price" type="text" className="input-field_text" placeholder="Price(only numbers)"/>
                        <label className="input-field_label" htmlFor="price">Price</label>
                    </div>
                </div>
                
                <div class="file-input">
                    <input type="file" id="file" class="file" accept="image/x-png,image/jpg,image/jpeg"  onChange={(e) =>changeFile(e)}/>
                    <label for="file">
                        Select file
                        <p className="file-name"></p>
                    </label>
                     <span id="helper-notify">(Only accepts png,jpeg and jpg)</span>
                </div>
                <button type="submit">Submit</button>
                </form>
                
            </div>
        </div>
    
    </section>
    )
}
export default SellHouse;