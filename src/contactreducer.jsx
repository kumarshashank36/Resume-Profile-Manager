const MyContact = (state, action) =>{
    let data = {
        "mobile":"",
        "email":"",
        "localadd":"",
        "permadd":"",
        "refadd":"",
    }

    let contactData = Object.assign(data, state)
    if(action.type === "contact"){
        contactData = action.info
    }

    return contactData

}

export default MyContact