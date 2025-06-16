    const add_work = document.querySelector('#add_work');
        const getting_work = document.querySelector('#getting_work');
        const list_works = document.querySelector('#list_works');
        add_work.addEventListener('click', function() {
            const taskText = getting_work.value.trim();
            if (taskText !== '') {
                const li = document.createElement('li');
                li.textContent = taskText;
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.style.marginLeft = '10px';
                removeBtn.style.marginTop = '10px';
                removeBtn.style.color = 'rgb(255, 255, 255)';
                removeBtn.style.backgroundColor= 'rgb(255, 0, 242)';
                removeBtn.style.border= 'rgb(99, 5, 94)';
                removeBtn.style.borderRadius= '10px';
                removeBtn.addEventListener('click', function() {
                    list_works.removeChild(li);
                });
                li.appendChild(removeBtn);
                list_works.appendChild(li);
                getting_work.value = '';
            } else {
                alert('Please enter a job!');
            }
        });