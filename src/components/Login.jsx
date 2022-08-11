import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import validator from "validator";
import { useDispatch } from "react-redux";
import { logUserIn } from "../Redux/actions/userLogged"


export default function Login() {

    const dispatch = useDispatch()


    const [user, setUser] = useState({
        userName: "",
        email: "",
        passWord: ""
    })
    const [validity, setValidity] = useState({
        userName: "",
        email: "",
        passWord: ""
    })
    const validateAll = (e) => {
        let inputName = e.target.name;
        switch (inputName) {
            case "userName":
                validator.isAlpha(e.target.value) && validator.isLength(e.target.value, { min: 3, max: 7 }) ? setValidity({ ...validity, userName: "is-valid" }) : setValidity({ ...validity, userName: "is-invalid" })
                setUser({ ...user, userName: e.target.value })
                break;

            case "email":
                validator.isEmail(e.target.value) ? setValidity({ ...validity, email: "is-valid" }) : setValidity({ ...validity, email: "is-invalid" })
                setUser({ ...user, email: e.target.value })
                break;

            case "passWord":
                validator.isStrongPassword(e.target.value, { minSymbols: 0, minLength: 8 }) ? setValidity({ ...validity, passWord: "is-valid" }) : setValidity({ ...validity, passWord: "is-invalid" })
                setUser({ ...user, passWord: e.target.value })
                break;
        }
    }
    const checkAllValidity = () => {
        if (validity.email == "is-valid" && validity.userName == "is-valid" && validity.passWord == "is-valid") {
            return true
        }
        else {
            return false;
        }
    }




    return (
        <>
            <form action="" onInput={validateAll} >

                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <InputGroup hasValidation className="mb-3">
                                <Form.Control
                                    name="userName"
                                    className={validity.userName}
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"

                                />
                                <InputGroup.Text id="basic-addon1">
                                    <i className="fa-solid fa-user"></i>

                                </InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid user name.
                                </Form.Control.Feedback>

                            </InputGroup>
                            <InputGroup hasValidation className="mb-3">
                                <Form.Control
                                    name="email"
                                    className={validity.email}
                                    placeholder="Email"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1">

                                    <i className="bi bi-envelope"></i>

                                </InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="password"
                                    name="passWord"
                                    className={validity.passWord}
                                    placeholder="password"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                                <InputGroup.Text id="basic-addon1">

                                    <i className="bi bi-key"></i>

                                </InputGroup.Text>
                                <Form.Control.Feedback type="invalid">
                                    Password min-length 8 char must have lowercase, uppercase and numbers.
                                </Form.Control.Feedback>
                            </InputGroup>
                            <div className="text-center" >
                                <button className="btn btn-success" onClick={(e) => { e.preventDefault(); if (checkAllValidity()) { dispatch(logUserIn(user)); } }} >login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}
