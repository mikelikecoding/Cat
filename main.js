// const { response } = require("express");m

console.log("Hello Cat App");

// For the log in page

let data, data2, data3, signUpData = {}, Email, catTarget, cData = [], myCData,  newCData;

//Grabing the forms data

const form = document.getElementById('form');
 

$('.submit').click((event) => {
  event.preventDefault();

  const email_pattern = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;

  if (form.email.value === '') {
    $('#formMessage').text(`PLEASE FILL EMAIL FIELD CORRECTLY`);
    $('#formMessage').slideDown().delay(3000).fadeOut();

  }else if (form.phone.value === '') {
    $('#formMessage').text(`PLEASE FILL PHONE FIELD CORRECTLY`);
    $('#formMessage').slideDown().delay(3000).fadeOut();
  }else if (form.first.value === '') {
    $('#formMessage').text(`PLEASE FILL FIRST NAME FIELD CORRECTLY`);
    $('#formMessage').slideDown().delay(3000).fadeOut();
  }else if (form.last.value === '') {
    $('#formMessage').text(`PLEASE FILL LAST NAME FIELD CORRECTLY`);
    $('#formMessage').slideDown().delay(3000).fadeOut();
  }else if (form.city.value === '') {
    $('#formMessage').text(`PLEASE FILL CITY FIELD CORRECTLY`);
    $('#formMessage').slideDown().delay(3000).fadeOut();
  }else if (form.state.value === '') {
    $('#formMessage').text(`PLEASE FILL STATE FIELD CORRECTLY`);
    $('#formMessage').slideDown().delay(3000).fadeOut();
  } else {
    data = {
      email: form.email.value,
      phone: form.phone.value,
      first: form.first.value,
      last: form.last.value,
      city: form.city.value,
     state: form.state.value,
    };

   

     signUpData.email = form.email.value;
     signUpData.phone = form.email.value;
     signUpData.first = form.first.value;
     signUpData.last = form.last.value;
     signUpData.city = form.city.value;
     signUpData.state = form.city.value;
   



  const url = 'http://localhost:3003/reg'
  

  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(signUpData), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json()
  }).then(data => {
    console.log('Did I get something here?', data,`THE SIGN UP OBJECT`);

      
    console.log(data,`THE SIGN UP OBJECT ON LINE 113`)
    
    data3 = data
    
     newCData = JSON.stringify(data3);
    localStorage.setItem("newCData", newCData);
    // localStorage.clear()
    window.location.href = 'rescue.html';

  
  })
  .catch(error => console.error('Error:', error)); 
  
}
  
});




myCData = localStorage.getItem('newCData');
     data3 = JSON.parse(myCData);

    console.log(data3, data3.first,`LINE 142222222`) 

  $('.clientData').append(`<p>Welcome ${data3.first} Would you like to save a life today `);
  

let collect = {}, collectArr = [], newCollectArr = [], myCollect;

// document.querySelector('.catContainer').addEventListener('click', (event) => {

$('.catContainer').click((e) => {

  catTarget = event.target.getAttribute('data-num');

  let newCatTarget = parseInt(catTarget, 10);

  let dataT = {
    catt: newCatTarget
  }

    console.log(newCatTarget);

    const url = 'http://localhost:3003/kat'
  
  


  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(dataT), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res.json()
  }).then(data => {
    console.log('Did I get something here?', data, data.name, data.image);

    // collect.name = data.name;
    // collect.image = data.image;
    
  console.log(collect, data)

    collectArr.push(data)

    newCollect = JSON.stringify(collectArr);
    localStorage.setItem("newCollect", newCollect);
    // localStorage.clear();
    window.location.href = 'adopt.html';

  })
  .catch(error => console.error('Error:', error));       
  
});



myCollect = localStorage.getItem('newCollect');
     collect = JSON.parse(myCollect);

     let c

     for (c of collect) {
       console.log(c, c.name);
     }

     console.log(collect, `WHAT THE HELL  TOJJJJJJ`);

$('.sec1').append(`<img class="pic" src="${c.image}">`)
$('.sec1').append(`<h1 class="Next">${c.name}</h1>`);
$('.answer').append(`<a class="yes" href="certificate.html">YES!</a> <a class="no"href="rescue.html">No</a>`)




window.addEventListener("load", (event) => {
  $('.resMessage').text(`PLEASE TAKE A GOOD LOOK!!!`);
    
  $('.resMessage').css({
  'position': 'absolute',
  'width': '100vw',
  'top': '350px',
  'left': '50%',
  'color': 'red',
  'font-size': '2rem'
    });
    
    $('.resMessage').slideDown().delay(6000).fadeOut();
    
});



window.addEventListener("load", (event) => {
  
  $('.congrats').text(`Congradulation ${data3.first}.. You're are a new parent`)
   $('.ki').append(`<img class="kitPic" src="${c.image}" with="200px" height="200px">`)
   $('.kitName').text(`Your new child ${c.name}`)
   $('.fullName').text(`To ${data3.first}  ${data3.last}`)
});
