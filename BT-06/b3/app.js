// //In ra id
var url = "https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR3aqtLhntBMSNEPx6RBsYeoopHvDyPSMVoLijwCqWpwkNNMnQOAQg9RRtM";
// const $main = document.getElementById(`main`);
// fetch(url)
// .then((response) => response.json())
// .then((data) =>{
//     data.forEach((x)=>{
//         $main.innerHTML += `
//         <div>ID: ${x.id}</div>
//         <div>Title: ${x.title} </div>
//         <div>Content: ${x.content} </div>
//         <div>DateTime: ${x.datetime} </div>
//         --------------------------------------------
//         `
//     })
// } );

//In ra ten sau 3s

const printfCrush = myCrush => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(myCrush);
        },3000);
    } )
}

printfCrush(`Vu`)
.then((data) => {
    console.log(`My name is: ${data}`);
    setTimeout(() => {
        console.log(`Crush : Misa`);
    },500);
});
