
let canvas = document.querySelector("#c");
let context = canvas.getContext("2d");

document.querySelector("#inserirFrase").addEventListener("click", function(e){
	e.preventDefault();
	createtextInImage();
});

document.querySelector("#btnCarregarImagemUpload").addEventListener("click", function(e){
	e.preventDefault();
	uploadImage(e);
});

document.querySelector("#btnCarregarImagem").addEventListener("click", function(e){
	e.preventDefault();
	createImage(document.querySelector("#linkImagem").value);
});

document.querySelector("#btnFazerUpload").addEventListener("click", function(e){
	e.preventDefault();
	hideForms();
	document.querySelector("#frmUploadImagem").style.display = "block";
});

document.querySelector("#btnInserirLink").addEventListener("click", function(e){
	e.preventDefault();	
	hideForms();
	document.querySelector("#frmLinkImagem").style.display = "block";
});

function hideForms(){
	document.querySelector("#frmUploadImagem").style.display = "none";
	document.querySelector("#frmLinkImagem").style.display = "none";
}

function createtextInImage(){
	context.strokeText(document.querySelector("#frase").value, 
					document.querySelector("#x").value,
					document.querySelector("#y").value);
}

function saveImage(image){
	window.open(image.toDataURL());
}

function createImage(src){
	let image = new Image();
	image.src = src;
	image.onload = function(){
		context.drawImage(this, 0, 0, canvas.width, canvas.height);				
	}
}

function uploadImage(evt) {
	console.log(evt);
	console.log(evt.target);
	let file = document.querySelector("#uploadImagem").files[0];
	let reader = new FileReader();
	reader.onload = function(fileObject) {
		createImage(fileObject.target.result);		
	};
	reader.readAsDataURL(file);
}