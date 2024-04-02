// export default function Nav(props){
//     return(
//         <ul>
//             <li>{props.first}</li>
//         </ul>
//     )
// }
//writing above as a function expression

//Components as Arrow Functions
// const Nav = (props) => {
//     return (
//         <ul>
//             <li>{props.first}</li>
//         </ul>
//     )
// }

const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

export default Nav;