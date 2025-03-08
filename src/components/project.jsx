import LeftNav from "../navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import swal from "sweetalert"

const Project = ()=>{

    let projdata = useSelector(state=>state.MyProject)

    let [projname, setProjname] = useState(projdata.projname)
    let [projdetails, setProjdetails] = useState(projdata.projdetails)
    let [techused, setTechused] = useState(projdata.techused)
    let [url, setUrl] = useState(projdata.url)

    let dispatch = useDispatch()
    const save = ()=>{
        let projinfo = {
            "projname":projname,
            "projdetails":projdetails,
            "techused":techused,
            "url":url
        }

        let data = {type:"project", info: projinfo}
        dispatch(data)
        swal("Save Success","Your Project details saved successfully...", "success")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-3 mt-4">
                    <LeftNav/>
                </div>

                <div className="col-xl-6 mt-4 mb-4">
                    <div className="card bg-light border-0 rounded shadow-lg">
                        <h2 className="card-footer bg-info text-center text-white"> <i className="fa-solid fa-check-circle"></i> Project Details</h2>

                        <div className="card-body">
                        <div className="row mt-3">
                            <div className="col-xl-3"> <b>Project Name</b> </div>
                            <div className="col-xl-9">
                                <input type="text" className="form-control" placeholder="Enter project name"
                                onChange={obj=>setProjname(obj.target.value)} value={projname} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Project Details</b> </div>
                            <div className="col-xl-9"> 
                                <textarea cols={30} rows={4} maxLength={400} className="form-control" placeholder="Enter project details"
                                onChange={obj=>setProjdetails(obj.target.value)} value={projdetails} ></textarea> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Technology Used</b> </div>
                            <div className="col-xl-9"> 
                                <textarea cols={30} rows={4} maxLength={400} className="form-control" placeholder="Enter technology used "
                                onChange={obj=>setTechused(obj.target.value)} value={techused} ></textarea> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Any Live URL</b> </div>
                            <div className="col-xl-9">
                                <input type="text" className="form-control" placeholder="Enter project URL" 
                                onChange={obj=>setUrl(obj.target.value)} value={url} /> 
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

export default Project