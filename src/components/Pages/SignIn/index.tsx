import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import CustomTextField from "components/CustomComponents/TextField";
import { SignUpModel } from "models/SignUp/SignUp";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "utility/enums/app-routes";

const SignIn: React.FC = () => {
	const navigate = useNavigate();
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.required("Please enter an email address")
			.max(100)
			.email(),
		password: Yup.string().required("Please enter password").max(100),
	});

	const methods = useForm<SignUpModel>({
		defaultValues: new SignUpModel(),
		mode: "onChange",
		resolver: yupResolver(validationSchema),
	});

	const handleLogin = (formData: SignUpModel) => {
		console.log(formData);
		// store user detail in localStorage
		localStorage.setItem("userEmail", JSON.stringify(formData.email));
		navigate(AppRoutes.SalesOrderDashboard);
	};

	return (
		<Box>
			<center>
				<Typography variant="h3">Login</Typography>
				<br />
				<FormProvider {...methods}>
					<Grid container spacing={2} className="form-group">
						<Grid item xs={12}>
							<CustomTextField name="email" label="Email" type="email" />
						</Grid>
						<Grid item xs={12}>
							<CustomTextField
								name="password"
								label="Password"
								type="password"
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								variant="contained"
								onClick={methods.handleSubmit(handleLogin)}
							>
								Login
							</Button>
						</Grid>
					</Grid>
				</FormProvider>
			</center>
		</Box>
	);
};

export default SignIn;
