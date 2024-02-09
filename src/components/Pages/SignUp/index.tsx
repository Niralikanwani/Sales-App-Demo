import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import CustomTextField from "components/CustomComponents/TextField";
import { SignUpModel } from "models/SignUp/SignUp";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "utility/enums/app-routes";

const SignUp: React.FC = () => {
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

	const handleSignUp = async (formData: SignUpModel) => {
		console.log(formData);
		alert("Sign up successful!");
		navigate(AppRoutes.SignIn);
	};

	return (
		<Box>
			<center>
				<Typography variant="h3">Sign Up</Typography>
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
								onClick={methods.handleSubmit(handleSignUp)}
							>
								Sign Up
							</Button>
						</Grid>
					</Grid>
				</FormProvider>
			</center>
		</Box>
	);
};

export default SignUp;
