import React, { useState } from "react";
import { Heading } from "../Heading";
import { Link } from "react-router-dom";
import { isValid } from "ipaddr.js";

const StepOne = ({ formData, setForm }) => {

    const { fName, lName, email } = formData;

    const validCheck = (e) => {
        if (formData.fName === "" || formData.lName === "" || formData.email === "") {
            e.preventDefault()
        }
    };

    return (
        <div className="container">
            <div className="gray-bg">
                <h1>Step 1: Your details</h1>
                <form className="form">
                    <div className="inline-input">
                        <div className="label-div">
                            <p className="label">First Name</p>
                            <input
                                className="input"
                                type="text"
                                name="fName"
                                value={formData.fName}
                                onChange={setForm}
                                autoComplete="off"
                            />
                        </div>

                        <div className="label-div">
                            <p className="label">Last Name</p>
                            <input
                                className="input"
                                type="text"
                                name="lName"
                                value={formData.lName}
                                onChange={setForm}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className="inline-input">
                        <div className="label-div">
                            <p className="label">Email Address:</p>
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={setForm}
                                autoComplete="off"
                            />
                        </div>

                    </div>
                    <div className="inline-btn">
                        <Link onClick={e => validCheck(e)} className="btn" to="/step2"> Next &gt;</Link>
                    </div>
                </form>
            </div>
            <Heading heading="Step 2: More comments" />
            <Heading heading="Step 3: Final comments" />
        </div>
    )
}

export { StepOne };