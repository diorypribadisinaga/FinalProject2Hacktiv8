const {User,Photo}= require("./../models/index");
const { compare } = require("./../helpers/hash");

class MedsosController {
	static async FindAll(req, res) {
		const result = await User.findAll({order:[
			['id','ASC']]
		});
		res.json(result)
	}

	static async UpdateMedsos(req, res, next) {
		try {
			let {name_medsos, username, } = req.body;
			const id=req.params.id
			const MedsosId = req.medsos.id
			const medsos = await medsos.findOne(
				{where: {id}}
			)
			if(!medsos){
				throw {name:"ErrNotFound"}
			}
			if (medsos.id !== MedsosId) {
				throw {name: "not allowed"}
			}
			if(!username) {
				username = medsos.username
			}
			
			const result = await medsos.update({
				name_medsos, username
			}, {where: {id},returning:true})
			res.json(result[1])
		} catch (err) {
			console.log(err)
			next(err)
		}
	}

	static async DeleteMedsos(req,res,next){
		try{
			const id=req.params.id
			const MedsosId = req.medsos.id
			const medsos = await medsos.findOne(
				{where:{id}}
			)
			if(!medsos){
				throw {name:"ErrNotFound"}
			}
			if (MedsosId!==user.id){
				throw {name:"not allowed"}
			}
			await Medsos.destroy({where:{id}})
			res.json({message:"successfully deleted"})
		}catch (err) {
			next(err)
		}
	}
}
module.exports = MedsosController;