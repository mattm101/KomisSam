// const apiURLBrands = 'https://my-json-server.typicode.com/MateuszMalec101/fakeJson/brands';
const apiURLBrands = 'http://10.7.32.21:8080/komis-sam/registration/listBrands';

const $brandsDropdown = $('#nowy-marka-dropdown');
const $modelsDropdown = $('#nowy-model-dropdown');

$(function() {//po załadowaniu okna
	loadBrands();
	$brandsDropdown.on('change', loadModels);

})

function loadBrands(){
	$.ajax({
        url : apiURLBrands,
        dataType : 'json'
    })
    .done(ret => {	
    		console.log(ret);
        ret.forEach(brand => {
            const $element = $(`
                <option name="${brand.name}" value="${brand.id}">${brand.name}</option>
            `);
            
            $brandsDropdown.append($element);            
        });
    	loadModels();
        
    }).fail(function() { 
    	
    	console.log("Blad pobierania marek");
    		
    	
    })
    .always(function() {
    	console.log("Zakonczono pobieranie marek");
    	$modelsDropdown.attr("disabled", true);
    });
}

function loadModels(){
		$.ajax({
        url : 'http://10.7.32.21:8080/komis-sam/registration/' + $brandsDropdown.find(":selected").text() + '/listModels',
        dataType : 'json'
    })
    .done(ret => {	
    		console.log(ret);
    		$modelsDropdown.empty();
    		  
        ret.forEach(model => {
            const $element = $(`
                <option value="${model.modelName}">${model.modelName}</option>
            `);
            
            $modelsDropdown.append($element);            
        });
    	
        
    }).fail(function() { 
    	
    	console.log("Blad pobierania modeli");
    		
    	
    })
    .always(function() {
    	console.log("Zakonczono pobieranie modeli");
    	$modelsDropdown.attr("disabled", false);
    });
	

	
}