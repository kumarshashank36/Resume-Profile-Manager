import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";

const Basic = () => {
  let basicdata = useSelector(state=>state.MyBasic)
  
  let [name, setName] = useState(basicdata.fullname)
  let [dob, setDob] = useState(basicdata.dob)
  let [gender, setGender] = useState(basicdata.gender)
  let [married, setMarried] = useState(basicdata.married)
  let [profilestatus, setStatus] = useState(basicdata.profilestatus)
  let [about, setAbout] = useState(basicdata.about)

  let dispatch = useDispatch()
  const save = ()=>{
    let userinfo = {
      "fullname":name,
      "dob":dob,
      "gender":gender,
      "married":married,
      "profilestatus":profilestatus,
      "about":about
    }

    let mydata = {type: "basic", info: userinfo}
    dispatch(mydata)
    swal("Save Success","Your Basic details saved successfully...", "success")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 mt-4">
          <LeftNav/>
        </div>

        <div className="col-xl-6  mt-4 mb-4">
          <div className="card border-0 shadow-lg">
            <h2 className="card-header p-2 text-white bg-info text-center">
              {" "}
              <i className="fa-solid fa-file"></i> Basic Details
            </h2>

            <div className="card-body">
              <div className="row mt-3">
                <div className="col-xl-3">
                  {" "}
                  <b> Full Name</b>
                </div>
                <div className="col-xl-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    onChange={obj=>setName(obj.target.value)} value={name}
                  />{" "}
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-xl-3">
                  {" "}
                  <b>Date of Birth</b>{" "}
                </div>
                <div className="col-xl-9">
                  <input type="date" className="form-control"
                    onChange={obj=>setDob(obj.target.value)} value={dob}
                  />{" "}
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-xl-3">
                  {" "}
                  <b>Gender</b>{" "}
                </div>
                <div className="col-xl-9">
                  <select className="form-select" onChange={obj=>setGender(obj.target.value)} value={gender} >
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-xl-3">
                  {" "}
                  <b>Married</b>{" "}
                </div>
                <div className="col-xl-9">
                  <select className="form-select" onChange={obj=>setMarried(obj.target.value)} value={married}>
                    <option>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-xl-3">
                  {" "}
                  <b>Profile Status</b>{" "}
                </div>
                <div className="col-xl-9">
                  <select className="form-select" onChange={obj=>setStatus(obj.target.value)} value={profilestatus}>
                    <option>Select</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-xl-3">
                  {" "}
                  <b>About Yourself</b>{" "}
                </div>
                <div className="col-xl-9">
                  <textarea
                    rows={4}
                    cols={30}
                    maxLength={200}
                    className="form-control" onChange={obj=>setAbout(obj.target.value)} value={about}
                    placeholder="Type about yourself"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="card-footer mt-3 bg-secondary">
              <div className="row">
                <div className="text-center">
                  <button className="btn btn-danger" onClick={save}> 
                    Save & Continue <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;