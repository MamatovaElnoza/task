const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('changeColorBtn')

changeColorBtn.addEventListener('click', function () {
    if (colorBox.classList == 'red-background') {
        colorBox.classList.remove('red-background');
        colorBox.classList.add('blue-background');
    } else {
        colorBox.classList.remove('blue-background');
        colorBox.classList.add('red-background');
    }
});






// const colorBox = document.getElementById  ('colorBox')
// const changeColorBtn = document.getElementById  ('changeColorBtn')

// function changeColor() {
//     if (colorBox.classList == 'redBackground') {
//         console.log('dfshfg');
        
        
//         colorBox.classList.remove('redBackground');
//         colorBox.classList.add('blueBackground');
//     }
// }