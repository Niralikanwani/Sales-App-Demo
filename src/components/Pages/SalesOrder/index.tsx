import React from "react";
import { Box, Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import OrderDetail from "./OrderDetail";
import TechnicalDetails from "./TechincalDetails";
import { SalesOrderDetailModel } from "models/SalesOrderDetail/SalesOrderDetail";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SalesOrder: React.FC = () => {
	const validationSchema = Yup.object().shape({
		orderDetails: Yup.object().shape({
			customer: Yup.string().required("Please enter customer"),
			partNumber: Yup.string().required("Please enter part number"),
			dimensions1: Yup.string().required("Please enter dimension1"),
			dimensions2: Yup.string().required("Please enter dimension2"),
			orderDate: Yup.string().required("Please enter order date"),
			deliveryTerms: Yup.string().required("Please enter delivery terms"),
			deliveryDate: Yup.string().required("Please enter delivery date"),
			orderNumber: Yup.string().required("Please enter order number"),
			orderStatus: Yup.string().required("Please enter order status"),
			invoiceNumber: Yup.string().required("Please enter invoice number"),
			size: Yup.string().required("Please enter size"),
			costPerSqCm: Yup.string().required("Please enter cost per sq cm"),
			pcbQuantity: Yup.string().required("Please enter pcb quantity"),
			costPerPcb: Yup.string().required("Please enter cost per pcb"),
			orderSize: Yup.string().required("Please enter order size"),
			oldPanelNumber: Yup.string().required("Please enter old panel number"),
			performanceInvoice: Yup.string().required(
				"Please enter performance invoice"
			),
			panelNumber: Yup.string().required("Please enter panel number"),
			purchaseOrderNumber: Yup.string().required(
				"Please enter purchase ordre number"
			),
			setupCharges: Yup.string().required("Please enter setup charges"),
			totalPcbCost: Yup.string().required("Please enter total pcb cost"),
			costPerPcbWithSetupCharges: Yup.string().required(
				"Please enter cost per pcb with setup charges"
			),
			subTotalAmount: Yup.string().required("Please enter sub total amount"),
			tax: Yup.string().required("Please enter tax"),
			totalAmount: Yup.string().required("Please enter total amount"),
		}),
		technicalDetails: Yup.object().shape({
			plRout: Yup.string().required("Please enter pl rout"),
			blind: Yup.string().required("Please enter blind"),
			sMColor: Yup.string().required("Please enter sm color"),
			lPColor: Yup.string().required("Please enter lp color"),
			tG: Yup.string().required("Please enter tg"),
			cSK: Yup.string().required("Please enter csk"),
			panelThickness: Yup.string().required("Please enter panel thickness"),
			pcbLayers: Yup.string().required("Please enter pcb layers"),
			edgePlating: Yup.string().required("Please enter edge plating"),
			viaFill: Yup.string().required("Please enter via fill"),
			class: Yup.string().required("Please enter class"),
			vScore: Yup.string().required("Please enter vscore"),
			baseCU: Yup.string().required("Please enter base CU"),
			finishCU: Yup.string().required("Please enter finish CU"),
			mfgLogoPlace: Yup.string().required("Please enter mf logo and place"),
			impedenceControl: Yup.string().required("Please enter impedence control"),
			peelable: Yup.string().required("Please enter peelable"),
			carbon: Yup.string().required("Please enter carbon"),
			solderDam: Yup.string().required("Please enter solder dam"),
			dateCode: Yup.string().required("Please enter date code"),
			hardGoldTabs: Yup.string().required("Please enter hard gold tabs"),
			seventyRun: Yup.string().required("Please enter seventy run"),
			minTrackWidth: Yup.string().required("Please enter min track width"),
			minSpacing: Yup.string().required("Please enter min spacing"),
			copperAreaTop: Yup.string().required("Please enter copper area top"),
			copperAreaBottom: Yup.string().required(
				"Please enter copper area bottom"
			),
			laminateType: Yup.string().required("Please enter laminate type"),
			laminateMake: Yup.string().required("Please enter laminate make"),
			surfaceFinish: Yup.string().required("Please enter surface finish"),
			ulLogoPlace: Yup.string().required("Please enter ul logo and place"),
			remarks: Yup.string().required("Please enter remarks"),
		}),
	});

	const methods = useForm<SalesOrderDetailModel>({
		defaultValues: new SalesOrderDetailModel(),
		mode: "onChange",
		resolver: yupResolver(validationSchema),
	});

	const handleSalesOrderSave = async (model: SalesOrderDetailModel) => {
		console.log(model);
		alert("Success");
	};

	return (
		<>
			<FormProvider {...methods}>
				<div className="white-box">
					<OrderDetail />
					<TechnicalDetails />
					<Box textAlign="end">
						<Button
							variant="contained"
							onClick={methods.handleSubmit(handleSalesOrderSave)}
						>
							Save Sales Order Data
						</Button>
					</Box>
				</div>
			</FormProvider>
		</>
	);
};

export default SalesOrder;
