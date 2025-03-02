import LeftNav from "../navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Education = ()=>{

    let edudata = useSelector(state=>state.MyEducation)

    let [highedu, setHighedu] = useState(edudata.highedu)
    let [pyear, setPyear] = useState(edudata.pyear)
    let [grade, setGrade] = useState(edudata.grade)
    let [college, setCollege] = useState(edudata.college)
    let [city, setCity] = useState(edudata.city)

    let dispatch = useDispatch()
    const save = ()=>{
        let eduinfo = {
            "highedu":highedu,
            "pyear":pyear,
            "grade":grade,
            "college":college,
            "city":city
        }

        let data = {type: "education", info: eduinfo}
        dispatch(data)
        alert("education data uploaded successfully..!")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-3 mt-4">
                    <LeftNav/>
                </div>

                <div className="col-xl-6 mt-4 mb-4">
                    <div className=" card bg-light border-0 rounded shadow-lg">
                        <h2 className="card-header p-2 bg-info text-center text-white"> <i className="fa-solid fa-graduation-cap"></i> Education Details</h2>

                        <div className="card-body">
                        <div className="row mt-3">
                            <div className="col-xl-3"> <b>Highest Education</b></div>
                            <div className="col-xl-9"> 
                                <input type="text" className="form-control" placeholder="Enter higher education" 
                                onChange={obj=>setHighedu(obj.target.value)} value={highedu} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Passing Year</b></div>
                            <div className="col-xl-9"> 
                                <input type="date" className="form-control" placeholder="Enter passing year"
                                onChange={obj=>setPyear(obj.target.value)} value={pyear} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Grade / % </b> </div>
                            <div className="col-xl-9"> 
                                <input type="number" className="form-control" placeholder="Enter grade" 
                                onChange={obj=>setGrade(obj.target.value)} value={grade} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>College / University</b> </div>
                            <div className="col-xl-9">
                                <input type="text" className="form-control" placeholder="Enter college/university name" 
                                onChange={obj=>setCollege(obj.target.value)} value={college} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>City</b> </div>
                            <div className="col-xl-9"> 
                                <input type="text" className="form-control" placeholder="Enter city" 
                                onChange={obj=>setCity(obj.target.value)} value={city} /> 
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
export default Education