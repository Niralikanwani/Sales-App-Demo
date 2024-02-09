import { Grid } from "@mui/material";
import { CustomSelect } from "components/CustomComponents/Select";
import CustomTextField from "components/CustomComponents/TextField";
import React from "react";

const TechnicalDetails: React.FC = () => {
	return (
		<>
			<h2>Technical Details</h2>
			<div className="white-box">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={2.4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<CustomSelect
											name="technicalDetails.plRout"
											label="PL Rout"
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											name="technicalDetails.blind"
											label="Blind"
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "SM Color 1", value: "1" },
												{ label: "SM Color 2", value: "2" },
											]}
											name="technicalDetails.sMColor"
											label="SM Color"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "LP Color 1", value: "1" },
												{ label: "LP Color 2", value: "2" },
											]}
											name="technicalDetails.lPColor"
											label="LP Color"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "135", value: "1" },
												{ label: "TG", value: "2" },
											]}
											name="technicalDetails.tG"
											label="TG"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											name="technicalDetails.cSK"
											label="CSK"
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={2.4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Panel Thickness 1", value: "1" },
												{ label: "Panel Thickness 2", value: "2" },
											]}
											name="technicalDetails.panelThickness"
											label="Panel Thickness"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "PCB Layers 1", value: "1" },
												{ label: "PCB Layers 2", value: "2" },
											]}
											name="technicalDetails.pcbLayers"
											label="PCB Layers"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.edgePlating"
											label="Edge Plating"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.viaFill"
											label="Via Fill"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Class 1", value: "1" },
												{ label: "Class 2", value: "2" },
											]}
											name="technicalDetails.class"
											label="Class"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.vScore"
											label="VScore"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={2.4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Base CU 1", value: "1" },
												{ label: "Base CU 2", value: "2" },
											]}
											name="technicalDetails.baseCU"
											label="Base CU"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Finish CU 1", value: "1" },
												{ label: "Finish CU 2", value: "2" },
											]}
											name="technicalDetails.finishCU"
											label="Finish CU"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.mfgLogoPlace"
											label="Mfg Logo & Place"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.impedenceControl"
											label="Impedence Control"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.peelable"
											label="Peelable"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.carbon"
											label="Carbon"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={2.4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.solderDam"
											label="Solder Dam"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.dateCode"
											label="Date Code"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.hardGoldTabs"
											label="Hard Gold Tabs"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.seventyRun"
											label="70 RUN"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											name="technicalDetails.minTrackWidth"
											label="Min Track Width"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											name="technicalDetails.minSpacing"
											label="Min Spacing"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={2.4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<CustomTextField
											name="technicalDetails.copperAreaTop"
											label="Copper Area Top"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											name="technicalDetails.copperAreaBottom"
											label="Copper Area Bottom"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "FR4", value: "1" },
												{ label: "Laminate Type", value: "2" },
											]}
											name="technicalDetails.laminateType"
											label="Laminate Type"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Laminate Make 1", value: "1" },
												{ label: "Laminate Make 2", value: "2" },
											]}
											name="technicalDetails.laminateMake"
											label="Laminate Make"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "HASL", value: "1" },
												{ label: "Surface Finish", value: "2" },
											]}
											name="technicalDetails.surfaceFinish"
											label="Surface Finish"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomSelect
											options={[
												{ label: "Yes", value: "1" },
												{ label: "No", value: "2" },
											]}
											name="technicalDetails.ulLogoPlace"
											label="UL Logo & Place"
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<CustomTextField
							name="technicalDetails.remarks"
							label="REMARKS"
							rows={3}
						/>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default TechnicalDetails;
