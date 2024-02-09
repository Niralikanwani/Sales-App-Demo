import React from "react";
import {
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	FormControl,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export interface IOption {
	label: string;
	value: number | string;
	groupBy?: string;
	disabledOptionTooltipText?: string;
}

interface CustomSelectProps {
	name: string;
	label: string;
	required?: boolean;
	options: IOption[];
	isDisabled?: boolean;
	handleChange?: () => void;
	customWidth?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
	name,
	options,
	label,
	isDisabled,
	handleChange,
	customWidth = "200px",
}) => {
	const methods = useFormContext();
	const generateSelectOptions = () => {
		return options.map((option: IOption, index: number) => {
			return (
				<MenuItem key={index} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

	return (
		<div style={{ display: "block" }}>
			<InputLabel
				id={label}
				style={{
					display: "inline-block",
					width: customWidth,
					verticalAlign: "middle",
				}}
			>
				{label}
			</InputLabel>
			<FormControl>
				<Controller
					control={methods.control}
					name={name}
					render={({
						field: { onChange, value, ref },
						fieldState: { error },
					}) => (
						<>
							<Select
								onChange={(event) => {
									onChange(event.target.value);
									if (handleChange) handleChange();
								}}
								value={value || ""}
								error={!!error}
								inputRef={ref}
								disabled={isDisabled}
								style={{ width: "223px" }}
							>
								{generateSelectOptions()}
							</Select>
							{error && <FormHelperText error>{error.message}</FormHelperText>}
						</>
					)}
				/>
			</FormControl>
		</div>
	);
};
