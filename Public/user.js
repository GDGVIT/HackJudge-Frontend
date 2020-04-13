const realBtn = document.querySelector('#file');
const browseBtn = document.querySelector('#browseBtn');
const customTxt = document.querySelector('#customTxt');

browseBtn.addEventListener('click', function () {
    realBtn.click();
});

customTxt.addEventListener('click', function () {
    realBtn.click();
});

realBtn.addEventListener('change', function () {
    if (realBtn.value) {
        customTxt.textContent = realBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
    else {
        customTxt.textContent = "Select File..."
    }
});


// #####################
// jQuery
// #####################


// var max = 8;
// var x = 3;
// var wrapper = $('.embed');
// var addBtn = $('.add');



// addBtn.on('click', function(e){
//     e.preventDefault();
//     var amount = document.querySelector('#participant1').value;
//     console.log(amount);
//     if(amount < max)
//     {
//         $(wrapper).empty();
//         for(i=0; i<amount; i++)
//         {

//             console.log(i);
//             $(wrapper).append( "<div class='formOptions'> <label for='participant"+(i+1)+"'>Participant "+(i+1)+"</label> <input type='text' id='participant"+(i+1)+"' placeholder='Name'> </div>" );
//         }
//     }

//     document.querySelector('#participant1').value = '';
// });

let addParticipants = $('.add-participants');
let wrapper = $('.embed');
const max = 5;
const min = 2;
let i = 3;

addParticipants.on('click', function(e){
    e.preventDefault();
    console.log('clicked');
    if(i<=max)
    {
        console.log(i);
        wrapper.append("<div class='formOptions'> <label for='participant-"+i+"'> Participant "+i+" </label> <input type='text' id='participant-"+i+"'> <span class='remove'>-</span> </div>");
        if(i <= max)
        {
            i++;
        }

        let removeStatements = $('.remove');

        removeStatements.on('click', function(e){
            e.preventDefault();
            console.log('clicked');
            $(this).parents('.formOptions').remove();
            if(i>min+1)
            {
                i--;
            }
        });
    }

});


