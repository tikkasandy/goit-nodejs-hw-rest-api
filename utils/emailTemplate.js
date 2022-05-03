const Mailgen = require('mailgen')

const { PORT = 3000 } = process.env

const emailTemplate = (email, verificationToken) => {
    const mailgen = new Mailgen({
        theme: 'default',
        product: {
            name: 'Contacts book',
            link: 'https://github.com/tikkasandy/goit-nodejs-hw-rest-api'
        }
    })

    const mail = {
        body: {
            name: email,
            intro:
                "Welcome to Contacts Book! We're very excited to have you on board.",
            action: {
                instructions: 'To get started with Contacts Book, please click here:',
                button: {
                    color: '#22BC66', // Optional action button color
                    text: 'Confirm your account',
                    link: `http://localhost:${PORT}/api/users/verify/${verificationToken}`,
                },
            },
            outro:
                "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    }

    const message = mailgen.generate(mail)

    return {
        to: email,
        subject: 'Welcome to Cantacts Book! Confirm Your Email',
        html: message,
    }
}

module.exports = emailTemplate