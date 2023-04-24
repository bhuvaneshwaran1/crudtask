import { useEffect,useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
const EmpEdit = () => {
    
    const {empid} = useParams();
    

    const onOption = e => {
        setGender(e.target.value)
    }

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res)=> {
            return res.json();
        }).then(((resp)=> {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            mobilechange(resp.mobile);
            dobchange(resp.dob);
            salarychange(resp.salary)
        }).catch((err) => {
            console.log(err.message);
        }))
        
    },[])

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [dob, dobchange] = useState("");
    const [email, emailchange] = useState("");
    const [mobile, mobilechange] = useState("");
    const [salary, salarychange] = useState("");
    const [validation, valchange] = useState(false);
    const [gender, setGender] = useState("Male");


    const navigate = useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();
        const empdata = { name, email, salary, mobile, dob };

        fetch("http://localhost:8000/employee/" +empid, {
            method: "PUT",
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
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h3>Employee Edit</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="formControl"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="formControl"></input>
                                            {/* {name.length == 0 && validation && <span className="text-danger">Name is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} onChange={e => emailchange(e.target.value)} className="formControl"></input>
                                            {/*  {validation && <span className="text-danger">Email is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Mobile</label>
                                            <input required value={mobile} onChange={e => mobilechange(e.target.value)} className="formControl"></input>
                                            {/*  {validation && <span className="text-danger">Email is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>DOB</label>
                                            <input type="date" required value={dob} onChange={e => dobchange(e.target.value)} className="formControl"></input>
                                            {/* {validation && <span className="text-danger">DOB is Required</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Salary</label>
                                            <input required value={salary} onChange={e => salarychange(e.target.value)} className="formControl"></input>
                                            {/* {validation && <span className="text-danger">Salary is Required</span>} */}
                                        </div>
                                    </div>

                                    <div>
                                        <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={onOption} />
                                        <label htmlForm="male">Male</label>
                                        <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={onOption} />
                                        <label htmlForm="male">Female</label>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn-btn-success" type="submit">Save</button>
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
export default EmpEdit;