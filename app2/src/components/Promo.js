function PromoHeading(props){
    return(
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.callToAction}</h2>
        </div>
    );
}

//parent component
export default function Promo(props){
    return(
        <div>
            {/* child component */}
            <h1>{props.heading}</h1>
            <h2>{props.callToAction}</h2>
        </div>
    );
}