import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm, useStep } from "react-hooks-helper";
import { StepOne } from "./components/stepForm/StepOne";
import { StepTwo } from "./components/stepForm/StepTwo";
import { StepThree } from "./components/stepForm/StepThree";

const defaultData = {
    fName: "",
    lName: "",
    email: "",
    tel: Number,
    gender: "",
    dayOfBirth: Number,
    monthOfBirth: Number,
    yearOfBirth: Number,
    comments: ""
}

const App = () => {
    const [formData, setForm] = useForm(defaultData);

    const props = { formData, setForm };

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <StepOne {...props} />
                    </Route>
                    <Route exact path="/step2">
                        <StepTwo {...props} />
                    </Route>
                    <Route exact path="/step3">
                        <StepThree {...props} />
                    </Route>
                </Switch>
            </div>
        </Router>

    )

}

export default App;