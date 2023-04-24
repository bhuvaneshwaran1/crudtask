import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [dob, dobchange] = useState("");
    const [email, emailchange] = useState("");
    const [mobile, mobilechange] = useState("");
    const [salary, salarychange] = useState("");
    const [validation, valchange] = useState("");
    const [gender, setGender] = useState("Male");

    const onOption = e => {
        setGender(e.target.value)
    }
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const empdata = { name, email, salary, mobile, dob };

        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert("Saved successfully")
            navigate("/");
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" ,margin:'10px'}}>
                            <div className="card-title">
                                <h3 style={{ textAlign: 'center', margin: '5px' }}>Employee Create</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} className="form-control" onChange={e => idchange(e.target.value)}></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input  value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                             {name.length==0 && validation && <span className="text-danger">Name is Required</span>} 
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input  value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            {/*  {validation && <span className="text-danger">Email is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Mobile</label>
                                            <input  value={mobile} onChange={e => mobilechange(e.target.value)} className="form-control"></input>
                                            {/*  {validation && <span className="text-danger">Email is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>DOB</label>
                                            <input type="date"  value={dob} onChange={e => dobchange(e.target.value)} className="form-control"></input>
                                            {/* {validation && <span className="text-danger">DOB is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Salary</label>
                                            <input  value={salary} onChange={e => salarychange(e.target.value)} className="form-control"></input>
                                            {/* {validation && <span className="text-danger">Salary is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6" style={{ margin: '10px' }}>
                                        <label>Gender </label>
                                        <div className="form-group">
                                            <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={onOption} />
                                            <label htmlForm="male">Male</label>

                                            <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={onOption} />
                                            <label htmlForm="male">Female</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )


}
export default EmpCreate;