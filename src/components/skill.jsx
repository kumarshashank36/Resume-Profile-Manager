import LeftNav from "../navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Skill = ()=>{

    let skilldata = useSelector(state=>state.MySkill)

    let [skills, setSkills] = useState(skilldata.skills)

    let dispatch = useDispatch()
    const save = ()=>{
        let skillinfo = {
            "skills":skills
        }

        let data = {type:"skills", info: skillinfo}
        dispatch(data)
        alert("submitted..!")
    }
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-3 mt-4">
                    <LeftNav/>
                </div>

                <div className="col-xl-6 mt-4 mb-4">
                    <div className="card bg-light border-0 rounded shadow-lg">
                        <h2 className="card-header bg-info text-center text-white"> <i className="fa-solid fa-code"></i> My Skills</h2>

                        <div className="card-body">
                        <div className="row mt-3">
                            <div className="col-xl-3"> <b>Skills</b> </div>
                            <div className="col-xl-9">
                                <textarea cols={30} rows={5} maxLength={400} className="form-control" placeholder="Enter your Skills"
                                onChange={obj=>setSkills(obj.target.value)} value={skills} ></textarea>
                            </div>
                        </div>
                        </div>

                        <div className="card-footer mt-3 bg-secondary">
                        <div className="row">
                            <div className="text-center">
                                <button className="btn btn-danger" onClick={save}>Save & Continue <i className="fa fa-arrow-right"></i> </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill