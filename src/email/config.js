const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	host: 'smtp.live.com',
	secureConnection: false,
	port: 587,
	auth: {
		user: 'marcelo.bonora@bandtec.com.br',
		pass: '#Gf43934155820'
	},
	tls: {
		ciphers: 'SSLv3'
	}
});
module.exports = transporter;