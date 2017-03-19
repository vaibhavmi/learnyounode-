var http=require('http');
var url=process.argv[2];

function printData(data) {
	console.log(data);
}

function printError() {
	console.log('Got Error')
}

function handleResponse(res) {
	res.setEncoding('utf-8');
	res.on('data', printData);
	res.on('error', printError);
}

http.get(url, handleResponse);