const URL = 'https://script.google.com/macros/s/AKfycbyPXvSNv2g-yK9JX-jsuTiUInj8wxSWVq3kInPOqcM8Mi9o0LeBVpZMoORgOIBOGL-Q/exec';



$(document).ready(function() {
	loadData();
});
// function loadData(){
// 	let params = {};
// 	params.method = 'read1';

// 	$.post(URL, params, function(data){
// 		if(data.result == 'sus'){
// 			let userData = data.data;
// 			for(let i=0;i<userData.length;i++){
// 				let content = oneRow(i+1, userData[i]);
// 				$('tbody').append(content);
// 			}
// 		}else{

// 		}
// 	}).fail(function(data){

// 	});
// 	// console.log(params);
// }


function loadData(){
	let params = {};
	params.method = 'read1';

	$.post(URL, params, function(data){
		if(data.result == 'sus'){
			let userData = data.data;
			for(let i=0;i<userData.length;i++){
				
				let userName=userData.userName;
				let content =t01(i+1, userData[i]);

				$('#section ').append(content);
				// $('tbody').append(content);
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

// function oneRow(n, man){
// 	let html = `
// 	<div class="container bg-white col-6">
           
// 			<div class="box boxstyle">
// 			<div class="box1">
// 				<h5>${n}</h5>
// 				<h5>${man.userName}</h5>
// 				<h5>${man.restaurantlName}</h5>
// 				<h5>${man.foodType}</h5>
				
// 			</div>
// 			</div>
// 			<h5>${man.userNeed1}</h5>
// 			<h5>${man.grade}</h5>
// 			<h5>${man.userNeed3}</h5>
   
//   	</div>
//  `;
// 	return html;
// }
function t01(n, man){
    let html =`
   
    <div class="col-4  " >
       
            <div class="box1 position-relative hz-400 wz-300  mb-5  bgcolor rounded ">
                
            
                <div class="box2  position-absolute  bottom-20 text-light  mt-5  bg-white   hz-100 wz-200 rounded" >
						<div class="text position-relative text-center bottom-0   top-4 fz-10 text-secondary ms-1 ">
								<span>使用者姓名${man.userName}</span>
								<br>
								<span>餐廳名稱:${man.restaurantlName}</span>
								<br>
								<span>餐廳類別:${man.foodType}</span>
						</div>
				</div>
               
				<div class="text position-relative text-center top-5  mt=-5 fz-10 text-secondary textstyle ">
						<span>用餐的項目:${man.userNeed1}</span>
						<br>
						<span>評分:${man.grade}</span>
						<br>
						<span>心得:${man.userNeed3}</span>
				</div>
				
  
             </div>
           

        
       
    </div> 
           

    
        
    
  
    `;
    return html;
}