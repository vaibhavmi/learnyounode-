var http=require('http');
var concatStream=require('concat-stream');
var array=[];

for(var i=0;i<3;i++)
{
	array[i]=process.argv[2+i];
}

function printError() {
	console.log('Got Error');
}

function changeURL() {
	if(i<2)
	{
		i++;
		http.get(array[i],handleResponse);
	}
}

function handleResponse(response) {
	response.setEncoding('utf8');
    response.pipe(concatStream(function (data) {
    console.log(data);
	}));
	response.on('error', printError);
	response.on('end',changeURL);
}
var i=0;
http.get(array[i],handleResponse);