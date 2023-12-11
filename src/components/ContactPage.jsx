import { useState } from "react"

export default function ContactPage(props) {

    const defaultInfo = { name: "", email: "", question: "" }
    const errInfo = { name: "", email: "", question: "" }
    const [contactInfo, setContactInfo] = useState(defaultInfo)
    const [errMessage, setErrMessage] = useState(errInfo)
    const emailRegex = /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

    function handleInputChange(e) {
        const clone = { ...contactInfo, [e.target.name]: e.target.value }
        setContactInfo(clone)

    }

    function validateEmail(email) {
        return emailRegex.test(contactInfo.email);
    }






    function handleBtnClick() {
        const isValid = validateEmail(contactInfo.email);
        const email = contactInfo.email
        const name = contactInfo.name
        const question = contactInfo.question

        if (!email || !name || !question) {
            alert("All fields must be filled!")
        } else if (!isValid) {
            alert("Please enter a valid e-mail address!")
        }

        if (isValid && name && question) {
            alert(`Thank you for your message, ${name}!`)
        }
    }

    function noContent() {

        let name = ""
        let email = ""
        let question = ""


        if (!contactInfo.name) {
            name = "Name value is required!"
        }

        if (!contactInfo.email) {
            email = "Email value is required!"
        }

        if (!contactInfo.question) {
            question = "Question value is required!"
        }

        setErrMessage({ name, email, question })

    }

    // regex for valid email?

    return (
        <>


            <form className="sassy-container">
                <h2>Contact Me!</h2>
                <input placeholder="Name..." className="contactForm" type="text" name="name" value={contactInfo.name} onBlur={noContent} onChange={handleInputChange} />
                <div>{errMessage.name}</div>
                <input placeholder="E-mail" className="contactForm" type="email" name="email" value={contactInfo.email} onBlur={noContent} onChange={handleInputChange} />
                <div>{errMessage.email}</div>
                <textarea placeholder="A message for Leah..." className="contactForm" name="question" value={contactInfo.question} onBlur={noContent} onChange={handleInputChange} />
                <div>{errMessage.question}</div>

                <button className="btn btn-dark" type="button" onClick={handleBtnClick}>Submit</button>
            </form>




        </>






    )
}