var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var clearBtn = document.querySelector("#clear");
var saveButtom = document.getElementById("save");
var endDate = document.querySelector('input[type = "date"]');
  endDate.value = '2019-12-31';


//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
  }
}

//Обработчик каждого события при вводе, чтобы добавлять новое задание в список
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //Создание нового задания при нажатии на enter 
    var today = new Date();
    var end = new Date(endDate.value);
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");          
    var newTodo = this.value;
    ul.innerHTML+='<li>'+'<span><i class="fas fa-trash-alt"></i></span>'+
    +newTodo+
    /* "  "+showRemaining(today, end)+ */
    '</li>';

    deleteTodo();
    }
    
});

 // сохранение 
  saveButtom.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
});

//Удаление todolist чтобы 
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});


loadTodo();   

// тамер
var d = [1,7,6,5,4,3,2];
var today = new Date();
var end = new Date(endDate.value);
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
var today = new Date();
var distance = end - today;
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);

if (hours < 10) hours = '0' + hours;
  var minutes = Math.floor((distance % _hour) / _minute);
if (minutes < 10) minutes = '0' + minutes;
  var seconds = Math.floor((distance % _minute) / _second);
if (seconds < 10) seconds = '0' + seconds;
document.getElementById('countdown1').innerHTML = ""+ days +" дн. "+ hours +":"+ minutes +":"+ seconds +"";
  }
timer = setInterval(showRemaining, 1000);



