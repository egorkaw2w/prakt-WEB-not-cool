let check = true;
let del = true;
let chang = true;
function creating() {
    var element = document.getElementById("test");
    if (check) {
        element.style.display = "block";
        check = false;
    } else {
        element.style.display = "none";
        check = true;
    }
}

function testImg() {
    const cardName = document.getElementById('cardname').value;
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (cardName && file) {
        let div = document.createElement("div");
        div.classList.add("mainuha");
        div.innerHTML = `
            <div class="mainuha">
                <div class="text">${cardName}</div>
                <input type="checkbox" class="checkbox"> <!-- добавляем чекбокс -->
                <img src="${URL.createObjectURL(file)}" alt="#">
            </div>
        `;
        document.getElementById("main").appendChild(div);
    } else {
        console.log('Пожалуйста, введите текст и выберите файл для загрузки.');
    }
}

function showCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.style.display = 'inline';
    });
}

function deleter() {
    if (del) {
        showCheckboxes();
        del = false;
    }
    else {
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                const mainuhaBlocks = document.getElementsByClassName('mainuha');
                mainuhaBlocks[index].remove();
            }
        });
        del = true;
    }
}
function changer() {
    creating();

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', saveChanges);
    document.getElementById('test').appendChild(saveButton);
}

function saveChanges() {
    const cardName = document.getElementById('cardname').value;
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (cardName && file) {
        const mainuhaBlocks = document.getElementsByClassName('mainuha');
        Array.from(mainuhaBlocks).forEach((mainuha) => {
            mainuha.querySelector('.text').textContent = cardName;
            mainuha.querySelector('img').setAttribute('src', URL.createObjectURL(file));
        });

        // Скрываем окно добавления
        document.getElementById('test').style.display = 'none';

        // Удаляем кнопку "Сохранить"
        const saveButton = document.querySelector('#test button');
        if (saveButton) {
            document.getElementById('test').removeChild(saveButton);
        }
    } else {
        console.log('Пожалуйста, введите текст и выберите файл для загрузки.');
    }
}