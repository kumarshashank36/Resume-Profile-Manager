import LeftNav from "../navigation"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import swal from "sweetalert"

const Exper = ()=>{

    let experdata = useSelector(state=>state.MyExper)

    let [totexper, setTotexper] = useState(experdata.totexper)
    let [skills, setSkills] = useState(experdata.skills)

    let dispatch = useDispatch()
    const save = ()=>{
        let experinfo = {
            "totexper":totexper,
            "skills":skills
        }

        let data = {type:"experience", info: experinfo}
        dispatch(data)
        swal("Save Success","Your Experience details saved successfully...", "success")
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-3 mt-4">
                    <LeftNav/>
                </div>

                <div className="col-xl-6 mt-4 mb-4">
                    <div className="card bg-light border-0 rounded shadow-lg">
                        <h2 className="card-header text-center text-white bg-info"> <i className="fa-solid fa-briefcase"></i> Experience</h2>

                        <div className="card-body">
                        <div className="row mt-3">
                            <div className="col-xl-3"> <b>Total Experience</b> </div>
                            <div className="col-xl-9"> 
                                <input type="number" className="form-control" placeholder="Enter experience in Years"
                                onChange={obj=>setTotexper(obj.target.value)} value={totexper} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Skills</b> </div>
                            <div className="col-xl-9">
                                <textarea cols={30} rows={4} maxLength={400} className="form-control" placeholder="Enter your skills"
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

export default Exper