const apiURLEdit = 'http://10.7.32.21:8080/komis-sam/registration/listBrands';
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
        url : apiURLEdit,
        dataType : 'json'
    })
    .done(ret => {	
    		console.log(ret);
        ret.forEach(brand => {
            var $element;
            if(brand.name == $activeBrand.val()){
                console.log("SELECTED " + brand.name);
               $element = $(`
                <option value="${brand.name}" selected>${brand.name}</option>
            `); 
            }else{
                console.log("NOT SELECTED " + brand.name);
                $element = $(`
                <option value="${brand.name}">${brand.name}</option>
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
        url : 'http://10.7.32.21:8080/komis-sam/registration/' + $brandsEditDropdown.find(":selected").text() + '/listModels',
        dataType : 'json'
    })
    .done(ret => {	
    		console.log(ret);
    		$modelsEditDropdown.empty();
    		  
        ret.forEach(model => {
            var $element;
            if(model.model == $activeModel.val()){
                console.log("SELECTED " + model.modelName);
               $element = $(`
                <option value="${model.modelName}" selected>${model.modelName}</option>
            `); 
            }else{
                console.log("NOT SELECTED " + model.modelName);
                $element = $(`
                <option value="${model.modelName}">${model.modelName}</option>
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