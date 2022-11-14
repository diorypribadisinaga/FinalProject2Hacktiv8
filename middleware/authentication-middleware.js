const { verify } = require("./../helpers/jwt");
const { User } = require("./../models/index");

async function authenticationMiddleware(req, res, next) {
	const  {authorization}  = req.headers;
	const token = authorization || authorization.split("Bearer ");
	if(!token) throw {name:"InvalidToken"}
	try {
		if (token.length !== 2) throw { name: "InvalidToken" };
		const { id, email } = verify(token[1]);
		const user = await User.findOne({ where: { id, email } });
		if (!user) throw { name: "Unauthorized" };
		req.user = { id, email };
		next();
	} catch (error) {
		next(error);
	}

}

module.exports = authenticationMiddleware;
