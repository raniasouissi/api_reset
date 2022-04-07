const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
            service:"gmail",
			auth: {
				user: "raniachiraz12@gmail.com",
				pass: "pfe@1234",
			},
		});
		await transporter.sendMail({
			from: 'test',
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
