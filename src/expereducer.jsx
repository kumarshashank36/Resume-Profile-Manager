const MyExper = (state, action) =>{
    let data = {
        "totexper":"",
        "skills":""
    }

    let experData = Object.assign(data, state)
    if(action.type === "experience"){
        experData = action.info
    }

    return experData

}

export default MyExper