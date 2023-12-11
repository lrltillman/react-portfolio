import resumeImg from "../../images/resume.png"

export default function Welcome() {


    return (
        <>
            <div className="sassy-container">
                <a href="https://docs.google.com/document/d/1UGA6pRMAX3DRPGyEP3Pk8TR3zMyu7hxa/edit?usp=sharing&ouid=115837123428667520354&rtpof=true&sd=true" target="_blank" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    Click here to download my resume!
                </a>

                <img src={resumeImg} alt="image of extremely outdated resume" className="resume" />
            </div>



        </>
    )
}