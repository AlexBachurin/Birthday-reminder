export const transformAge = (date) => {
	const curYear = new Date().getFullYear();
	const personYear = date.slice(0, 4);

	const diffYear = Number(curYear) - Number(personYear);

	return diffYear;
};
