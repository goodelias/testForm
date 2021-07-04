import React from "react";
import { Heading } from "../Heading";
import { Link } from "react-router-dom";
import Axios from "axios";

const StepThree = ({ formData, setForm }) => {

    const { comments } = formData;

    const [msg, setMsg] = React.useState("")

    const submitData = () => {
        Axios.post('http://localhost:3001/api/insert', {
            fName: formData.fName,
            lName: formData.lName,
            email: formData.email,
            tel: formData.tel,
            gender: formData.gender,
            dayOfBirth: formData.dayOfBirth,
            monthOfBirth: formData.monthOfBirth,
            yearOfBirth: formData.yearOfBirth,
            comments: formData.comments
        })

        const sentMsg = "The data was saved successfully!"
        setMsg(sentMsg);


    }

    return (
        <div className="container">
            <Heading heading="Step 1: Your details" />
            <Heading heading="Step 2: More comments" />
            <div className="gray-bg">
                <h1>Step 3: Final comments</h1>
                <form>
                    <p>Comments</p>
                    <input
                        className="input"
                        type="text"
                        name="comments"
                        value={formData.comments}
                        onChange={setForm}
                    ></input>
                    <div className="inline-btn">
                        <a onClick={submitData} className="btn">Next &gt;</a>
                    </div>
                </form>
            </div>
            <p className="msg">{msg}</p>
        </div>
    )
}

export { StepThree };