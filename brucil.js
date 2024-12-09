//protocolo de intercambio
var http=require('http');
//envio de el servidor mediante el uso del protocolo http
var server=http.createServer();

function mensaje(req, resp){
    //json que la respuesta se describa 
    //estado 200 sastisfactorio,mensaje de texto plano configurado mediante json
    resp.writeHead(200,{'content-type': 'text/plain'});
    //escribo el mensajeen texto plano
    resp.write('Mi nombre es miguel brucil,estudiante de la carrera de desarrollo de software de 5to semestres, mi edad es 24 años, mia pasatiemposfavoritos es camitata a las montañas y deporte favorito es cilicsmo de montaña');
    //finalice la comunicación cliente y servidor
    resp.end();
}