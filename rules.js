// const len = document.getElementById('length').value;
// const ucase = document.getElementById('ucase').checked;
// const lcase = document.getElementById('lcase').checked;
// const digit = document.getElementById('digit').checked;
// const symbol = document.getElementById('symbol').checked;



const btn = document.getElementById('gen');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    // const len = document.getElementById('length').value;
    // document.getElementById('pswrd').innerText = generatePassword().substring(0,len);
    const pas = generatePassword();
    document.getElementById('pswrd').innerText = pas;
    
});
document.getElementById('pswrd').addEventListener('click',()=>{
    let ele = document.getElementById('pswrd');
    navigator.clipboard.writeText(ele.innerText);
    alert('content copied'+ele.innerText);

    
},false);



const datasetLcase= "abcdefghijklmnopqrstuvwxyz";
const datasetUcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const datasetDigit = '1234567890';
const datasetSymbol = '`~!@#$%^&*()_-+=|}[\'"\\;:/?.>,<';

function randomNumber(dataset){
    return Math.floor(Math.random() * dataset.length);
}

function generatePassword(password = ''){
    const len = document.getElementById('length').value;
    const ucase = document.getElementById('ucase').checked;
    const lcase = document.getElementById('lcase').checked;
    const digit = document.getElementById('digit').checked;
    const symbol = document.getElementById('symbol').checked;

    const dataset = [];
    if(ucase){
        dataset.push(datasetUcase);
    }
    if(lcase){
        dataset.push(datasetLcase);
    }
    if(digit){
        dataset.push(datasetDigit);
    }
    if(symbol){
        dataset.push(datasetSymbol);
    }

    let i = 0;
    while(i < len){

        let idx = randomNumber(dataset);
        password += dataset[idx][randomNumber(dataset[idx])];
        i++;
    }

    return password;
}