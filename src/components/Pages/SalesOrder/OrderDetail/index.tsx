import { Button, Grid } from "@mui/material";
import { CustomSelect } from "components/CustomComponents/Select";
import CustomTextField from "components/CustomComponents/TextField";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const OrderDetail: React.FC = () => {
	const methods = useFormContext();
	const details = methods.watch([
		"orderDetails.tax",
		"orderDetails.subTotalAmount",
		"orderDetails.costPerPcbWithSetupCharges",
		"orderDetails.totalPcbCost",
		"orderDetails.setupCharges",
	]);

	useEffect(() => {
		methods.setValue(
			"orderDetails.totalAmount",
			Number(details[0]) +
				Number(details[1]) +
				Number(details[2]) +
				Number(details[3]) +
				Number(details[4]),
			{ shouldValidate: true }
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [details]);

	return (
		<>
			<h2>Order Detail</h2>
			<div className="white-box">
				<Grid container spacing={2}>
					<Grid item xs={12} sm={7}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<CustomTextField
									customWidth="300px"
									name="orderDetails.customer"
									label="CUSTOMER"
								/>
							</Grid>
							<Grid item xs={12}>
								<CustomTextField
									customWidth="300px"
									name="orderDetails.partNumber"
									label="PART NUMBER"
								/>
							</Grid>
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={7}>
										<Grid container spacing={2}>
											<Grid item xs={7}>
												<CustomTextField
													name="orderDetails.dimensions1"
													label="DIMENSIONS (mm)"
													type="number"
													customWidth="150px"
												/>
											</Grid>
											<Grid item xs={5}>
												<CustomTextField
													name="orderDetails.dimensions2"
													label="X"
													type="number"
													customWidth="30px"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.orderDate"
													label="ORDER DATE"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomSelect
													name="orderDetails.deliveryTerms"
													label="DELIVERY TERMS"
													options={[
														{ label: "delivery term 1", value: "1" },
														{ label: "delivery term 2", value: "2" },
													]}
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.deliveryDate"
													label="DELIVERY DATE"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.orderNumber"
													label="ORDER NUMBER"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomSelect
													name="orderDetails.orderStatus"
													label="ORDER STATUS"
													options={[
														{ label: "order Status 1", value: "1" },
														{ label: "order Status 2", value: "2" },
													]}
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.invoiceNumber"
													label="INVOICE #"
												/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} sm={5}>
										<Grid container spacing={2}>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.size"
													label="SIZE Sq. Cm."
													type="number"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.costPerSqCm"
													label="COST PER Sq. Cm."
													type="number"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.pcbQuantity"
													label="PCB QUANTITY"
													type="number"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.costPerPcb"
													label="COST PER PCB"
													type="number"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.orderSize"
													label="ORDER SIZE (Sq. Mtr.)"
													type="number"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.oldPanelNumber"
													label="OLD PANEL NUMBER"
												/>
											</Grid>
											<Grid item xs={12}>
												<CustomTextField
													name="orderDetails.performanceInvoice"
													label="PERFORMA INVOICE #"
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={5}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={9}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.panelNumber"
											label="PANEL NUMBER"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.purchaseOrderNumber"
											label="PURCHASE ORDER #"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.setupCharges"
											label="SETUP CHARGES"
											type="number"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.totalPcbCost"
											label="TOTAL PCB COST"
											type="number"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.costPerPcbWithSetupCharges"
											label="COST PER PCB (With Setup Charges)"
											type="number"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.subTotalAmount"
											label="SUB TOTAL AMOUNT"
											type="number"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.tax"
											label="TAX (GST 18%)"
											type="number"
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomTextField
											customWidth="300px"
											name="orderDetails.totalAmount"
											label="TOTAL AMOUNT"
											isDisabled
											type="number"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} sm={3}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Button variant="contained" color="success">
											CREATE ORDER
										</Button>
									</Grid>
									<Grid item xs={12}>
										<Button variant="contained" color="primary">
											UPDATE ORDER
										</Button>
									</Grid>
									<Grid item xs={12}>
										<Button variant="contained" color="secondary">
											UPLOAD FILE
										</Button>
									</Grid>
									<Grid item xs={12}>
										<Button variant="contained" color="warning">
											CHANGE DATE
										</Button>
									</Grid>
									<Grid item xs={12}>
										<Button variant="contained" color="secondary">
											PERF INVOICE
										</Button>
									</Grid>
									<Grid item xs={12}>
										<Button variant="contained" color="error">
											RESET
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default OrderDetail;
