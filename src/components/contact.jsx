import LeftNav from "../navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const Contact = ()=>{

    let contactdata = useSelector(state=>state.MyContact)

    let [mobile, setMobile] = useState(contactdata.mobile)
    let [email, setEmail] = useState(contactdata.email)
    let [localadd, setLocalAdd] = useState(contactdata.localadd)
    let [permadd, setPermAdd] = useState(contactdata.permadd)
    let [refadd, setRefAdd] = useState(contactdata.refadd)

    let dispatch = useDispatch()
    const save = ()=>{
        let contactinfo = {
            "mobile":mobile,
            "email":email,
            "localadd":localadd,
            "permadd":permadd,
            "refadd":refadd,
        }

        let data = {type: "contact", info: contactinfo}
        dispatch(data)
        alert("Contact Details uploaded successfully..!")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-3 mt-4">
                    <LeftNav/>
                </div>

                <div className="col-xl-6 mt-4 mb-4">
                    <div className="card bg-light border-0 rounded shadow-lg">
                        <h2 className="card-header p-2 bg-info text-center text-white"> <i className="fa-solid fa-phone"></i> Contact Details</h2>

                        <div className="card-body">
                        <div className="row mt-3">
                            <div className="col-xl-3"> <b>Mobile No.</b></div>
                            <div className="col-xl-9"> 
                                <input type="number" className="form-control" placeholder="Enter mobile number"
                                onChange={obj=>setMobile(obj.target.value)} value={mobile} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>E-mail Id</b> </div>
                            <div className="col-xl-9"> 
                                <input type="email" className="form-control" placeholder="Enter e-mail id"
                                onChange={obj=>setEmail(obj.target.value)} value={email} /> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Local Address</b> </div>
                            <div className="col-xl-9"> 
                                <textarea rows={3} cols={30} maxLength={200} className="form-control" placeholder="Enter local address"
                                onChange={obj=>setLocalAdd(obj.target.value)} value={localadd} ></textarea> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Permanent Address</b> </div>
                            <div className="col-xl-9"> 
                                <textarea rows={3} cols={30} maxLength={200} className="form-control" placeholder="Enter permanent address"
                                onChange={obj=>setPermAdd(obj.target.value)} value={permadd} ></textarea> 
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-3"> <b>Any reference Address and Contact</b> </div>
                            <div className="col-xl-9"> 
                                <textarea rows={3} cols={30} maxLength={200} className="form-control" placeholder="Enter any reference address & contact"
                                onChange={obj=>setRefAdd(obj.target.value)} value={refadd} ></textarea> 
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

export default Contact