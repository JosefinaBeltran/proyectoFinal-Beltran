const FetchSimulation = (dataBase, time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dataBase);
			reject(new Error("Algo no anda bien, pruebe nuevamente."));
		}, time);
	});
};

export default FetchSimulation;