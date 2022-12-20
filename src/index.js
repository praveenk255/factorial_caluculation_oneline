import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Js code for calculating factorial of a number</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;


let n = 1;
let r = 1;


for (let i = 1; i<=n; i++){
  r = i*r;
}

console.log(r);
