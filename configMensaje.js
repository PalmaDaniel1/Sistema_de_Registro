const nodemailer = require("nodemailer");

module.exports = (formulario) => {
 const transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 port: 587,
 secure: false,
 auth: {
 user: 'perezpalmadaniel1@gmail.com', // Cambialo por tu email
 pass: 'Follow1995@' // Cambialo por tu password
 },
 tls:{
     rejectUnauthorized: false
 },
 });

const mailOptions = {
 from:`"hola 👻" <perezpalmadaniel1@gmail.com>` ,
 to: formulario.email , // Cambia esta parte por el destinatario
 subject: 'Auteenticacón' ,
 html: `
 <table style="max-width: 600px; padding: 10px; margin: 0 auto; border-collapse:
 collapse;">
     <tr>
         <td style="background-color: transparent; text-align: center; padding: 0;">
             <img width="10%" style="display: block; margin: 60px auto; text-align: center;" src=
                 "https://i.postimg.cc/hvbbLJ7K/logo1.png">
                 <h2 style="color: #0a0a0a; margin: 0 auto;">Hola ${formulario.nombre} te damos la Bienbenida!! </h2>
         </td>
     </tr>
     <tr>   
         <td style="color: #32495e; margin: 42% 10% 2%; text-align: justify;
         font-family: sans-serif;">
             
             <p style="margin: 30px; font-size: 15px;">
             Para finalizar el registro, haga clic en el botón de abajo para verificar su
             cuenta.<br>
             </p>
         <br>

         <div style="width: 100%; text-align: center;">
             <a style="text-decoration: none; border-radius: 5px; padding: 
             11px 23px; color: white; background-color: #3498db;" href="
             http://localhost:4200/Verificar">Validar Correo</a>
         </div>
         <br>
         <p style="margin: 30px; font-size: 15px;">
             Una vez verificado, podra inresar a la plataforma con su usuario y contraseña
             en el apartado de Logout.
             Esperamos brindarle la megor experiencia en su trabajo.
             <br>
         </p>
     <br>
         <p style="color: #b3b3b3; font-size: 12px; text-align: center;
         margin: 30px 0 0;">ArchySoft 2020</p>
         </td>
     </tr>
 </table>
 `
 };
 
transporter.sendMail(mailOptions, function (err, info) {
 if (err){
 //res.status(500).send(err.message); 
 console.log(err.message);
 //console.log('Mensaje enviado');
 }else{
 console.log(info.response);
 //console.log("no se pudo enviar");
 }
 });
}
