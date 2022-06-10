let arr = [];


const FILTER = {
    ALL: 0,
    DONE: 1,
    NOT_DONE: 2
};

let filter = FILTER.ALL;

function render() {
    let filteredList = arr;
    if (filter === FILTER.DONE) {
        filteredList = arr.filter(item => item.check)
    }
    if (filter === FILTER.NOT_DONE) {
        filteredList = arr.filter(item => !item.check)
    }
    const list = document.getElementById("ol");
    list.innerHTML = "";
    for (const item of filteredList) {
        list.innerHTML += `<li>
              <input type="checkbox" onclick="checkchecked('${item.id}')" ${item.check ? "checked" : ""}>
              <span>${item.text}</span>
              <button onclick="remove('${item.id}')">x</button>
           </li>`;
    }

}

function CreateTask() {
    const textElement = document.getElementById("inputTask");
    arr.push({
        id: "a" + Math.random().toString(36).substr(2),
        check: false,
        text: textElement.value
    });
    render();
}

function remove(id) {
    arr = arr.filter(item => item.id !== id);
    render();
}

function FilterElements(newFilterValue) {
    let btns = document.getElementsByName("filter");
    for(let btn of btns){
        btn.style.backgroundColor = "white";
        if(btn.id === newFilterValue.toString()){
            btn.style.backgroundColor = "red";
        }
    }
    filter = newFilterValue;

    render();
}

function checkchecked(id) {
    arr = arr.map(item => {
        if (item.id === id) {
            item.check = !item.check;
        }
        return item;
    });
    render();
}

const CreateBtn = document.getElementById("CreateBtn");
CreateBtn.addEventListener("click", CreateTask);