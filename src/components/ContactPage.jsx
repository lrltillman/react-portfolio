import { useState } from "react"

export default function ContactPage(props) {

    const defaultInfo = { name: "", email: "", question: "" }
    const errInfo = { name: "", email: "", question: "" }
    const [contactInfo, setContactInfo] = useState(defaultInfo)
    const [errMessage, setErrMessage] = useState(errInfo)

    function handleInputChange(e) {
        const clone = { ...contactInfo, [e.target.name]: e.target.value }
        setContactInfo(clone)
        console.log(clone)
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

    // buttonHandler to send an alert for contact button

    return (
        <>
            <h1>Contact Info!</h1>

            <form>
                <input type="text" name="name" value={contactInfo.name} onBlur={noContent} onChange={handleInputChange} />
                <div>{errMessage.name}</div>
                <input type="email" name="email" value={contactInfo.email} onBlur={noContent} onChange={handleInputChange} />
                <div>{errMessage.email}</div>
                <textarea name="question" value={contactInfo.question} onBlur={noContent} onChange={handleInputChange} />
                <div>{errMessage.question}</div>

                <button type="button">Submit</button>
            </form>




        </>






    )
}