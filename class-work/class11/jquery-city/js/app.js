// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

/* use this code or the one on the bottom
$('#first').click(changeToFirst);
$('#second').click(changeToSecond);
$('#third').click(changeToThird);
$('#fourth').click(changeToFourth);

function changeToFirst() {
  $('#bigimage').attr('src','img/1.jpg');
}

function changeToSecond() {
  $('#bigimage').attr('src','img/2.jpg');
}

function changeToThird() {
  $('#bigimage').attr('src','img/3.jpg');
}

function changeToFourth() {
  $('#bigimage').attr('src','img/4.jpg');
}
*/



//or use this one below//


$('.thumb').click(changeBigImage);
function changeBigImage () {
	var imageURL = $(this).attr('src');
	$('#bigimage').attr('src', imageURL);
}
	  



