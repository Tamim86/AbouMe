'use strict'
let favAnim = prompt('Do you like pets? ')
let favFood = prompt('I don`t think we have good burger in Amman! Do you agree?')  
let trvel = prompt('I like traveling, I have visited many countries, would you like to join in my next trip?')
let sport = prompt('Do you do sport often?')
let shisha = prompt('I smoke shisha everyday, do you?!')

if (favAnim == 'yes'|| favAnim == 'y'){
// console.log('Great I like them too!')
alert('Cool I like them too!');
}
else if(favAnim== 'No'|| favAnim=='N'){
    //console.log('Whats wrong with you?')
    alert('Whats wrong with you?');
    } else{
        console.log('Common you have to answer yes or no!');
            }

switch(favFood){
    case 'yes':
        // console.log('Isn`t that shameful!')
        alert('Isn`t that shameful!');
    case 'y':
        // console.log('Isn`t that shameful!')
        alert('Isn`t that shameful!');
    case 'no':
        //console.log('Prove it!');
        alert('Prove it!');
    case 'n':
        //console.log('Prove it!');
        alert('Prove it!');
    default:
        //console.log('I think you don`t like burgers!');
        alert('I think you don`t like burgers!')

}

switch(trvel){
    case 'yes':
        //console.log('Awsome, will be lots of fun')
        alert('Awsome, will be lots of fun');
    case 'y':
        //console.log('Awsome, will be lots of fun')
        alert('Awsome, will be lots of fun');
    case 'no':
        //console.log('Fine! will send you awsome photos')
        alert('Fine! will send you awsome photos');
    case 'n':
         //console.log('Fine! will send you awsome photos')
         alert('Fine! will send you awsome photos');
    default:
        //console.log('You have to do something in your vacation')
        alert('You have to do something in your vacation')


}


