module.exports={
	devServer:{
		before(app){
			app.post("/list",(req,res)=>{
				let list=require("./src/mock/mock.js");
				res.send(list.list)
			})
		}
	}
}