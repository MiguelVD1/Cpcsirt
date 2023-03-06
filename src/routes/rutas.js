const { Router } = require('express');//mandamos a trear a express y le diecimos que vamos a ocupar rutas
const router=Router();// secrea un objeto para difinir rutas 
const nodemailer= require('nodemailer');

router.post('/send-email',async(req,res)=>{
    const {empresa,email, emer}= req.body;
    contentHTML=`
        <h1>Correo con el boton de emergencia</h1>
        <ul>
            <li>Empresa:${empresa}</li>
            <li>Correo:${email}</li>
        </ul>
        <p>${emer}</P>
        `;
    //se configura a donde se envia
    const transporter= nodemailer.createTransport({//se crea el transport con los datos de host del envio del correo en este caso con outlook
        host:'smtp.office365.com',
        port: 587,
        auth:{//es para poner los datos de donde se envia los mensajes
            user:'miguel.villanueva@cyberpeace.tech',
            pass:'Lancaster;1920'
        },
        tls:{
                ejectUnauthorized:false// no es necesario que se envie un correo desde le mismo dominio de la web
            }
    });
    console.log(contentHTML);
    //metodo para enviar correo 
    const info=await transporter.sendMail({
        from:"'Cpcsirt'<miguel.villanueva@cyberpeace.tech>",
        to:'luis.pinedad@cyberpeace.tech',
        subject:'Cpscirt',
        html:contentHTML
        })
        console.log('mensaje enviado', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        //res.send('enviado');
        res.redirect('/index.html')
 });

module.exports=router;//exportamos lass rutas 