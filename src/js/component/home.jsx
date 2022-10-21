import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ color, setColor] = useState("red");

	const cambiaColor = (color) => {
		setColor(color);
	}

	

	return (
		<>
			<div className="text-center mt-5 ">
				<div className="d-grid gap-2 col-2 p-5 mx-auto bg-dark">			
					<button type="button" className={(color !== 'red' ? 'btn btn-danger rounded-pill' : 'btn btn-danger rounded-pill border-light border-5 text-dark')} onClick={() => cambiaColor('red')}>Rojo</button>
					<button type="button" className={(color !== 'yellow' ? 'btn btn-warning rounded-pill text-white' : 'btn btn-warning rounded-pill border-light border-5')} onClick={() => cambiaColor('yellow')}>Amarillo</button>
					<button type="button" className={(color !== 'green' ? 'btn btn-success rounded-pill' : 'btn btn-success rounded-pill border-light border-5 text-dark')} onClick={() => cambiaColor('green')}>Verde</button>
				</div>
			</div>
		</>
	);
};

export default Home;
