window.onload = function(){

    let select = document.getElementById('select');
    let option = document.getElementsByTagName('option');
    let number = document.getElementById('number');
    var send = document.getElementById('send');
    let partOne = document.getElementById('part-one');
    let partTwo = document.getElementById('part-two');
    let offerRefused = document.getElementById('offer-refused');
    let offerAccepted = document.getElementById('offer-accepted');
    let pressKey = document.getElementById('pressKey');
    let offerContainer = document.getElementById('offer-container');
    let valueOffer = 0;
    
    select.addEventListener('change', function(){
        valueOffer = this.value;
        partOne.style.display = 'none';
        partTwo.style.display = 'block';  
        console.log(select.options.selectedIndex);
        console.log(select.value);
    })
    offerContainer.addEventListener('submit', function(e){
            e.preventDefault();
            if(select.options.selectedIndex == "1" && number.value > valueOffer * 0.8){
                partTwo.style.display = 'none';
                offerRefused.style.display = 'none';
                offerAccepted.style.display = 'block';
                pressKey.style.display = 'block';
            } else if(select.options.selectedIndex == "2" && number.value > valueOffer * 0.8){
                partTwo.style.display = 'none';
                offerRefused.style.display = 'none';
                offerAccepted.style.display = 'block';
                pressKey.style.display = 'block';
            } else if(select.options.selectedIndex == "3" && number.value > valueOffer * 0.8){
                partTwo.style.display = 'none';
                offerRefused.style.display = 'none';
                offerAccepted.style.display = 'block';
                pressKey.style.display = 'block';
            } else if(select.options.selectedIndex == "4" && number.value > valueOffer * 0.8){
                partTwo.style.display = 'none';
                offerRefused.style.display = 'none';
                offerAccepted.style.display = 'block';
                pressKey.style.display = 'block';
            } else {
                offerRefused.style.display = 'block'; 
                partOne.style.display = 'none';
                partTwo.style.display = 'none';
            }
        })
        document.addEventListener('keydown', function(e){
            if(e.key == 'w'){
                video.style.display = 'block';
                offerAccepted.style.display = 'none';
                pressKey.style.display = 'none';
               

            }
        })    
}