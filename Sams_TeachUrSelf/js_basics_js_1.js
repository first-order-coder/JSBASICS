console.log('Hello')
function writeonDoc(param1,param2,param3){
    document.write(param1, param2, param3)
    document.write("<br>" + 'This is from js_basics.js file')
}

function getTime(){
    now = new Date();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();

    console.log(now.getSeconds());

    writeonDoc(hours,mins,secs)
}
getTime()