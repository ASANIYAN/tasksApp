
                    let users = JSON.parse(localStorage.getItem('users'));
                    users.forEach(data => {
                        if (data.session == true) {
                            let collections = data.collections;
                            collections.forEach(items => {
                                items.forEach(eachItem => {
                                    if (eachItem[Object.keys(eachItem)[0]] == clicked) {
                                        if (!eachItem[Object.keys(eachItem)[3]].length) {
                                            let itemLength = eachItem[Object.keys(eachItem)[3]].length;
                                            itemLength++;
                                            //localStorage.setItem('incrementId', JSON.stringify(itemLength));

                                            todos = [{
                                                id: itemLength,
                                                todo: taskInput.value,
                                                done: false
                                            }]
                                            eachItem[Object.keys(eachItem)[3]].push(todos);

                                            const createBtnContentAndTaskHold = document.createElement('div');
                                            createBtnContentAndTaskHold.classList.add('btnContentAndTaskHold');
                                            createBtnContentAndTaskHold.dataset.id = itemLength;
                                            const createBtnContentModHold = document.createElement('div');
                                            createBtnContentModHold.classList.add('btnContentModHold');
                                            const createBtnContentHold = document.createElement('div');
                                            createBtnContentHold.classList.add('btnContentHold');
                                            const createBtnCollectionCheck = document.createElement('button');
                                            createBtnCollectionCheck.classList.add('btn-collection-check', 'ms-3');
                                            createBtnCollectionCheck.style.border = '3px solid' + eachItem[Object.keys(eachItem)[2]];
                                            createBtnContentHold.append(createBtnCollectionCheck);
                                            const createInputContent = document.createElement('p');
                                            createInputContent.classList.add('inputContent', 'ps-3');
                                            createInputContent.innerText = taskInput.value;
                                            createBtnContentHold.append(createInputContent);
                                            createBtnContentModHold.append(createBtnContentHold);
                                            const btnTaskModHold = document.createElement('div');
                                            const btnTaskMod = document.createElement('button');
                                            btnTaskMod.classList.add('btn-task-mod','ease-in-out', 'opacity-50');
                                            btnTaskMod.innerHTML =
                                            `<svg id="task-mod" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <circle class="circle" cx="12" cy="12" r="1"></circle>
                                            <circle class="circle" cx="12" cy="5" r="1"></circle>
                                            <circle class="circle" cx="12" cy="19" r="1"></circle>
                                            </svg>`;
                                            btnTaskModHold.append(btnTaskMod);
                                            createBtnContentModHold.append(btnTaskModHold);

                                            const createTaskCreatedModHold = document.createElement('div');
                                            createTaskCreatedModHold.classList.add('taskCreatedModHold');

                                            const createTaskCreatedMod = document.createElement('div');
                                            createTaskCreatedMod.classList.add('taskCreatedMod');

                                            const createEditTask = document.createElement('p');
                                            createEditTask.classList.add('editTask');
                                            createEditTask.innerText = 'Edit';
                                            createTaskCreatedMod.append(createEditTask);

                                            const createLine = document.createElement('div');
                                            createLine.style.height = '1px';
                                            createLine.style.width = '100%';
                                            createLine.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                                            createTaskCreatedMod.append(createLine);

                                            const createDelTask = document.createElement('p');
                                            createDelTask.classList.add('delTask', 'delete');
                                            createDelTask.innerText = 'Delete';
                                            createTaskCreatedMod.append(createDelTask);
                                            createTaskCreatedModHold.append(createTaskCreatedMod);

                                            createBtnContentAndTaskHold.append(createBtnContentModHold);
                                            createBtnContentAndTaskHold.append(createTaskCreatedModHold);
                                            tasksHold.insertBefore(createBtnContentAndTaskHold, taskInputFieldHold);
                                            //console.log(todos);
                                        } else {
                                            let todoLength = eachItem[Object.keys(eachItem)[3]].length;
                                            ++todoLength;
                                                todos = [{
                                                    id: todoLength,
                                                    todo: taskInput.value,
                                                    done: false
                                                }]
                                                eachItem[Object.keys(eachItem)[3]].push(todos);

                                                const createBtnContentAndTaskHold = document.createElement('div');
                                                createBtnContentAndTaskHold.classList.add('btnContentAndTaskHold');
                                                createBtnContentAndTaskHold.dataset.id = todoLength;
                                                const createBtnContentModHold = document.createElement('div');
                                                createBtnContentModHold.classList.add('btnContentModHold');
                                                const createBtnContentHold = document.createElement('div');
                                                createBtnContentHold.classList.add('btnContentHold');
                                                const createBtnCollectionCheck = document.createElement('button');
                                                createBtnCollectionCheck.classList.add('btn-collection-check', 'ms-3');
                                                createBtnCollectionCheck.style.border = '3px solid' + eachItem[Object.keys(eachItem)[2]];
                                                createBtnContentHold.append(createBtnCollectionCheck);
                                                const createInputContent = document.createElement('p');
                                                createInputContent.classList.add('inputContent', 'ps-3');
                                                createInputContent.innerText = taskInput.value;
                                                createBtnContentHold.append(createInputContent);
                                                createBtnContentModHold.append(createBtnContentHold);
                                                const btnTaskModHold = document.createElement('div');
                                                const btnTaskMod = document.createElement('button');
                                                btnTaskMod.classList.add('btn-task-mod','ease-in-out', 'opacity-50');
                                                btnTaskMod.innerHTML =
                                                `<svg id="task-mod" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <circle class="circle" cx="12" cy="12" r="1"></circle>
                                                <circle class="circle" cx="12" cy="5" r="1"></circle>
                                                <circle class="circle" cx="12" cy="19" r="1"></circle>
                                                </svg>`;
                                                btnTaskModHold.append(btnTaskMod);
                                                createBtnContentModHold.append(btnTaskModHold);

                                                const createTaskCreatedModHold = document.createElement('div');
                                                createTaskCreatedModHold.classList.add('taskCreatedModHold');

                                                const createTaskCreatedMod = document.createElement('div');
                                                createTaskCreatedMod.classList.add('taskCreatedMod');

                                                const createEditTask = document.createElement('p');
                                                createEditTask.classList.add('editTask');
                                                createEditTask.innerText = 'Edit';
                                                createTaskCreatedMod.append(createEditTask);

                                                const createLine = document.createElement('div');
                                                createLine.style.height = '1px';
                                                createLine.style.width = '100%';
                                                createLine.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                                                createTaskCreatedMod.append(createLine);

                                                const createDelTask = document.createElement('p');
                                                createDelTask.classList.add('delTask', 'delete');
                                                createDelTask.innerText = 'Delete';
                                                createTaskCreatedMod.append(createDelTask);
                                                createTaskCreatedModHold.append(createTaskCreatedMod);

                                                createBtnContentAndTaskHold.append(createBtnContentModHold);
                                                createBtnContentAndTaskHold.append(createTaskCreatedModHold);
                                                tasksHold.insertBefore(createBtnContentAndTaskHold, taskInputFieldHold);
                                                //console.log(todos);
                                        }

                                    }
                                });
                            });
                        }
                    });
                    localStorage.setItem('users', JSON.stringify(users));