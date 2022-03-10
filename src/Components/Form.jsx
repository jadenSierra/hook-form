import React, {useState} from "react";

const Form = props => {

    //create state
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = e => {
        e.preventDefault();
        const newUser = {fName,lName,email,password,confirmPassword};
        console.log(newUser)
    }

    return (
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="fName">First Name</label>
                    <input type="text" name="fName" onChange={ e => setFName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" name="lName"onChange={ e => setLName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={ e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={ e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={ e => setConfirmPassword(e.target.value)}></input>
                </div>
                <input type="submit" value="Submit"/>
            </form>

            <p>First Name {fName}</p>
            <p>Last Name {lName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {confirmPassword}</p>
        </>
    );
}

export default Form;
