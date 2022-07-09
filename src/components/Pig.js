import {useState} from "react";

function Pig({hog: {name, specialty, greased, weight, image}, hog}) {

    const [isClicked, setIsClicked] = useState(false);
    
    return (
        <div className="ui eight wide column">
            <h1>{name}</h1>
            <img style={{"maxHeight":"100%", "maxWidth":"100%"}} src={image} alt="Pig" onClick={() => setIsClicked(!isClicked)}></img>
            {isClicked ? <ul>
                <li>Specialty: {specialty}</li>
                <li>Weight: {weight}</li>
                <li>Highest medal achieved: {hog["highest medal achieved"]}</li>
                <li>{greased ? "THIS PIG IS GREASED" : "THIS PIG IS NOT GREASED"}</li>
            </ul> : null}
        </div>        
    )
}

export default Pig;