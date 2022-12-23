
const URL = 'https://script.google.com/macros/s/AKfycbyPXvSNv2g-yK9JX-jsuTiUInj8wxSWVq3kInPOqcM8Mi9o0LeBVpZMoORgOIBOGL-Q/exec';

$(document).ready(function() {
	init();
});

function init() {
	$('#spinner').fadeIn(2000);
	//  $('#spinner').fadeOut(4000);
	
	move(); 
	$('.btn-send').click(function(e){

		postData();
		loadData();
	});
}

function postData(){
	let params = {};
	params.method = 'write1';
	params.userName = $('input[name=userName]').val();
	params.restaurantlName = $('input[name=restaurantlName]').val();
    // params.foodType = $('input[name=foodType]:checked').val();
	// params.userTitle = $('input[name=userTitle]').val();
    params.grade = $('select[name=grade]').val();

	let ary = [];
	$('input[name=userNeed1]:checked').each(function(index, el){
		if($(this).val() == '其他'){
			ary.push($('input[name=userNeed1-5-text]').val());
		}else{
			ary.push($(this).val());
		}
	})
	params.userNeed1 = JSON.stringify(ary);

	let ary2 = [];
	$('input[name=foodType]:checked').each(function(index, el){
		if($(this).val() == '其他'){
			ary2.push($('input[name=foodType5-text]').val());
		}else{
			ary2.push($(this).val());
		}
	})
	params.foodType = JSON.stringify(ary2);
	// textarea
	params.userNeed3 = $('textarea[name=userNeed3]').val();
	// params.userNeed4 = $('textarea[name=userNeed4]').val();


	$.post(URL, params, function(data){
		if(data.result == 'sus'){

		}else{
			alert(data)
		}
	}).fail(function(data){
		alert(data)
	});
    console.log(params);
}
function loadData(){
	let params = {};
	params.method = 'read1';

	$.post(URL, params, function(data){
		if(data.result == 'sus'){
			let userData = data.data;
			for(let i=0;i<userData.length;i++){
				let content = oneRow(i+1, userData[i]);
				$('tbody').append(content);
			}
		}else{

		}
	}).fail(function(data){

	});
}




function oneRow(n, man){
	let html = `
				<tr>
					<th scope="row">${n}</th>
					<td>${man.userName}</td>
					<td>${man.restaurantlName}</td>
					<td>${man.foodType}</td>
					<td>${man.userNeed1}</td>
					<td>${man.grade}</td>
					<td>${man.userNeed3}</td>
				</tr>`;
	return html;
}

function move() {
	var elem = document.getElementById("myBar");   
	var width = 10;
	var id = setInterval(frame, 10);
	function frame() {
	  if (width >= 100) {
		clearInterval(id);
		$('#spinner').fadeOut(4000);
	  } else {
		width++; 
		elem.style.width = width + '%'; 
		document.getElementById("label").innerHTML = width * 1  + '%';
	  }
	}
	console.log(width);
	
  }