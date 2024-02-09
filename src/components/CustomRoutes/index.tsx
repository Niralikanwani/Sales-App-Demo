import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import SignIn from "components/Pages/SignIn";
import SignUp from "components/Pages/SignUp";
import Home from "components/Pages/Home";
import { AppRoutes } from "utility/enums/app-routes";
import AppLayout from "components/Layout/AppLayout";

const CustomRoutes: React.FC = () => {
	const location = useLocation();
	const [userDetail, setUserDetail] = useState("");
	const loggedInUserEmail = localStorage.getItem("userEmail");

	useEffect(() => {
		if (
			loggedInUserEmail &&
			location &&
			location.pathname === AppRoutes.SalesOrderDashboard
		) {
			setUserDetail(loggedInUserEmail);
		}
		return () => {
			setUserDetail("");
		};
	}, [location, loggedInUserEmail]);

	return (
		<Routes>
			<Route path={AppRoutes.Root} element={<SignIn />} />
			<Route path={AppRoutes.SignIn} element={<SignIn />} />
			<Route path={AppRoutes.SignUp} element={<SignUp />} />
			<Route
				element={
					loggedInUserEmail && userDetail ? (
						<AppLayout children={<Home />} />
					) : (
						<SignIn />
					)
				}
				path={AppRoutes.SalesOrderDashboard}
			/>
		</Routes>
	);
};

export default CustomRoutes;
