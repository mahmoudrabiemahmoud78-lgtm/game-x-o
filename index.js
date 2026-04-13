let chose = prompt('enter o or x')
let title = document.getElementById('title')
console.log(title);
let array=[]
function pass(num1,num2,num3){
    title.innerHTML= array[num2]
    document.getElementById(`item${num1}`).style.backgroundColor='black'
    document.getElementById(`item${num2}`).style.backgroundColor='black'
    document.getElementById(`item${num3}`).style.backgroundColor='black'
    setInterval(f=>{
        title.innerHTML +='.'
    },1000)
    setTimeout(r=>{
        location.reload()

    },3000)
    console.log(array[num1]);
    

}

function winner(){
    for(let i =1; i<10; i++){
        array[i]=document.getElementById('item'+i).innerHTML

    }
    if(array[1]=== array[2] && array[2] === array[3]&& array[1] !=''){
    
        pass(1,2,3)
        
    }
    else if(array[4] === array[5] && array[5] === array[6]&& array[6] !=''){
        pass(4,5,6)
        

    }
    else if(array[7] === array[8] && array[8] === array[9] && array[7] !=''){
        pass(7,8,9) 
        
        
    }
    else if(array[1] === array[4] && array[4] === array[7] && array[7] !=''){
        pass(1,4,7)
        
        
    }
     else if(array[2] === array[5] && array[5] === array[8] && array[8] !=''){
        pass(2,5,8)
        
        
    }
     else if(array[3] === array[6] && array[6] === array[9] && array[6] !=''){
        pass(3,6,9)
        
        
    }
     else if(array[1] === array[5] && array[5] === array[9] && array[9] !=''){
        pass(1,5,9)
        
        
    }
     else if(array[3] === array[5] && array[5] === array[7] && array[7] !=''){
        pass(3,5,7)
        
        
    }
    else{
        let full = true
        for(let j = 1 ; j< 10; j++ ){
            if(array[j] == ''){
                full = false 
                
            }


        }
        if(full){
            title.innerHTML='darw'
            setTimeout(g=>{
                location.reload()
            },3000)
        }
        

        
    }
// console.log(array);

}


// function stop(){
//     if(array )
// }

function shoose(id){

    
    let ele = document.getElementById(id)
    if(chose === 'x' && ele.innerHTML == ''){
        chose = 'o'
        ele.innerHTML = 'x'
        title.innerHTML='o'
    }
    else if (chose === 'o' && ele.innerHTML == ''){
        chose = 'x'
        ele.innerHTML='o'
        title.innerHTML='x'
    }
    winner()

}      

    
    
    

