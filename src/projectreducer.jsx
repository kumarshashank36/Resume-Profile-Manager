const MyProject = (state, action) =>{
    let data = {
        "projname":"",
        "projdetails":"",
        "techused":"",
        "url":""
    }

    let projData = Object.assign(data, state)
    if(action.type === "project"){
        projData = action.info
    }

    return projData
}

export default MyProject