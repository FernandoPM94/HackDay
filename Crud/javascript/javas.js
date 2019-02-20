 window.onload = function () {
            var localStorageKeyName = 'data';

            loadFromLocalStorage();

            document.querySelector("#boton").addEventListener('click', function () {
                var name = document.getElementById("name"),
                    last = document.getElementById("last"),
                    num = document.getElementById("num");
                    cel = document.getElementById("cel");

                // condiciones 
                if (name.value.length === 0 || last.value.length === 0 || !parseInt(num.value)||!parseInt(cel.value)) return;

                var user = {
                    name: name.value, 
                    last: last.value, 
                    num: num.value, 
                    cel: cel.value };
                
                // limpiar
                name.value = '';
                last.value = '';
                num.value = '';
                cel.value = '';

//salvar informacion
                appendObjectToLocalStorage(user);
            })

            function appendObjectToLocalStorage(obj) {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);

                if (dataInLocalStorage !== 0) { users = JSON.parse(dataInLocalStorage); }

                users.push(obj);

                localStorage.setItem(localStorageKeyName, JSON.stringify(users));

                loadFromLocalStorage();
            }

            function loadFromLocalStorage() {
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName),
                    formBody = document.querySelector("#form tbody");

                if (dataInLocalStorage !== 0) {
                    users = JSON.parse(dataInLocalStorage);
                }

                formBody.innerHTML = '';
                
                users.forEach(function (x, z) {
                    var tr = document.createElement("tr"),
                        tdName = document.createElement("td"),
                        tdLast = document.createElement("td"),
                        tdNum = document.createElement("td"),
                        tdCel = document.createElement("td"),
                        tdDelete = document.createElement("td"),
                        btnDelete = document.createElement("button");
                    
                    tdName.innerHTML = x.name;
                    tdLast.innerHTML = x.last;
                    tdNum.innerHTML = x.num;
                    tdCel.innerHTML = x.cel;
                    
                    btnDelete.textContent = 'Borrar';
                    btnDelete.className = 'btn btn-xs btn-danger';
                    btnDelete.addEventListener('click', function(){
                        deleteFromLocalStorage(z);
                    });
                    
                    tdDelete.appendChild(btnDelete);
                    tr.appendChild(tdName);
                    tr.appendChild(tdLast);
                    tr.appendChild(tdNum);
                    tr.appendChild(tdCel);
                    tr.appendChild(tdDelete);
                    formBody.appendChild(tr);
                });
            }
            
            function deleteFromLocalStorage(index){
                var users = [],
                    dataInLocalStorage = localStorage.getItem(localStorageKeyName);
                
                users = JSON.parse(dataInLocalStorage);
                
                users.splice(index, 1);
                
                localStorage.setItem(localStorageKeyName, JSON.stringify(users));
                
                loadFromLocalStorage();
            }
        }
 
 