// Currying in JS
// example f(a,b) to f(a)(b)

// function f(a){
//     return function (b){
//         return function (c){
//             console.log(a+b+c);
//             return a+b+c
//         }
//     };
// }

// console.log(f(5)(6)(1));

function updateElementText (id){
    return function (content) {
        document.querySelector('#'+id).textContent = content;
    };
}

const updateHeader = updateElementText("heading");

updateHeader("sub to Roadside Coder")