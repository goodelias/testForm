import React from "react";
import { Heading } from "../Heading";
import { Link } from "react-router-dom";

const StepTwo = ({ formData, setForm }) => {

    const { tel, gender, dayOfBirth, monthOfBirth, yearOfBirth } = formData;

    const validCheck = (e) => {
        if (formData.tel === "" || formData.gender === "" || formData.dayOfBirth === "" || formData.monthOfBirth === "" || formData.yearOfBirth === "") {
            e.preventDefault()
        }
    }

    return (
        <div className="container">
            <Heading heading="Step 1: Your details" />
            <div className="gray-bg">
                <h1>Step 2: More comments</h1>
                <form>
                    <div className="inline-input">
                        <div className="label-div">
                            <p>Telephone number</p>
                            <input
                                className="input"
                                type="tel"
                                name="tel"
                                value={formData.tel}
                                onChange={setForm}
                                autoComplete="off"
                            />
                        </div>

                        <div className="label-div">
                            <p>Gender</p>
                            <select className="input gender" name="gender" id="gender" onChange={setForm}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="label-div">
                        <p>Date of birth</p>
                        <input
                            className="birth-input input"
                            type="text"
                            name="dayOfBirth"
                            value={formData.dayOfBirth}
                            onChange={setForm}
                            autoComplete="off"
                        />
                        <input
                            className="birth-input input"
                            type="text"
                            name="monthOfBirth"
                            value={formData.monthOfBirth}
                            onChange={setForm}
                            autoComplete="off"
                        />
                        <input
                            className="birth-input input"
                            type="text"
                            name="yearOfBirth"
                            value={formData.yearOfBirth}
                            onChange={setForm}
                            autoComplete="off"
                        />
                    </div>

                    <div className="inline-btn">
                        <Link onClick={e => validCheck(e)} className="btn" to="/step3">Next &gt;</Link>
                    </div>
                </form>
            </div>
            <Heading heading="Step 3: Final comments" />
        </div>
    )
}

export { StepTwo };