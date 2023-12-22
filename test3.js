(function(){
    let flag = true;
    if(!flag){
        console.log('Power is OFF');
    }
    if(flag){
        console.log('Power is ON');
    }
    if(7<2){
        console.log('Failure');
    }
    if(7>2){
        console.log('Success');
    }
})();
(function(){
    let flag = false;
    const num = 10;
    if(!flag){
        console.log('Power is OFF');
    }
    else{
        console.log('Power is ON');
    }
    if(num === 5){
        console.log('Numder is Five');
    }
    else if(num === 10){
        console.log('Numder is Ten');
    }
    else{
        console.log('Number is Neither Five nor Ten');
    }
})();