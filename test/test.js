function init(){
    let arrDogs = [];
    let i=0;

    let input = "";

        while(input != "undefined"){
            input = prompt("enter the name of the dog: ");
            arrDogs.push(input);
            if (input == "z") {
                break;
            }
        }
    

    
    document.getElementById("msg1").innerHTML = "list of all dog names: (no sort) <br>" ;

    for(i=0;i<arrDogs.length;i++){
        console.log("hi");
        document.getElementById("msg1").innerHTML += arrDogs[i] + "<br>";
    }


    document.getElementById("msg2").innerHTML = "list of all dog names: (after sort) <br>" ;

    for(i=0;i<arrDogs.length;i++){
        console.log("hi");
        Dogs = arrDogs.sort();
        document.getElementById("msg2").innerHTML += Dogs[i] + "<br>";
    }

   
}

init();