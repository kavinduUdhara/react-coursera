export default function Child(props){
    return(
        <div>
            <h1>{props.message}</h1>
            {/* <button onClick={() => props.func('hello')}>check the change state</button> */}
        </div>
    )
}