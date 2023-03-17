//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import your own components
import Time from "./component/time.jsx";

let counter = 0;
	setInterval( () => {
	   counter = counter + 1;
	   const firstNumber = Math.floor(counter % 10);
	   const secondNumber = Math.floor((counter / 10) % 10);
	   const thirdtNumber = Math.floor((counter / 100) % 10);
	   const fourthNumber = Math.floor((counter / 1000) % 10);
	   const fifthNumber = Math.floor((counter / 10000) % 10);
	   const sixthNumber = Math.floor((counter / 100000) % 10);
	   
ReactDOM.render(
<Time first={firstNumber} second={secondNumber} thirdt={thirdtNumber} fourt={fourthNumber} fifth={fifthNumber} sixth={sixthNumber} />,
 document.querySelector("#app"));},1000);


