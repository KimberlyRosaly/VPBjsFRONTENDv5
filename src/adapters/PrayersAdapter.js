// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-S E R V I C E aka adapter
// LOAD UP THE  A P I  YOU MADE THAT CONTAINS DATABASE
//                 CREATE THE O B J E C T w/ CONSTRUCTOR FUNCTION
class PrayersAdapter {

    constructor() {
        this.baseURL = 'http://127.0.0.1:3000/api/v1/prayers/'
    }

    // T H E   A C T U A L   S E R V I C E
    getPrayers() {
        //? (1) GRAB THE FIRST RESPONSE WITH THE URL
        return fetch( this.baseURL )
        //? (2) CAPTURE THE RESPONSE => TURN STRING INTO JSON OBJECT
        .then( response => response.json() )
        //? (3) CAPTURE THE RESPONSE AND ..
        // .then( prayers => {})
    }

    createPrayer(bodyValue, nameValue, cityValue, stateValue) {
        // MODEL ATTRIBUTES : INPUTS CAPTURED
        const prayer = {
            body: bodyValue,
            human_name: nameValue,
            human_city: cityValue,
            human_state: stateValue
        }

        // ALLOW DATA TO PASS THROUGH RAILS API
        let configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify( { prayer } )
        }

        return fetch( this.baseURL, configObject )
        .then(response => response.json())        

    }

    

}

