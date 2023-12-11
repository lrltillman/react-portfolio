import { useParams } from "react-router-dom"

export default function UserPage() {
    const projectData = [
        {
            title: "Fact Quiz",
            url: "https://lrltillman.github.io/fact-quiz/",
            img: "make a varibale from imported image at top of page"
        },
        {
            title: "Password Generator",
            url: "https://lrltillman.github.io/fact-quiz/",
            img: "make a varibale from imported image at top of page"
        },
        {
            title: "Fact Quiz",
            url: "https://lrltillman.github.io/fact-quiz/",
            img: "make a varibale from imported image at top of page"
        },
        {
            title: "Fact Quiz",
            url: "https://lrltillman.github.io/fact-quiz/",
            img: "make a varibale from imported image at top of page"
        },
        {
            title: "Fact Quiz",
            url: "https://lrltillman.github.io/fact-quiz/",
            img: "make a varibale from imported image at top of page"
        }



    ]


    let { name } = useParams()
    return (
        <>


            <div class="portfolioflex">
                {projectData.map(project => (
                    <div class="portfolio-first-image">
                        <a href={project.url} target="_blank">
                            <img class="portimagesolo" src={project.img}
                                alt={project.title} />
                        </a>
                    </div>
                ))}
            </div>



        </>
    )
}