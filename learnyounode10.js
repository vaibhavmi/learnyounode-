var net=require('net');
function changed(number)
{
	return (number>9)?number:"0"+number;
}
var present=new Date();
function vaibhav()
{
	var str=present.getFullYear()+"-"+changed(present.getMonth()+1)+"-"+changed(present.getDate())+" "+changed(present.getHours())+":"+changed(present.getMinutes());
	return str;
}
var server=net.createServer(function(socket)
{
	socket.end(vaibhav()+"\n");
}); 
server.listen(process.argv[2]);