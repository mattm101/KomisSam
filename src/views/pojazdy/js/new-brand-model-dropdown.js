// const apiURLBrands = 'https://my-json-server.typicode.com/MateuszMalec101/fakeJson/brands';
const apiURLBrands = 'http://10.7.32.21:8080/komis-sam/registration/listBrands';

const $brandsDropdown = $('#nowy-marka-dropdown');
const $modelsDropdown = $('#nowy-model-dropdown');
const $alerts = $('#alerts');
const $bigIcon = $('#bigIcon');

$(function() {//po załadowaniu okna
	loadBrands();
	$brandsDropdown.on('change', loadModels);
    $('#acceptaceConfirmButton').on('click', sendMail);

})

function sendMail(){
    var idPoj = $('#idPojazdu').val();
    var mailWla =  $('#mailWlasciciela').text();
    console.log("mail: " + mailWla);
    console.log("ID poj: " +idPoj);
    let dane = {"email": mailWla, "carId":idPoj};
    requestIcon();
    $.ajax({
        url : 'http://10.7.32.21:8080/komis-sam/mail/acceptance-confirmation',
        dataType : 'json',
        type : 'post',
        contentType : 'application/json',
        data :JSON.stringify(dane)
    }).done(ret => {    
        console.log("Odebrano odp");
        goodAlert("Wysłano email potwierdzający przyjęcie.");
        
    }).fail(function() { 
            warnAlert("Nie udało się wysłać emaila.");
    }).always(function() {
            responseIconCar(); 
    });
}

function requestIcon(){
    $bigIcon.empty();
    const $element = $(`
            <i class="fa fa-refresh fa-spin" aria-hidden="true"></i>
        `);
    $bigIcon.append($element);
}

function responseIconCar(){
    $bigIcon.empty();
    const $element = $(`
            <i class="fa fa-car" aria-hidden="true"></i>
        `);
    $bigIcon.append($element);
}

function goodAlert(text){
    const $element = $(`
            <div class="alert alert-info alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>OK!</strong> ${text}
            </div>
        `);
    $alerts.append($element);
}

function warnAlert(text){
    const $element = $(`
            <div class="alert alert-dark alert-dismissible fade show">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Whoops!</strong> ${text}
            </div>
        `);
    $alerts.append($element);
}

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