
let canvas = document.querySelector("#c");
let context = canvas.getContext("2d");

document.querySelector("#inserirFrase").addEventListener("click", function(e){
	e.preventDefault();
	createtextInImage();
});

document.querySelector("#carregarImagem").addEventListener("click", function(e){
	e.preventDefault();
	createImage(document.querySelector("#linkImagem").value);
});

//https://2.bp.blogspot.com/-3I9STecZVjA/TzG6jEfWCGI/AAAAAAAAfKQ/JSLV2yzPHJQ/s1600/VUDU.jpg
function createImage(src){
	let image = new Image();
	image.src = src;
	image.onload = function(){
		context.drawImage(this, 0, 0, canvas.width, canvas.height);				
	}
}

document.querySelector("#btnFazerUpload").addEventListener("click", function(e){
	e.preventDefault();	
});

document.querySelector("#btnInserirLink").addEventListener("click", function(e){
	e.preventDefault();	
});

function createtextInImage(){
	context.strokeText(document.querySelector("#frase").value, 
					document.querySelector("#x").value,
					document.querySelector("#y").value);
}

function saveImage(image){
	window.open(image.toDataURL());
}

