


	var mime_type = "image/jpeg";
	var quality = 70;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("puppy");
    ctx.drawImage(img, 5, 10);


    var data_URL = c.toDataURL(mime_type, quality/100);
    




    