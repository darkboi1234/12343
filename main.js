var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.formURL('BirthdayImage.jpg', function(Img){
        bolck_image_objet = Img;

        bolck_image_objet.scaleToWidth(2000);
        bolck_image_objet.scaleToHeight(2000);
        bolck_image_objet.set({
            top:0,
            left:0
        });
        canvas.add(bolck_image_objet);
    );
    }

function playSound()
{
    	function playSound(){
            x.play();
        }
}
