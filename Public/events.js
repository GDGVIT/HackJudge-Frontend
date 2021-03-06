let addBtn = document.querySelector('.add');
let card = document.querySelector('.card');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close');
let createBtn  = document.querySelector('.create1');
let dateDisplay  = document.querySelector('.date');

addBtn.addEventListener('click', function(){
    card.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', function(){
    card.classList.remove('active');
    overlay.classList.remove('active');
});

closeBtn.addEventListener('click', function(){
    card.classList.remove('active');
    overlay.classList.remove('active');
});

createBtn.addEventListener('click', function(e){
    e.preventDefault();
});



// ################ JQUERY #############
// ################ JQUERY #############

let addStatements = $('.add-statements');
let wrapper = $('.problem-statements');
const max = 5;
const min = 2;
let i = 3;

addStatements.on('click', function(e){
    e.preventDefault();
    console.log('clicked');
    if(i<=max)
    {
        console.log(i);
        wrapper.append("<div class='new-div'><label for='problem-'"+i+">Problem Statement "+i+"</label><input style='margin-left: 3px' type='text' id='problem-"+i+"'><span class='remove'>-</span></div>");
        if(i <= max)
        {
            i++;
        }

        let removeStatements = $('.remove');

        removeStatements.on('click', function(e){
            e.preventDefault();
            console.log('clicked');
            $(this).parents('.new-div').remove();
            if(i>min+1)
            {
                i--;
            }
        });
    }

});


let addMetrics = $('.add-metrics');
let wrapper2 = $('.judgement');
let j = 3;

addMetrics.on('click', function(e){
    e.preventDefault();
    console.log('clicked');
    if(j<=max)
    {
        console.log(i);
        wrapper2.append("<div class='metric-main'><label for='metric-"+j+"'>Metric "+j+"</label><input style='margin-left: 3px' type='text' id='metric-"+j+"'><label for='max-score-"+j+"' class='max' style='margin-right: 8px'>Max Score "+j+"</label><input type='number' value='0' id='max-score-'"+j+"><span class='remove-metrics'>-</span></div>")
        if(j <= max)
        {
            j++;
        }

        let removeMetrics = $('.remove-metrics');
        removeMetrics.on('click', function(e){
            e.preventDefault();
            $(this).parents('.metric-main').remove();
            if(j > min+1)
            {
                j--;
            }
        }); 

    }

    
    $(function(){

        $('input[type="number"]').niceNumber();
  
    });
});


$(function(){

    $('input[type="number"]').niceNumber();
  
});

createBtn.addEventListener('click', function(e){
    e.preventDefault();
    let eventName = $('#event-name');
    let totalRounds = $('#rounds');
    let problemStatementOne = $('#problem-1'); 
    let problemStatementTwo = $('#problem-2'); 
    // let problemStatementThree = document.querySelector('#problem-3');
    let maxScoreOne = $('#max-score-1'); 
    let maxScoreTwo = $('#max-score-2');
    let metricOne = $('#metric-1');
    let metricTwo = $('#metric-2');
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", sessionStorage.getItem("admin-token"));

    let data = {
        name: eventName.value,
        metric: [
            {
                metricName: metricOne.val(),
                maxScore: maxScoreOne.val()
            },
            {
                metricName: metricTwo.val(),
                maxScore: maxScoreTwo.val()
            }
        ],
        rounds: totalRounds.val(),
        problemStatements: [problemStatementOne.val(), problemStatementTwo.val()]
    };

    let raw = JSON.stringify(data);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'no-cors'
      };

      fetch("https://hackjudge.herokuapp.com/events", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

});
