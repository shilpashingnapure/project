
 
var timeid;

function order(e){
	e.preventDefault()

	alert("Your order is accepted")

	

	debounce("Your order is being cooked" , 3000)

	debounce("Your order is ready" , 8000)

	debounce("Order out for delivery" , 10000)

	debounce("Order delivered" , 12000)

}

function debounce(msg , time){
	
	setTimeout(function(){
		alert(msg)
	} , time)
}

	
