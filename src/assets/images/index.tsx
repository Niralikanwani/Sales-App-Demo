export const getImagePath = (imageNameWithExtension: string): string => {
	return require(`./${imageNameWithExtension}`);
};

export const logo = getImagePath("logo.jpg");
