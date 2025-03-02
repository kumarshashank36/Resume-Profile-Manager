import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const FinalPreview = ()=>{
    let basicdata = useSelector(state=>state.MyBasic)
    let contactdata = useSelector(state=>state.MyContact)
    let edudata = useSelector(state=>state.MyEducation)
    let experdata = useSelector(state=>state.MyExper)
    let projdata = useSelector(state=>state.MyProject)
    let skilldata = useSelector(state=>state.MySkill)

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Basic Details</div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td> Full Name </td>
                                        <td> {basicdata.fullname} </td>
                                    </tr>

                                    <tr>
                                        <td> Gender </td>
                                        <td> {basicdata.gender} </td>
                                    </tr>

                                    <tr>
                                        <td> Date of Birth </td>
                                        <td> {basicdata.dob} </td>
                                    </tr>

                                    <tr>
                                        <td> Married </td>
                                        <td> {basicdata.married} </td>
                                    </tr>

                                    <tr>
                                        <td> Profile Status </td>
                                        <td> {basicdata.profilestatus} </td>
                                    </tr>

                                    <tr>
                                        <td> About Me : </td>
                                        <td> {basicdata.about} </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/basic" className="text-decoration-none">
                                <i className="fa fa-edit"></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Contact Details</div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td> Mobile No. </td>
                                        <td> {contactdata.mobile} </td>
                                    </tr>

                                    <tr>
                                        <td> Email </td>
                                        <td> {contactdata.email} </td>
                                    </tr>

                                    <tr>
                                        <td> Local Address </td>
                                        <td> {contactdata.localadd} </td>
                                    </tr>

                                    <tr>
                                        <td> Permannt Address </td>
                                        <td> {contactdata.permadd} </td>
                                    </tr>

                                    <tr>
                                        <td> Ref. Address/Contact </td>
                                        <td> {contactdata.refadd} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/contact" className="text-decoration-none">
                                <i className="fa fa-edit"></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Education Details</div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td> Highest Education </td>
                                        <td> {edudata.highedu} </td>
                                    </tr>

                                    <tr>
                                        <td> Passing Year </td>
                                        <td> {edudata.pyear} </td>
                                    </tr>

                                    <tr>
                                        <td> Grade </td>
                                        <td> {edudata.grade} </td>
                                    </tr>

                                    <tr>
                                        <td> College/University </td>
                                        <td> {edudata.college} </td>
                                    </tr>

                                    <tr>
                                        <td> City </td>
                                        <td> {edudata.city} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/education" className="text-decoration-none">
                                <i className="fa fa-edit"></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Project Details</div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td> Project Name </td>
                                        <td> {projdata.projname} </td>
                                    </tr>

                                    <tr>
                                        <td> Project Details </td>
                                        <td> {projdata.projdetails} </td>
                                    </tr>

                                    <tr>
                                        <td> Technology Used </td>
                                        <td> {projdata.techused} </td>
                                    </tr>

                                    <tr>
                                        <td> URL </td>
                                        <td> {projdata.url} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/project" className="text-decoration-none">
                                <i className="fa fa-edit"></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Skill Details</div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Skills</td>
                                        <td> {skilldata.skills} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/skill" className="text-decoration-none">
                                <i className="fa fa-edit"></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 mb-5">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Experience Details</div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Total Exper</td>
                                        <td> {experdata.totexper} </td>
                                    </tr>

                                    <tr>
                                        <td>Skills</td>
                                        <td> {experdata.skills} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <Link to="/exper" className="text-decoration-none">
                                <i className="fa fa-edit"></i> Edit
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="col-xl-12 text-center">
                    <button className="btn btn-danger">
                        Submit My Details <i className="fa fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default FinalPreview