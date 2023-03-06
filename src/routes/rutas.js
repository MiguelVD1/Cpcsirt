const { Router } = require('express');//mandamos a trear a express y le diecimos que vamos a ocupar rutas
const router=Router();// secrea un objeto para difinir rutas 
const nodemailer= require('nodemailer');
let alert = require('alert');

router.post('/send-email',async(req,res)=>{
    try{
    const correo= req.body.email;
    const {empresa,nombre_em,telefono,mensaje}= req.body;
        contentHTML=`
            <h1>Correo con el boton de emergencia</h1>
            <ul>
                <li>Empresa:${empresa}</li>
                <li>Nombre:${nombre_em}</li>
                <li>Telefono:${telefono}</li>
                <li>Correo:${correo}</li>
            </ul>
            <p>${mensaje}</P>
            `;
        //se configura a donde se envia
        const transporter= nodemailer.createTransport({//se crea el transport con los datos de host del envio del correo en este caso con outlook
            host:'smtp.office365.com',
            port: 587,
            auth:{//es para poner los datos de donde se envia los mensajes
                user:'correo',
                pass:'password'
            },
            tls:{
                    ejectUnauthorized:false// no es necesario que se envie un correo desde le mismo dominio de la web
                }
        });
        console.log(contentHTML);
        //metodo para enviar correo 
        const info=await transporter.sendMail({
            from:"'Cpcsirt'<correo>",
            to:'destinatario',
            subject:'Cpscirt',
            html:contentHTML
            })
            console.log('mensaje enviado', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
            //res.send('enviado');
            res.redirect('/index.html');     
    }catch(error){
        res.status(500).json({message:'error'});
        console.log(error.message);
    }
 });

module.exports=router;//exportamos lass rutas 