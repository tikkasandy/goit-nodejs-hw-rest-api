const sgMail = require('@sendgrid/mail')

const emailTemplate = require('./emailTemplate')

const { SENDGRID_API_KEY, SENDGRID_FROM } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (email, verificationToken) => {
    const mailText = emailTemplate(email, verificationToken)
    const mail = {
        ...mailText,
        from: SENDGRID_FROM
    };

    await sgMail.send(mail);
    return true;
}

module.exports = sendEmail