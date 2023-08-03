import rateLimit from 'express-rate-limit';




export let limitget = () => {
    return rateLimit({
        windowMs: 3000, // 3 segundos - tiempo durante el cual se contabilizan las solicitudes
        max: 3, // número máximo de solicitudes permitidas
        statusCode: 429,
        // standardHeaders : true,
        // legacyHeaders : false,
        skip: (req, res)=>{
            if(req.headers["content-length"]>91){
                res.status(413).send({
                    status:413, 
                    message :"la cantidad de caracteres supera el limite."})
                return true
            }
        },
        message: {
            statusCode : 429,
            message : 'Has excedido el límite de solicitudes, por favor intenta de nuevo más tarde :('
        },
    });
}
