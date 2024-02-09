export class OrderDetailModel {
	customer: string = "";
	partNumber: string = "";
	dimensions1: string = "";
	dimensions2: string = "";
	orderDate: string = "";
	deliveryTerms: string = "";
	deliveryDate: string = "";
	orderNumber: string = "";
	orderStatus: string = "";
	invoiceNumber: string = "";
	size: string = "";
	costPerSqCm: string = "";
	pcbQuantity: string = "";
	costPerPcb: string = "";
	orderSize: string = "";
	oldPanelNumber: string = "";
	performanceInvoice: string = "";
	panelNumber: string = "";
	purchaseOrderNumber: string = "";
	setupCharges: string = "";
	totalPcbCost: string = "";
	costPerPcbWithSetupCharges: string = "";
	subTotalAmount: string = "";
	tax: string = "";
	totalAmount: string = "";
}

export class TechnicalDetailModel {
	plRout: string = "";
	blind: string = "";
	sMColor: string = "";
	lPColor: string = "";
	tG: string = "";
	cSK: string = "";
	panelThickness: string = "";
	pcbLayers: string = "";
	edgePlating: string = "";
	viaFill: string = "";
	class: string = "";
	vScore: string = "";
	baseCU: string = "";
	finishCU: string = "";
	mfgLogoPlace: string = "";
	impedenceControl: string = "";
	peelable: string = "";
	carbon: string = "";
	solderDam: string = "";
	dateCode: string = "";
	hardGoldTabs: string = "";
	seventyRun: string = "";
	minTrackWidth: string = "";
	minSpacing: string = "";
	copperAreaTop: string = "";
	copperAreaBottom: string = "";
	laminateType: string = "";
	laminateMake: string = "";
	surfaceFinish: string = "";
	ulLogoPlace: string = "";
	remarks: string = "";
}

export class SalesOrderDetailModel {
	orderDetails: OrderDetailModel = new OrderDetailModel();
	technicalDetails: TechnicalDetailModel = new TechnicalDetailModel();
}
