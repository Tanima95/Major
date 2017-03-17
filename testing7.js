
var src_img = document.getElementsByTagName("img")[0] ;

var quality = 70;

var output_format = "jpg";

function compress(source_img_obj, quality, output_format){
             var mime_type = "image/jpeg";
             if(typeof output_format !== "undefined" && output_format=="png"){
                mime_type = "image/png";
             }
             

             var cvs = document.createElement('canvas');
             cvs.width = source_img_obj.naturalWidth;
             cvs.height = source_img_obj.naturalHeight;
             var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
             var newImageData = cvs.toDataURL(mime_type, quality/100);
             var result_image_obj = new Image();
             result_image_obj.src = newImageData;
             //return result_image_obj;
             return document.body.appendChild(cvs);
             //return document.getElementsByTagName("img")[0].src = result_image_obj;
},


//document.getElementsByTagName("img")[0].src = compress(src_img,quality,output_format); 

//document.body.appendChild(compress(src_img,quality,output_format));

compress(src_img,quality,output_format);