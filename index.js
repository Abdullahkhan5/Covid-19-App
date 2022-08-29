var count = 1;
var arr = [];

function saveAnswers(option) {
    jQuery(".q" + count).removeClass("active");
    if (option === 1){
        arr.push(1);
    }
    else{
        arr.push(0);
    }
    if (count === 10){
        checkResult(arr)
    }
    count += 1;
    jQuery(".q" + count).addClass("active");
}

function checkResult(resultArray,count){

    jQuery(".screen-test-info").hide();

    const q1=resultArray[0];
    const q2=resultArray[1];
    const q3=resultArray[2];
    const q4=resultArray[3];
    const q5=resultArray[4];
    const q6=resultArray[5];
    const q7=resultArray[6];
    const q8=resultArray[7];
    const q9=resultArray[8];
    const q10=resultArray[9];


    if((q1,q2,q3,q4,q6,q8,q9 == 1) && (q5,q7,q10 == 0 || 1)){
        jQuery(".q" + count).removeClass("active");
        // jQuery(".screen-test-info").hide();
        jQuery(".r1").show();
    }

    else if(q1,q2,q4 == 1 && ((q3,q5,q6,q7,q10) == 0 || 1) && ((q8,q9) == 0 || 1)){
        jQuery(".q" + count).removeClass("active");
        jQuery(".r2").show();
    }

    else{
        jQuery(".r3").show();
    }

}