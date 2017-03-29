var http=require('http');
var url=require('url');

var server=http.createServer(function(req,res)
{
	var whole=req.url;
	var obj=url.parse(whole);
	var word=obj.pathname;
	console.log(word);
	var len=word.length;

	console.log(len);
	word=word.substr(1,len-1);
	console.log(word);
	var meanings={
		good:"nice"
	}
	var meaning=meanings[word];
	res.write(meaning);
	res.end();
});
server.listen(8080);	