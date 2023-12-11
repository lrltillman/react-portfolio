export default function Welcome(props) {
    function handleBtnClick() {
        console.log('Hello!')
    }

    return (
        <>
            {props.temp !== "dangerously hot" ? (
                <h3>Welcome to React, {props.name}! The weather is {props.temp} today!</h3>
            ) : (
                <h3>Welcome to React, {props.name}! The weather is {props.temp} today, you need to stay inside!</h3>
            )
            }
            <input className="inputVal" placeholder="Your name here!"></input>
            <button onClick={handleBtnClick}>Click me!</button>
        </>
    )
}