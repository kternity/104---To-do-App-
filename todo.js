let items = [];

function register() {
    
   console.log("register function");  

   let task = document.getElementById("txtTask").value;
   console.log(task);

   items.push(task);
   console.log(items);
   let tasks = "";
   for (let i = 0; i < items.length; i++) {
    tasks += `<li>${items[i]}</li>`;
    }
   document.getElementById("items").innerHTML = tasks;
   document.getElementById("txtTask").value = "";
}


