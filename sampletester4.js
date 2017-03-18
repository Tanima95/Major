    var mime_type = "image/png";
	var quality = 70;

    //var c = document.getElementById("myCanvas");
    //var ctx = c.getContext("2d");
    //var img = document.getElementById("puppy");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //var img = document.getElementById("puppy");
    //ctx.drawImage(img, 5, 10);
    
    var backCanvas = document.createElement('canvas');
    backCanvas.width = c.width;
    backCanvas.height = c.height;
    var backCtx = backCanvas.getContext('2d');
    var img = document.getElementById("puppy");


    backCtx.drawImage(img, 0,0);




    var data_URL = backCanvas.toDataURL(mime_type, quality/100);
    var myImage2 = new Image();
    //myImage2 = img;
    myImage2.src = data_URL;

    ctx.drawImage(myImage2, 0, 0);




    