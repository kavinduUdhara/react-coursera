export default function Btn(){
    const func1 = () => {
        console.log("Hello world!");
    }
    return(
        <div>
            <button onMouseOver={func1}>Click Me</button>
        </div>
    )
}