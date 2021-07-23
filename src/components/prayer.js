// CREATE A NEW - SINGLE PRAYER - OBJECT
// PRAYEROBJECT IS IN JSON

class Prayer {
    constructor(prayerObject) {
        this.id = prayerObject.id
        this.body = prayerObject.body
        this.counter = prayerObject.counter
        this.human_name = prayerObject.human_name
        this.human_city = prayerObject.human_city
        this.human_state = prayerObject.human_state
        this.created_at = prayerObject.created_at
      }

    renderRequest() {
        const EMPTY_STAR = 'P R ☆ Y'
        // const FULL_STAR = 'P R ★ Y'

        return `
            <li class="card-content">
                | ${ this.human_name } |
                ${ this.human_city }, ${ this.human_state } | ${ this.created_at } <br>                
                ${ this.counter } others have joined in prayer
                <i>${ this.body }</i>
                <button class="star-button" name="star-button">${ EMPTY_STAR }</button><br>
            </li>            
            `
    }     

}

/*
1) renderRequest returns ListItemStringPrayer
2) renderButton returns StarButtonString
    StarButton must hold on to :prayer_id | prayer.id
        MAYBE STORE IT IN A name="prayer[`${this.id}]`"???
        LISTENER ATTACHED
        WHEN CLICKED - 
3)  


    Prayers
        pushButtons(){
            '<button class="star-button">${ EMPTY_STAR }</button>'
        }


JAZMIN : : 


*/
