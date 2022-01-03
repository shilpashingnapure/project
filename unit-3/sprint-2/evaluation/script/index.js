
var url = "https://www.themealdb.com/api/json/v1/1/random.php"

var mealStore = JSON.parse(localStorage.getItem("meals")) || [];
displayfood(mealStore)
for(var i = 0 ; i < 20 && mealStore.length < 20; i++){
	fetch(url).then(function(res){
		return res.json()
	}).then(function(res){
		var addprice = Math.floor(Math.random() * (200-100) + 100)

		var data = res.meals[0]

		data["price"] = addprice
		mealStore.push(data)
		localStorage.setItem("meals" , JSON.stringify(mealStore))
	})
	.catch(function(err){
		console.log(err)
	})
}



function displayfood(arr){
	document.querySelector(".meals").innerHTML = ""
	arr.map(function(ele){
		var div = document.createElement("div")
		var imgdiv = document.createElement("div")

		var img = document.createElement("img")
		img.src = ele.strMealThumb
		imgdiv.append(img)

		var info = document.createElement("div")
		info.setAttribute("class","info")
		var mealname = document.createElement("p")
		mealname.innerText = ele.strMeal
		var price= document.createElement("p")
		
		price.innerText = ele.price

		var btn = document.createElement("button")
		btn.innerText = "ADD TO CART"
		btn.addEventListener("click" ,function(){
			addCart(ele)
		})
		info.append(mealname )
		div.append(imgdiv , info , btn)
		document.querySelector(".meals").append(div)

	})


}


var cart = JSON.parse(localStorage.getItem("addcart")) || [];
var count = document.querySelector(".count")
count.innerText = cart.length
function addCart(arr){
	cart.push(arr)
	localStorage.setItem("addcart" , JSON.stringify(cart))
	count.innerText = cart.length
}


