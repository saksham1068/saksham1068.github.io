<h1>
<div class="underlay"></div>
<span class="initial">
  <span>Kuki's</span>
  <span>smile is wonder</span>
</span>
<span class="final">
  <span>We will</span>
  <span>never let it fade</span>
</span>
</h1>
$(document).ready(function() {  
  setTimeout(function() {
    $('h1').addClass('zoom');
    $('h1 .initial').addClass('transInStart');
    $('h1 .underlay').addClass('show');
    setTimeout(function() {
      $('h1 .initial').removeClass('transInStart');
      $('h1 .underlay').removeClass('show');
    },50);
    setTimeout(function() {
      $('h1 .initial').removeClass('transInStart').addClass('transInMid');
      $('h1 .underlay').addClass('show');      
    },125);
    setTimeout(function() {
      $('h1 .initial').removeClass('transInMid').addClass('transInFin');
      $('h1 .underlay').removeClass('show');
    },175);
    
    setTimeout(function() {
      $('h1 .final').addClass('transInStart');
    $('h1 .underlay').addClass('show');
    },3500);
    setTimeout(function() {
      $('h1 .final').removeClass('transInStart')
      $('h1 .underlay').removeClass('show');
    },3550);
    setTimeout(function() {
      $('h1 .final').addClass('transInStepOne');
      $('h1 .underlay').addClass('show');
    },3650);
    setTimeout(function() {      
      $('h1 .initial').addClass('transOutStart');
      $('h1 .final').removeClass('transInStepOne').addClass('transInStepTwo');
      $('h1 .underlay').removeClass('show');
    },3750);
    setTimeout(function() {
      $('h1 .final').removeClass('transInStepTwo').addClass('transInStepThree');
      $('h1 .final span').first().addClass('show');
    },3900);
    setTimeout(function() {
      $('h1 .final').removeClass('transInStepThree');
      $('h1 .underlay').addClass('show');
    },3975);
    setTimeout(function() {
      $('h1 .initial').removeClass('transOutStart').addClass('transOutFin');
      $('h1 .final').removeClass('transInStepThree');
      $('h1 .final span:nth-child(2)').addClass('show');
      $('h1 .underlay').removeClass('show');
    },4050);  
    
  }, 4000); 
});