// let i = 0;

// while (i) {
//     alert(i);
//     i--;
// }


// while (i) alert(--i);

// do {
//     alert(i);
//     i++;
// } while (i>3);

// for(;;) {
//     alert(i++);
//     break;
// }
// alert(i);

// let sum = 0;

// for (;;) {
//     let value = +prompt('Introducere', '');
//     if (!value) {
//         break;

//     }
//     sum += value
// } 
// alert('sum' + sum);
// let value = +prompt('Introduce numar', '');

// for (let sum = 0;  sum+=value) {  
//     if (!value) {
//         break;
//     }
// } 
// alert ('sum' + sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     alert(i);
// } 


// while(true) {
//     let value = +prompt('Cati ani ai?', '');
//     if (!value) {
//         continue
//     }
//     alert(`ai ${value} ani`);
//     break;
// } 

// let a = 2 + 2;

// switch (a) {
//     case 3:
//       alert('insuficent');
//       break;
//     case 4:
//       alert('exact');
//       break;
//     default:
//         alert('nu exista astfel de valori');   
// }


// let a = '1';
// let b = 0;

// switch(+a) {
//    case b+1:
//     alert('Va fi executat');
//     break;
//     default:
//       alert('nu se va executa');
// }

// let a = 2 + 2;

// switch(a) {
//     case 4:
//       alert('corect');
//       break;
//     case 3:
//     case 5:       
//       alert('incorect');
//       break;
//       default:
//         alert('rezultat incorect');
// }

// let a = prompt('introduceti mesajul', ''); // arata doar tipul excat strict egal (===)

// switch(a){
//     case '0':
//     case '1':
//         alert('1 sau 0');
//         break;
//     case '2':
//         alert('2');
//         break;
//     case 3:
//         alert('nu se va implini');
//         break;
//     default:
//         alert('k');         
// }

// let userName = 'John';

// function showMessage(){
//     let userName = 'Jessy';
//     let message = 'Hello world!' + userName;
//     alert(message);
// }

// showMessage();

// alert(user);


// let userName = 'John';

// function showMessage(from,text='nu a fost gasit'){
//     // let userName = 'jessy';
//     // let message = "hello world!" + userName;
//     alert(from + ':' + text);
// }

// showMessage(userName,undefined);

// function checkAge(age){
//     if (age > 18){
//         return true;
//     } 
//     else {
//         return false;
//     }
// }
// alert(checkAge(1n));

// function showMovie(age){
//     if (!checkAge(age)){
//         return;
//     }
//     return true;
// }
// alert(showMovie(19));


// function showMovie(age){
//     if(!checkAge(age)) {
//         return;
//     }
//     return true;
// }

// function doNothing(){
//     return (
//         1+1
//     );
// }

// let age = 10;

// function getAge(){
//     age = age + 1;
//     return age;
// }

// alert(getAge());


// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }


// function show(n){
//     return () => n + 1;

// }
//     alert(show(1)());

// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask(
//     "Esti de acord?",
//     () => alert('ati fost de acord.');
//     () => alert('ati anulat executia.');
// );

// function HELLO() {
//         alert('Hello');
//     }
// HELLO();

// function animate({timing, draw, duration}) {

//     let start = performance.now();
  
//     requestAnimationFrame(function animate(time) {
//       // timeFraction goes from 0 to 1
//       let timeFraction = (time - start) / duration;
//       if (timeFraction > 1) timeFraction = 1;
  
//       // calculate the current animation state
//       let progress = timing(timeFraction);
  
//       draw(progress); // draw it
  
//       if (timeFraction < 1) {
//         requestAnimationFrame(animate);
//       }
  
//     });
//   }