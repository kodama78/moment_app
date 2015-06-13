function temp(form){
  var Energy = parseFloat(form.kwhm.value);
  var Percentage = parseFloat(form.percentage_solar.value);
  var SunHours = parseFloat(form.peak_sun_hours.value);
  var SystemRaw =0;
  var System = 0;
  var FirstStep =0;
  var panel_size = parseFloat(form.panel_wattage.value)
  var numberOfPanels = parseFloat(form.numberOfPanels.value);
  FirstStep =((Energy*1000)*(.01*Percentage))/30;
  SystemRaw = (FirstStep/SunHours);
  System_to_KW = SystemRaw / 1000;
  System = parseInt(SystemRaw);
  form.SystemSize.value = System_to_KW;
  form.numberOfPanels.value = Math.ceil(System / panel_size);
  console.log('system size is', System_to_KW + 'KW');
  console.log('form result is ', form);
  console.log('Systems value is ', System);
}

function panelChange(form, watts){
  console.log('panelChange function was called');
  var System = form.SystemSize.value * 1000;
if (System > 0){
  form.numberOfPanels.value = Math.ceil(System / watts);
} else {
  console.log('panelChange did not run');
  return;
}
}
$(document).ready(function(){
  console.log('document was loaded');
  $('#solar_form_calculate').click(function(){
    console.log('clicked calculate button');
    temp(this.form);
  });
  $('#panel_wattage').change(function(){
    panelChange(this.form, this.value);
    console.log('wattage was changed!');
    console.log('this value is ', this.value);
  });
});