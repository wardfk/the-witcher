// window.onload = function(){

//     let select = document.getElementById('select');
//     let questionOne = document.getElementById('question-one');
//     let questionTwo = document.getElementById('question-two');
//     let offer = document.getElementById('offer');
//     let howMuch = document.getElementById('how-much');
//     const fastest = document.getElementById('fastest');
//     var value = select.value;
//     var offerValue = howMuch.value;
//     let witcher = document.getElementsByClassName('witcher');

//     select.onchange = function(){
//         switch (select.value){
//             case '1':
//                 questionOne.style.display = "none";
//                 questionTwo.style.display = "block";
//                 offer.style.display = "block";
//                 howMuch.style.display = "block";
//                 break;
//             case '2':
//                 questionOne.style.display = "none";
//                 questionTwo.style.display = "block";
//                 offer.style.display = "block";
//                 howMuch.style.display = "block";
//                 break;
//             case '3':
//                 questionOne.style.display = "none";
//                 questionTwo.style.display = "block";
//                 offer.style.display = "block";
//                 howMuch.style.display = "block";
//                 break;  
//             case '4':
//                 questionOne.style.display = "none";
//                 questionTwo.style.display = "block";
//                 offer.style.display = "block";
//                 howMuch.style.display = "block";
//                 break;                           
//         }
//     }

//     offer.addEventListener('click', function(){
//         if(offerValue = 40){
//             witcher.style.display = "block";
//         }
//     })
// }

window.onload = function(){
    let select = document.getElementById('select');
    let options = document.getElementsByTagName('option');
    let partTwo = document.getElementById('part-two');
    let partOne = document.getElementById('part-one');
    let send = document.getElementById('send');
    let howMuch = document.getElementById('how-much');
    let offerContainer = document.getElementById('offer-container');
    let fastest = document.getElementById('fastest');
    
    let offerRefused = document.getElementById('offer-refused');
    let offerAccepted = document.getElementById('offer-accepted');
    let video = document.getElementById('video');
    let pressKey = document.getElementById('press-key');
    let fastestContainer = document.getElementsByClassName('fastest-container');
    let eighty = (options.value/100)*80;

    // select.addEventListener('change', function(){
    //     if(options.value == 100){
    //         partOne.style.display = 'none';
    //         partTwo.style.display = 'block';
    //             send.addEventListener('click', function(){
    //                 if(howMuch.value < eighty){
    //                     offerRefused.style.display = 'block';
    //                 } else {
    //                     offerRefused.style.display = 'none';
    //                     partTwo.style.display = 'none';
    //                     offerAccepted.style.display = 'block';
    //                 }   
    //             })
    //     }else if(options.value == 250){
    //         partOne.style.display = 'none';
    //         partTwo.style.display = 'block';
    //             offer.addEventListener('click', function(){
    //                 if(howMuch.value < eighty){
    //                     offerRefused.style.display = 'block';
    //                 } else {
    //                     offerRefused.style.display = 'none';
    //                     partTwo.style.display = 'none';
    //                     offerAccepted.style.display = 'block';
    //                 }   
    //             })
    //     }else if(options.value == 400){
    //         partOne.style.display = 'none';
    //         partTwo.style.display = 'block';
    //             offer.addEventListener('click', function(){
    //                 if(howMuch.value < eighty){
    //                     offerRefused.style.display = 'block';
    //                 } else {
    //                     offerRefused.style.display = 'none';
    //                     partTwo.style.display = 'none';
    //                     offerAccepted.style.display = 'block';
    //                 }   
    //             })
    //     }else{
    //         partOne.style.display = 'none';
    //         partTwo.style.display = 'block';
    //         offer.addEventListener('click', function(){
    //             if(howMuch.value < eighty){
    //                 offerRefused.style.display = 'block';
    //             } else {
    //                 offerRefused.style.display = 'none';
    //                 partTwo.style.display = 'none';
    //                 offerAccepted.style.display = 'block';
    //             }   
    //         })
    //     }
    //     })
    

    
    
    select.addEventListener('change', function(){
        partOne.style.display = 'none';
        partTwo.style.display = 'block';
        offer.addEventListener('click', function(){
            if(howMuch.value < 80){
                offerRefused.style.display = 'block';
            } else {
                offerRefused.style.display = 'none';
                partTwo.style.display = 'none';
                offerAccepted.style.display = 'block';
            }   
        })
    })
    document.addEventListener('keydown', function(e){
        if(e.key === 'w'){
            offerAccepted.style.display = 'none';
            pressKey.style.display = 'none';
            fastestContainer.style.display = 'none';
            video.style.display = 'block';
        }
    })
}

    
    // offer.addEventListener('click', function(){
    //         if(offerValue == 100){
    //             console.log('true');
    //         }
    //     })

// offer.addEventListener('submit', function(){
//     if(offerValue == 100){
//         console.log('true');
//     }else{
//         console.log('false');
//     }
// })



