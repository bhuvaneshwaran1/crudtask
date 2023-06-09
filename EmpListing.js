import { useEffect,useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const EmpListing = () => {
    const [empdata,empdatachange] = useState(null);
    const navigate = useNavigate();
 
    const LoadDetail = (id) => {
        navigate('/employee/detail' + id);
    }

    const LoadEdit = (id) => {
        navigate('/employee/edit' + id)
    }

    const RemoveFunction = (id) => {
 if(window.confirm('Do you want to remove?')){
    fetch('http://localhost:8000/employee/' + id,{
        method:'DELETE'
    }).then((res)=> {
        alert('Removed Successfully')
        window.location.reload();
    }).catch((err)=> {
        console.log(err.message)
    })
 }
    }

    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp)=>{
            empdatachange(resp);
        }).catch((err)=> {
            console.log(err.message)
        })
    })

    return (
        <div className="container">
            <div className="card">
            <div className="card-title">
                                <h3>Employee List</h3>
                            </div>
                            <div className="card-body">
                            <div className="divbtn">
                            <Link to="employee/create" className="btn btn-success">Add New</Link>
                            </div>
                           
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Mobile</td>
                                        <td>DOB</td>
                                        <td>Salary</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {empdata && empdata.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.dob}</td>
                                            <td>{item.salary}</td>
                                            <td><a onClick={() => { LoadEdit(item.id)}} className="btn btn-success">Edit</a></td>
                                            <td><a onClick={() => { RemoveFunction(item.id)}} className="btn btn-danger">Remove</a></td>
                                            <td><a onClick={() => { LoadEdit(item.id)}} className="btn btn-primary">Details</a></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
            </div>
        </div>
        </div>
    )
} 
export default EmpListing;