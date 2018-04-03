function loadFilter(data){
	alert("jins");
	var params = [];
	var param = data.data.result;
	alert(param);
	var total = data.data.result.total;
	params.push({"total":total,"rows":param});
	return params[0];
}