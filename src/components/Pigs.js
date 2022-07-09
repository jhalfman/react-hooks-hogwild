import Pig from "./Pig"

function Pigs({hogs, grease, pigForm}) {
    return (
        <div className="ui grid container">
            {hogs.map(hog => {
                if (grease === undefined){
                    if (hog.name.toLowerCase().includes(pigForm.name.toLowerCase()) && hog.weight >= pigForm.weight){
                        return <Pig hog={hog} key={hog.name}/>
                    }
                    else return null;
                }
                else if (hog.greased === grease){
                    if (hog.name.toLowerCase().includes(pigForm.name.toLowerCase()) && hog.weight >= pigForm.weight){
                        return <Pig hog={hog} key={hog.name}/>
                    }
                    else return null;
                }
                else return null;
            })}
        </div>
    )
}

export default Pigs;