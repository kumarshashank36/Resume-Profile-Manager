const MyEducation = (state, action) =>{
    let data = {
        "highedu":"",
        "pyear":"",
        "grade":"",
        "college":"",
        "city":""
    }

    let eduData = Object.assign(data, state)
    if(action.type === "education"){
        eduData = action.info
    }
    return eduData

}

export default MyEducation