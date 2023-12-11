import { useParams } from "react-router-dom"
import passwordGen from "../../images/pw-gen.jpg"
import factQuiz from "../../images/quiz-demo.jpg"
import weatherDash from "../../images/wd.png"
import pwa from "../../images/pwa.png"
import dayPlanner from "../../images/dayplanner.png"
import notePad from "../../images/notepad.png"

export default function UserPage() {
    const projectData = [
        {
            title: "Fact Quiz",
            url: "https://lrltillman.github.io/fact-quiz/",
            img: factQuiz,
            repo: "https://github.com/lrltillman/fact-quiz"
        },
        {
            title: "Password Generator",
            url: "https://lrltillman.github.io/password-generator/",
            img: passwordGen,
            repo: "https://github.com/lrltillman/password-generator"
        },
        {
            title: "Weather Dashboard",
            url: "https://lrltillman.github.io/weather-dash/",
            img: weatherDash,
            repo: "https://github.com/lrltillman/weather-dash"
        },
        {
            title: "Notepad",
            url: "https://pwa-homework-6e5c6f37c6be.herokuapp.com/",
            img: pwa,
            repo: "https://github.com/lrltillman/pwa-assignment"
        },
        {
            title: "Day Planner",
            url: "https://lrltillman.github.io/day-planner/",
            img: dayPlanner,
            repo: "https://github.com/lrltillman/day-planner"
        },
        {
            title: "Note Taker",
            url: "https://note-taker-lrltillman-5594b15e77c1.herokuapp.com/",
            img: notePad,
            repo: "https://github.com/lrltillman/note-taker"
        }
    ]

    return (
        <>


            <div className="sassy-container">
                {projectData.map(project => (
                    <div key={project.title} className="sassy-container shadow-lg p-3 mb-5 rounded">
                        <h4>{project.title}</h4>
                        <div>
                            <img className="port-img" src={project.img}
                                alt={project.title} />
                            <div className="somewhat-sassy">
                                <a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={project.url} target="_blank">• Deployed application •</a>
                                <a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={project.repo} target="_blank">• Github repository •</a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>



        </>
    )
}