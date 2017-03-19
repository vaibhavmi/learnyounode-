var fs=require('fs');
var address=process.argv[2];
fs.readFile(address,function(err,data)
{
	if(err)
	{
		console.log(err);
	}
	else
	{
		var sum=0;
		data=data.toString();
		var len=data.length;
		for(var i=0;i<len;i++)
		{
			if(data[i]=='\n')
			{
				sum++;
			}
		}
		console.log(sum);
	}
});