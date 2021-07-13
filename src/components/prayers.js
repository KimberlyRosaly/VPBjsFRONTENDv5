// CREATE A NEW - MULTIPLE PRAYERS - OBJECT, CONTAINING ALL PRAYERS FROM API
// AKIN TO INDEX

class Prayers {
    constructor() {
        // CREATE AN EMPTY PRAYER.ALL ARRAY
        this.prayers = []
        // GRABS THE F E T C H  S E R V I C E  WITH THE API'S URL
        this.adapter = new PrayersAdapter()

        //? 🕫 INVOKE L I S T E N E R S, ETC 🕫=-=-=--=-=-=-=-=-=-==-=-=-=
        this.iBindingsEventListeners()
        //? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
        // this.starBindingsEventListeners() //*<--CUTE STAR BUTTON INVOCATION
        
        this.fetchAndLoadPrayers()
    }
    
    //? BINDINGS &  E V E N T   L I S T E N E R S 🕬 =-=-=-=-=-=-=-=-=-=-=-=
    iBindingsEventListeners() {

            //? STORE  N O D E S  FOR  A C C E S S   🖉
        //? NODE ON DOM TO HOLD ALL PRAYERS
        this.container = document.getElementById('prayers-place')
        //? FORM NODE TO INPUT NEW PRAYER REQUEST
        this.requestForm = document.getElementById('new-prayer-form')
        //? FORM NODE'S CHILDREN
        this.newPrayerBody = document.getElementById('n-p-b')
        this.newPrayerName = document.getElementById('n-p-n')
        this.newPrayerCity = document.getElementById('n-p-c')
        this.newPrayerState = document.getElementById('n-p-s')

            //? EVENT  L I S T E N E R S
        this.requestForm.addEventListener( 'submit', this.createPrayer.bind(this) )
        //! TELL LISTENER TO  HARD BIND 'this'
        //! TO DEAL WITH PRAYERS CLASS -  *not* THE FORM ITSELF
        //! Cernan's video - part 2 - 25:00

// ===============================================================================
        //* PRETEND YOU KNOW HOW TO USE THE STAR LIKES
        document.addEventListener("DOMContentLoaded", () => {

            const EMPTY_STAR = 'P R ☆ Y'
            const FULL_STAR = 'P R ★ Y'

            // this.starButtons = document.getElementsByName('star-button') //<---returns NodeList []
            this.starButtons = document.getElementsByClassName('star-button') //<---returns HTML Collection
             console.log('youre okay, take a deep breath', this.starButtons)
                
            for (const star of this.starButtons) {
                    console.log(star)
                    debugger;
                        this.star.addEventListener("click", () => {
                            console.log(star)
                            debugger;
                        })
            }
            
            
        })
        
        

    
// ===============================================================================
    }
    //? =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    /*
    starBindingsEventListeners() {
        
            //BIND THE BUTTONS
            const starButtons = document.getElementsByName('star-button')
            console.log(this)
            console.log(starButtons)

            //LOOP THROUGH HTML COLLECTION
            for (star of starButtons) {
                star.addEventListener("click", (e) => {
                    this.adapater.getPrayers()
                    .then( console.log ('DO SOMETHING'))
                })
            }
            
    }
    */

    createPrayer(event) {
        //console.log(this) // <---<form id="new-prayer-form"
                        //VERSUS
        //console.log(this) // <---Object { prayers: (2) [...] 
        // 'THIS' IS THE FORM - BUT WE WANT TO HANDLE THE PRAYERS CLASS - HARD BIND IT TO PASS IT THROUGH
        event.preventDefault()
        console.log('upon SUBMIT click event - INSIDE CREATE PRAYER FUNCTION' )

        //? STORE THE newPRAYER INPUTS STRING VALUES
        const bodyValue = this.newPrayerBody.value
        const nameValue = this.newPrayerName.value
        const cityValue = this.newPrayerCity.value
        const stateValue = this.newPrayerState.value
        //? RUN THE VALUEs INTO THE ADAPTER TO POST TO DATABASE
        // Object { id: 8, body: "it's me again...", counter: 0, human_name: "Rixin", human_city: "", human_state: "", created_at: "2021-07-12T17:53:34.213Z", updated_at: "2021-07-12T17:53:34.213Z" }
        // THEN UPDATE/POPULATE THE JS PRAYER.ALL [] WITH A BEAUTIFUL NEW OBJECT CONSTRUCTED
        this.adapter.createPrayer(bodyValue, nameValue, cityValue, stateValue).then( nPrayer => {
            this.prayers.push( new Prayer(nPrayer) )
            
            //CLEAR THE FORM INPUT SPACES
            this.newPrayerBody.value = ''
            this.newPrayerName.value = ''
            this.newPrayerCity.value = ''
            this.newPrayerState.value = ''

            //NEW PRAYER SUBMITTED VIA FORM? CALL 'RENDER' FOR NO PAGE REFRESH TO BE NEEDED
            this.render()
        })}             
    

    fetchAndLoadPrayers() {
        this.adapter.getPrayers()
            .then( console.log( 'FETCHING & LOADING PRAYERS'))            
           
            // BETTER TO ✓ CREATE A CLASS & ✓ INSTANTIATE NEW OBJECTS w/ IT & PUSH         
            .then(prayers => {prayers.forEach( prayer => this.prayers.push( new Prayer(prayer) ) )
                console.log( prayers ) 
            })

            .then( () => {
                this.render()
            })
    }

    render() {
        console.log('PRAYERS.JS > RENDER FUNCTION LOADING')       

        // GRAB THE 'ALL' ARRAY OF OBJECTS & ITERATE INTO HTML STRING FOR DOM
        // RENDER THE REQUEST BEAUTIFULLY W/ HTML ♥
        const prayersDisplay = this.prayers.map( prayer => prayer.renderRequest() ).join('')
        
        // INJECT INTO DOM CONTAINER
        this.container.innerHTML = prayersDisplay
        
    }

} //<----P R A Y E R S classEND
