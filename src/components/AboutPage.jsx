import nigelPic from "../../images/sassy-nigel.jpg"

export default function AboutPage() {


    return (
        <>

            <div className="sassy-container justify-content-center">
                <img className="sassy" src={nigelPic} alt="Photo of Leah Tillman's dog  Nigel" />
                <h5 className="less-sassy">
                    Hello! Welcome to my portfolio website. My name is Leah Tillman, and I am finishing up a Fullstack Bootcamp program by EdX, hosted through the University of Minnesota. My educational and professional backgound lies in a different field - social work - however I am looking to make a change in my life. Both my previous career and my future career involve creative problem solving, patience, persistance, and dedication, and I believe that I excel at these skills and values. Right now, I am looking forward to finding work in Web Development, Programming, Web Design, or a combination of all three!
                </h5>

            </div>

        </>
    )
}