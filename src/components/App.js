import React, {useState} from "react";
import Nav from "./Nav";
import Pigs from "./Pigs";
import SortForm from "./SortForm";

import hogs from "../porkers_data";

function App() {

	const [grease, setGrease] = useState(undefined)
	const [pigForm, setPigForm] = useState({
        name: "",
        weight: 0
    })

    function formUpdate(e) {
        const updatePigForm = {
            ...pigForm,
            [e.target.name]: e.target.value
        }
        setPigForm(updatePigForm);
    }

	function greaseFilter() {
		setGrease(true)
	}

	function noGreaseFilter() {
		setGrease(false)
	}

	function allPigsFilter() {
		setGrease(undefined)
	}

	return (
		<div className="App">
			<Nav />
			<Pigs hogs={hogs} grease={grease} pigForm={pigForm}/>
			<button onClick={greaseFilter}>GREASED PIGS ONLY</button>
			<button onClick={noGreaseFilter}>NO GREASED PIGS</button>
			<button onClick={allPigsFilter}>ALL PIGS</button>
			<SortForm formUpdate={formUpdate}/>
		</div>
	);
}

export default App;
