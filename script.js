function calculate(){
let thaidom = parseFloat(document.getElementById('thai').value);
let mathdom = parseFloat(document.getElementById('math').value);
let englishdom = parseFloat(document.getElementById('english').value);
let socialdom = parseFloat(document.getElementById('social').value);
let scidom = parseFloat(document.getElementById('sci').value);
let w_thaidom = parseFloat(document.getElementById('wight_thai').value);
let w_mathdom = parseFloat(document.getElementById('wight_math').value);
let w_englishdom = parseFloat(document.getElementById('wight_english').value);
let w_socialdom = parseFloat(document.getElementById('wight_social').value);
let w_scidom = parseFloat(document.getElementById('wight_sci').value);
let xthai = thaidom * w_thaidom
let xmath = mathdom * w_mathdom
let xenglish = englishdom * w_englishdom
let xsocial = socialdom * w_socialdom
let xsci = scidom *  w_scidom
let total= (xthai+xmath+xenglish+xsocial+xsci)
let Weight_total = w_thaidom+w_mathdom+w_scidom+w_socialdom+w_englishdom

if(isNaN(thaidom)||isNaN(mathdom)||isNaN(englishdom)||isNaN(socialdom)||isNaN(scidom)
||isNaN(w_thaidom)||isNaN(w_mathdom)||isNaN(w_socialdom)||isNaN(w_scidom)||isNaN(w_englishdom)){
    alert ("Please input data in every field, Not leave Blank");
}
else if (w_thaidom < 1 || w_mathdom < 1 ||w_englishdom < 1  || w_socialdom < 1 || w_scidom < 1){
    alert ("The Credit value can't set to less than 1");
}
else if (w_thaidom > 4 || w_mathdom >4  ||w_englishdom >4   || w_socialdom > 4 || w_scidom >4){
    alert ("The Credit value can't more than 4");
}
else if (thaidom < 0 || mathdom < 0 || englishdom < 0 || socialdom < 0 || scidom < 0){
    alert("The grade in each subject can't less than 0");
}
else if (!Number.isInteger(w_thaidom || w_mathdom ||w_englishdom || w_socialdom || w_scidom)){
        alert ("Please input the Credit as integer");
}

 
else if (thaidom > 4 || mathdom > 4|| englishdom > 4 || socialdom > 4 || scidom > 4){
    alert("The grade in each subject can't over 4");

}

else {
    document.getElementById ('Grade').innerHTML = "Your GPAX is:" + " " +(total/Weight_total).toFixed(2);
};
};

function Clear() {
document.getElementById('thai').value="";
document.getElementById('math').value="" ;
document.getElementById('english').value="";
document.getElementById('social').value="" ; 
document.getElementById('sci').value= ""; 
document.getElementById('wight_thai').value= 2; 
document.getElementById('wight_math').value= 2; 
document.getElementById('wight_english').value= 2; 
document.getElementById('wight_social').value= 2; 
document.getElementById('wight_sci').value= 2; 
document.getElementById('Grade').innerText=""; 
};
