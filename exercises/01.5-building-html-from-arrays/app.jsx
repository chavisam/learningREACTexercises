import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = ["Link to google.com", "Link to facebook.com", "Link to amazon.com"];

const newLI = navlinkItems.map((LI) => (
	<li className="nav-item">
		<a className="nav-link" href="#">
			{LI}
		</a>
	</li>
));

const content = <ul className="nav">{newLI}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
