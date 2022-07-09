//import {useState} from "react";

function SortForm({formUpdate}) {

    

    return (
        <form>
            <input type="text" name="name" placeholder="name" onChange={formUpdate}></input>
            <input type="number" name="weight" placeholder="weight" onChange={formUpdate}></input>
            <input type="submit" name="submit" value="FILTER THE PIGS MAYBE?"></input>
        </form>
    )
}

export default SortForm;