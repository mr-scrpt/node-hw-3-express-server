const nodemailer = require('nodemailer');
const config = require('./config.json');

const sendMailer = ({name, email, message}) => {
  return new Promise(((resolve, reject) => {
    const transporter = nodemailer.createTransport(config.mail.smtp);
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: config.mail.smtp.auth.user,
      subject: config.mail.subject,
      text:
        message.slice(0, 500) +
        `\n Отправлено с: <${email}>`
    };

    transporter.sendMail(mailOptions,  (error, info) => {
      // если есть ошибки при отправке - сообщаем об этом
      if (error) {
        const selfErr = {
          msg: `При отправке письма произошла ошибка!: ${error}`,
          status: 'Error'
        };
        reject(selfErr);
      }
      const selfSuccess = {
        msg: 'Письмо успешно отправлено!',
        status: 'Ok'
      };
      resolve(selfSuccess)
    })
  }));

};

module.exports = sendMailer;