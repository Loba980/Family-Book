var names=["Dad", "Mom", "Daughter", "Son"];
var images=["https://image.shutterstock.com/image-vector/cartoon-dancing-dad-600w-215194267.jpg", "https://image.shutterstock.com/image-vector/working-mom-600w-158801597.jpg", "https://image.shutterstock.com/image-vector/cute-little-girl-standing-dress-600w-2146032953.jpg", "https://image.shutterstock.com/image-vector/vector-cartoon-funny-little-boy-600w-734952883.jpg"];

var i=0;
function next(){
    document.getElementById("family_name").innerHTML= names[i];
    document.getElementById("image").src= images[i];
    i++;
}