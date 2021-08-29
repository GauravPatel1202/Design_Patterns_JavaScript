function Singleton(){
 this.arr=[];
	return Singleton.instance==null ? Singleton.instance=this : Singleton.instance

}
function test(){
let local= new Singleton()
console.log(local)
 local.arr.push("1")
 console.log(local)
}
function test1(){
let local= new Singleton()
local.arr.push("2")
console.log(local)
}
function test3(){
let local= new Singleton()
local.arr.push("3")
console.log(local)
}
function test4(){
let local= new Singleton()
local.arr.push("4")
console.log(local)
}
test()
test1()
test3()
test4()