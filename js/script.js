let toDoList = function ToDoList(){

    let toDoArr = [];

    //  ввод по нажатию enter
    let input__keyup = document.querySelector('.input__task')
    input__keyup.addEventListener('keyup',function(event){
        if(event.keyCode == '13'){
            task = document.querySelector('.input__task').value;
        
        let input__field = document.querySelector('.input__task')
        input__field.value="";
        addTask(task);
        }

    })

    //ввод по click
    let input__btn = document.querySelector('.input__button');
    input__btn.addEventListener('click', function(){

        task = document.querySelector('.input__task').value;
        
        let input__field = document.querySelector('.input__task')
        input__field.value="";

        //console.log(task)
        addTask(task);
        
    })

    this.addTask = function(){
        let toDo = {
            todo: task,
            flag: true
        }
        toDoArr.push(toDo)
        //console.log(toDoArr)
        //console.log(toDo.todo)
        
        show();
    }
    this.show = function(){

        ul = document.querySelector('.task__list')
        ul.innerHTML = ''; //очищает UL и выводит новый список

        toDoArr.forEach((item,index)=>{
            let li = document.createElement('li')
            li.classList.add('task__li')
            li.innerHTML = `<div><input id='${index}' type="checkbox" class='check'> ${item.todo}</div>
            <div li__btn><button class='task__edit' id='${index}'><i class="fa fa-pencil" aria-hidden="true"></i></button><button class='task__del' id='${index}'><i class="fa fa-trash" aria-hidden="true"></i></button></d>`;
             //console.log(li);
            
            ul.appendChild(li)  
        })

        let taskDelete = document.querySelectorAll('.task__del')

        taskDelete.forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                let id = +index
            this.delete(id)
            })
        })

        let taskEdit = document.querySelectorAll('.task__edit')
        taskEdit.forEach((btnedit,index)=>{
            btnedit.addEventListener('click',()=>{
                let id = +index
                
            this.edit (id)   
            })
        })

    }
    
    this.delete = function(id){
        toDoArr.splice(id,1)
        this.show()
    }

    this.edit = function(id){
        editNew = prompt('Внесите изменения')
        
        toDoArr[id].todo = editNew;
        this.show()  
    }
    this.done = function(id){
        

        this.show()
    }

    let clearAll__btn = document.querySelector('.del__all')
    clearAll__btn.addEventListener('click',()=>{
        let conf = confirm('Вы точно хотите очистить весь список дел?!');
            if(conf == true){
                toDoArr.length = 0;
                this.show()
            }else{this.show()}      
    })
    
}
toDoList();