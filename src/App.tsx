import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CustomRoutes from "components/CustomRoutes";

const App: React.FC = () => {
	return (
		<Router>
			<CustomRoutes />
		</Router>
	);
};

export default App;
