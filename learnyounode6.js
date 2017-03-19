var takeit=require('./justdoit');
var direcname=process.argv[2];
var extname=process.argv[3];
takeit(direcname,extname,function(err,data)
{
	if(err)
	{
		return console.log("there is an error");
	}
	data.forEach(function(file)
	{
		console.log(file);
	});
});