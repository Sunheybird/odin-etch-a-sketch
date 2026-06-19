const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.change-size');
let size = 16;
sizeBtn.addEventListener('click',()=>{
    size = prompt('what size do you want');
})

for(let i = 0; i < size; i++){
    for(let j = 0; j < size;j++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        grid.addEventListener('mouseover',()=>{ //didn't need to use queryselector
            grid.classList.add("colorAdd");
        })
    }
}
