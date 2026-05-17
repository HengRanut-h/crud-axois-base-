import data from "../Request/data.jsx";
import './ListStudent.css';
import {useEffect, useState} from "react";
import { Button } from 'antd';
import {Link} from "react-router-dom";
import Data from "../Request/data.jsx";

const StudentList = () => {
const [student, setStudent] = useState([]);

    useEffect(() => {
        // let ignore = false;

        Data.get("api/students")
            .then((response) => {
                    setStudent(response.data);
            })
            .catch((error) => {
                console.log("error api:", error);
            });
        
    }, []);
    
    return (
        <div className="student-list-page">
            <h1>Student List</h1>
            <div>
                <Button color="primary" variant="solid" className="btn-create" >
                    <Link  to="/">
                        Create Student
                    </Link>
                </Button>
            </div>
            <table className="student-table">
                <thead>
                <tr style={{backgroundColor: '#2563eb', color: "white"}}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
                {
                    student.map((student, index) => (
                        <tr key={student.studentId}>
                            <th>{index + 1}</th>
                            <th>{student.name}</th>
                            <th>{student.gender}</th>
                            <th >
                                <Button color="primary" variant="solid" className="btn-submit" >
                                    Edit
                                </Button>
                                <Button color="danger" variant="solid" className="btn"   >
                                    Delete
                                </Button>
                            </th>
                        </tr>
                    ))
                    
                }
                </thead>

                <tbody>
               
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;