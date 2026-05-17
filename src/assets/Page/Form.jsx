import "./Form.css";
import { useState } from "react";
import Data from "../Request/data.jsx";

const Form = () => {
    const [student, setStudent] = useState({
        name: "",
        gender: "",
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newStudent = {
            name: student.name,
            gender: student.gender,
        };

        try {
            const response = await Data.post("api/students", newStudent).then((data)=>{
                alert(data.message)
            });
            console.log("Created:", response);

            setStudent({
                name: "",
                gender: "",
            });
        } catch (error) {
            console.log("Create error:", error);
        }
    };

    return (
        <div className="form-page">
            <h1 className="form-title">Create Student</h1>

            <form className="student-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    value={student.name}
                    onChange={handleChange}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    name="gender"
                    value={student.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;