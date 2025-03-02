const MySkill = (state, action) =>{
    let data = {
        "skills":""
    }

    let skillData = Object.assign(data, state)
    if(action.type === "skills"){
        skillData = action.info
    }
    return skillData
}

export default MySkill