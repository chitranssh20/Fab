let cursor= document.querySelector('.cursor');
console.log(cursor);

document.addEventListener("mousemove", (e)=>{
	// cursor.style.top= pageY;
	var x= e.pageX;
	var y= e.pageY;
	
	cursor.style.top= y+'px';
	cursor.style.left= x+'px';
});
console.log("top value is "+ cursor.style.top);
console.log("left value is "+ cursor.style.left);