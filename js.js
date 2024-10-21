// const colorBox = document.getElementById('colorBox');
// const changeColorBtn = document.getElementById('changeColorBtn')

// changeColorBtn.addEventListener('click', function () {
//     if (colorBox.classList == 'red-background') {
//         colorBox.classList.remove('red-background');
//         colorBox.classList.add('blue-background');
//     } else {
//         colorBox.classList.remove('blue-background');
//         colorBox.classList.add('red-background');
//     }
// });




// const colorBox = document.getElementById('colorBox');

// function changeColor() {
//     if (colorBox.classList.contains('redBackground')) {
//         colorBox.classList.remove('redBackground');
//         colorBox.classList.add('blueBackground');
//     } else {
//         colorBox.classList.remove('blueBackground');
//         colorBox.classList.add('redBackground');
//     }
// }





const colorBox = document.getElementById('colorBox');

function changeColor() {
    colorBox.classList.toggle('blueBackground');
}




// function changeColor() {
//     if (colorBox.className === 'redBackground') {
//         colorBox.className = 'blueBackground';
//     } else {
//         colorBox.className = 'redBackground';
//     }
// }