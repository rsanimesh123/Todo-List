let input=document.getElementById('input-text');
let list_container=document.getElementById('list-container');
list_container.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
    }
    
});

function AddTask(){
     
        let li= document.createElement('li');
        li.innerHTML=input.value;
       
        
        if(input.value==''){
            alert("Enter The Task Please");
        }else{
            list_container.appendChild(li);
            let img_edit=document.createElement('img');
            img_edit.src='pencil.png';
            img_edit.classList='edit-btn';
            li.appendChild(img_edit);
            let img_del=document.createElement('img');
            img_del.src='Del.png';
            img_del.classList='Del-btn';
            li.appendChild(img_del);
            img_edit.addEventListener('click',EditTask);
            img_del.addEventListener('click',DeleteTask);
            
            
            
            
            function DeleteTask(){
                img_del.parentElement.remove();
                   }
            
            function EditTask(){
                input.value=img_edit.parentElement.firstChild.nodeValue;
                img_edit.parentElement.remove();
               
            
            }
        }
       


}

