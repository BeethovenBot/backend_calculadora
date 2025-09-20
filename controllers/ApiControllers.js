

function cron(req, res){
    //voy y consulto a la base de datos
    //Envio los recordatorios que tenga que enviar
    res.json({
        resultado: "Se ejecuto el cron"
    });
}

module.exports = {
    cron
}