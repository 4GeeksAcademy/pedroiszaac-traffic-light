import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	return (
		<div className="d-flex flex-column align-items-center w-100">
			<div className="bg-dark" style={{width: "30px", height: "300px"}}></div>
			<div className="d-flex flex-column align-items-center bg-dark rounded-5" style={{width: "300px", height: "800px"}}>
				<button className={`btn btn-success rounded-circle w-75 h-50 my-4 ${color != "green" ? "opacity-25": "luz"}`} onClick={() => setColor("green")}></button>
				<button className={`btn btn-warning rounded-circle w-75 h-50 my-4 ${color != "yellow" ? "opacity-25": "luz"}`} onClick={() => setColor("yellow")}></button>
				<button className={`btn btn-danger rounded-circle w-75 h-50 my-4 ${color != "red" ? "opacity-25": "luz"}`} onClick={() => setColor("red")}></button>
			</div>
		</div>
	);
};

export default Home;