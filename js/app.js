'use strict';
let favAnim = prompt('Do you like pets? ').toLowerCase();
if (favAnim === 'yes'|| favAnim === 'y'){
  // console.log('Great I like them too!')
  alert('Cool I like them too!');
}else if(favAnim=== 'no'|| favAnim==='n'){
  //console.log('Whats wrong with you?')
  alert('Whats wrong with you?');
} else{
  //console.log('Common you have to answer yes or no!');
  alert('Common you have to answer yes or no!');
}
let favFood = prompt('I don`t think we have good burger in Amman! Do you agree?').toLowerCase();
switch(favFood){
case 'yes':
  // console.log('Isn`t that shameful!')
  alert('Isn`t that shameful!');
  break;
case 'y':
  // console.log('Isn`t that shameful!')
  alert('Isn`t that shameful!');
  break;
case 'no':
  //console.log('Prove it!');
  alert('Prove it!');
  break;
case 'n':
  //console.log('Prove it!');
  alert('Prove it!');
  break;
default:
  //console.log('I think you don`t like burgers!');
  alert('I think you don`t like burgers!');
}

let trvel = prompt('I like traveling, I have visited many countries, would you like to join in my next trip?').toLowerCase();
switch(trvel){
case 'yes':
  //console.log('Awsome, will be lots of fun')
  alert('Awsome, will be lots of fun');
  break;
case 'y':
  //console.log('Awsome, will be lots of fun')
  alert('Awsome, will be lots of fun');
  break;
case 'no':
  //console.log('Fine! will send you awsome photos')
  alert('Fine! will send you awsome photos');
  break;
case 'n':
  //console.log('Fine! will send you awsome photos')
  alert('Fine! will send you awsome photos');
  break;
default:
  //console.log('You have to do something in your vacation')
  alert('You have to do something in your vacation');
}


let sport = prompt('Do you do sport often?').toLowerCase();

if (sport === 'yes'|| sport==='y'){
  //console.log('Awsome, keep it up!')
  alert('Awsome, keep it up!');
}else if(sport==='no'|| sport==='n'){
  //console.log('You are missing a lot')
  alert('You are missing a lot');

}else{
  //console.log('Don`t run away from the answer')
  alert('Don`t run away from the answer');
}


let shisha = prompt('I smoke shisha everyday, do you?!').toLowerCase();

if (shisha==='yes'||shisha==='y'){
  //console.log('Shake my Hands')
  alert('Shake my Hands');

}else if(shisha==='no'||shisha==='n'){
  //console.log('Good for you')
  alert('Good for you');
}else {
  //console.log('Don`t run away!');
  alert('Don`t run away');
}
let lucknum = prompt('Can you guess my luck number it is below 15? (4 attempts only)');
let attempts = 0;
let myluck = 7;
while(attempts <4){
  if (Number(lucknum)=== myluck +2 || Number(lucknum===myluck+1)){
    lucknum = prompt('HOT! slightly higher, Try again');
    lucknum= Number(lucknum);
  }else if(Number(lucknum)===myluck-2 || Number(lucknum)===myluck-1){
    lucknum = prompt('HOT! slightly Lower, Try again');
    lucknum= Number(lucknum);
  }else if(Number(lucknum)>myluck+2){
    lucknum= prompt('Too high, Try again!');
    lucknum= Number(lucknum);

  }else if(Number(lucknum)<myluck-2){
    lucknum=prompt('Too low, try again!');
    lucknum= Number(lucknum);
  }
  else if(Number(lucknum)===myluck){
    console.log('OMG, You know the secret too!');
    alert('OMG, You know the secret too!');
    break;
  }

  attempts++;


}
if(lucknum!==myluck){
  alert('The answer is ' + myluck);
}else{
  console.log(lucknum);
}

let cities = ['istanbul', 'kuala lumpur', 'alanya', 'hague', 'dubai', 'beirut', 'candy'];
let whatCity = prompt('Lets see, will you be able to guess my favorit cities?');

for(let i=0;i<6;i++){
  if(cities.includes(whatCity)){
    console.log('Isn`t it amazing city?');
    alert('Isn`t it amazing city?');
    break;
  }else{
    console.log('Never been there, will visit in future Inshalla');
    cities= prompt('Never been there, will visit in future Inshalla, have another guess');

  }

}

let score = 0;
switch(favAnim){
case 'yes':
case'y':
  score++;
  break;
}
switch(favFood){
case'yes':
case'y':
  score++;
  break;
}
switch(trvel){
case'yes':
case'y':
  score++;
  break;
}
switch(sport){
case'yes':
case'y':
  score++;
  break;
}
switch(shisha){
case 'yes':
case'y':
  score++;
  break;
}
switch(lucknum){
case 7:
  score++;
  break;
}
if(cities.includes(whatCity)){
  score++;

}else{
  console.log(score);
}

alert('your score is: ' + score);








