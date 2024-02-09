import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { InputLabel, TextField } from "@mui/material";
import { Variant } from "utility/types/text-field-variant";

interface Props {
	name: string;
	label: string;
	type?: string;
	variant?: Variant;
	required?: boolean;
	className?: string;
	isDisabled?: boolean;
	rows?: number;
	customWidth?: string;
}

const CustomTextField: React.FC<Props> = ({
	name,
	label,
	type = "text",
	variant = "outlined",
	required = false,
	className,
	isDisabled = false,
	rows = undefined,
	customWidth = "200px",
}) => {
	const methods = useFormContext();

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
			<Controller
				name={name}
				control={methods.control}
				render={({
					field: { onChange, value, ref },
					fieldState: { error },
				}) => (
					<TextField
						required={required}
						type={type}
						variant={variant}
						onChange={onChange}
						value={value || ""}
						error={!!error}
						inputRef={ref}
						id={label}
						helperText={error ? error.message : null}
						className={className}
						disabled={!!isDisabled}
						rows={rows}
						multiline={!!rows}
						autoComplete="off"
						style={{ display: "inline-block" }}
					/>
				)}
			/>
		</div>
	);
};

export default CustomTextField;
