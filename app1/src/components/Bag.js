export default function Bag(props){
    const bag = {
        padding: "20px",
        border: "1px solid black",
        background: "#fff",
        margin: "20px 0"
    }
    return(
        <div style={bag}>
            {props.children}
        </div>
    )
}