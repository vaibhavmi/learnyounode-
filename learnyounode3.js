var fs=require('fs');
var address=process.argv[2];
string=fs.readFileSync(address);
string=string.toString();
var len=string.length;
var sum=0;
for(var i=0;i<len;i++)
{
	if(string[i]=='\n')
	{
		sum++;
	}
}
console.log(sum);
