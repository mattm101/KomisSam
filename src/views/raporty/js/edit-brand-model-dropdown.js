const apiURLEdit = 'https://my-json-server.typicode.com/MateuszMalec101/KomisSam';
const $brandsEditDropdown = $('#edytuj-marka-dropdown');
const $modelsEditDropdown = $('#edytuj-model-dropdown');
const $activeBrand = $('#aktualna-marka');
const $activeModel = $('#aktualny-model');

$(function() {//po załadowaniu okna
	loadEditBrands();
	$brandsEditDropdown.on('change', loadEditModels);

})

function loadEditBrands(){
	$.ajax({
        url : apiURLEdit + `/brands`,
        dataType : 'json'
    })
    .done(ret => {	
    		console.log(ret);
        ret.forEach(brand => {
            var $element;
            if(brand.brand == $activeBrand.val()){
                console.log("SELECTED " + brand.brand);
               $element = $(`
                <option value="${brand.id}" selected>${brand.brand}</option>
            `); 
            }else{
                console.log("NOT SELECTED " + brand.brand);
                $element = $(`
                <option value="${brand.id}">${brand.brand}</option>
            `); 
            }
            
            
            $brandsEditDropdown.append($element);            
        });
    	loadEditModels();
        
    }).fail(function(data, textStatus, xhr) { 
    	console.log("error", data.status);
                 //This shows status message eg. Forbidden
                 console.log("STATUS: "+xhr);
    	console.log("Blad pobierania marek");
    		
    	
    })
    .always(function() {
    	console.log("Zakonczono pobieranie marek");
    	$modelsEditDropdown.attr("disabled", false);
    });
}

function loadEditModels(){
		$.ajax({
        url : apiURLEdit + `/brands/` + $brandsEditDropdown.val() + `/models`,
        dataType : 'json'
    })
    .done(ret => {	
    		console.log(ret);
    		$modelsEditDropdown.empty();
    		  
        ret.forEach(model => {
            var $element;
            if(model.model == $activeModel.val()){
                console.log("SELECTED " + model.model);
               $element = $(`
                <option value="${model.id}" selected>${model.model}</option>
            `); 
            }else{
                console.log("NOT SELECTED " + model.model);
                $element = $(`
                <option value="${model.id}">${model.model}</option>
            `); 
            }
            $modelsEditDropdown.append($element);            
        });
    	
        
    }).fail(function() { 
    	
    	console.log("Blad pobierania modeli");
    		
    	
    })
    .always(function() {
    	console.log("Zakonczono pobieranie modeli");
    	$modelsEditDropdown.attr("disabled", false);
    });
	

	
}