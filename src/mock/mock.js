let Mock=require("mockjs");

let list=Mock.mock({
	"list|8":[{
		"id|+1":1,
		"title":"@ctitle(3,4)"
	}]
})
module.exports={
	list:list.list
}