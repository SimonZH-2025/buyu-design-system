const http=require('http'),fs=require('fs'),path=require('path');
const root='/Users/zx/Documents/Github/neo-design-skill';
const types={'.html':'text/html','.js':'text/javascript','.png':'image/png','.css':'text/css'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/gallery.html';
  const f=path.join(root,p);
  fs.readFile(f,(e,d)=>{ if(e){res.writeHead(404);res.end('nf');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream'});res.end(d);});
}).listen(4599,()=>console.log('up'));
