

var cartData = JSON.parse(localStorage.getItem("addcart"))
displaycartData(cartData)


var total;
function displaycartData(arr){
	document.querySelector(".cartItem").innerHTML = ""
	total = 0
	arr.map(function(ele , i){
		var div = document.createElement("div")
		var imgdiv = document.createElement("div")

		var img = document.createElement("img")
		img.src = ele.strMealThumb
		imgdiv.append(img)

		var info = document.createElement("div")

		var mealname = document.createElement("p")
		mealname.innerText = ele.strMeal
		var price= document.createElement("p")
		
		price.innerText = ele.price
		total += ele.price
		info.append(mealname , price)
		var btn = document.createElement("button")
		btn.innerText = "Remove"
		btn.addEventListener("click" ,function(){
			removeItem(arr , i)
		})
		
		div.append(imgdiv ,info , btn)
		document.querySelector(".cartItem").append(div)

	})

	var t = document.querySelector(".total")
	t.innerText = "Total amout of items : " + total + "Rs"
	
}


function removeItem(arr , i){
	arr.splice(i , 1)
	localStorage.setItem("addcart" , JSON.stringify(arr))
	displaycartData(arr)

}


