let select = document.getElementById('select');
let create = document.getElementById('create');
let spruse = document.getElementById('form-spruse');
let fern = document.getElementById('form-fern');
let form = document.getElementById('form');
let saveButtom = document.getElementById("save");
let main = document.getElementsByClassName("main")


//кнопка создать
create.onclick = function(){show();}

function show(){
  form.style.display =='none' ? form.style.display ='block' : form.style.display = 'none';/* 
  if(form.style.display =='none') {
    form.style.display ='block';
  } else{
    form.style.display = 'none';
  } */
};


// выбираем селектор (ель,папоротник)
function Selected(number) {
    let selecttor = number.value;
      if (selecttor==1) {
        spruse.style.display='block';
        fern.style.display='none';
      } else if (selecttor==2) {
        spruse.style.display='none';
        fern.style.display='block';
      }
};

//pзаносим данные выбранных checkbox в input
var inputs = Array.prototype.slice.call(document.getElementsByClassName("checkbox")),
    inp = document.querySelector("#inp");
inputs.forEach(function (c) {
    c.onclick = function () {
        var a = [];
        inputs.forEach(function (b) {
            b.checked && a.push(b.value)
        });
        inp.value = a
    }
});

//создание таблицы
function insertRow(id) {
  let tbody = document.getElementById(id).getElementsByTagName("tbody")[0];
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(document.getElementById("name").value));
  let td2 = document.createElement("td")
    td2.appendChild(check1 = document.createElement("input"))
    check1.type = "checkbox"
    check1.checked = "true"
    check1.disabled = "true";
    td2.appendChild(document.createTextNode(document.getElementById("inp").value))
  let td3 = document.createElement("td")
    td3.appendChild(document.createTextNode(document.getElementById("description").value))
  let td4 = document.createElement("td")
    td4.appendChild(document.createTextNode(document.getElementById("age").value))
  let td5 = document.createElement("td")
    td5.appendChild(document.createTextNode(document.getElementById("area").value))
  let td6 = document.createElement("td")
    td6.appendChild(document.createTextNode(document.getElementById("growth").value))
  let td7 = document.createElement("td")
    td7.appendChild(button = document.createElement("input"))
      button.type = "button";
      button.value = "ИЗМЕНИТЬ";
    td7.appendChild(button2 = document.createElement("input"))
      button2.type = "button";
      button2.value = "УДАЛИТЬ";    
    
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  row.appendChild(td6);
  row.appendChild(td7)
  tbody.appendChild(row);
}


// сохранение не работает
saveButtom.addEventListener('click',function(){
  localStorage.setItem('form',main.innerHTML );
});

