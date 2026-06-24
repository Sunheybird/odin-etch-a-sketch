const container = document.querySelector('.container');
const input = document.querySelector('input');
const label = document.querySelector('label');

let isDrawing = false;
document.addEventListener('mousedown',()=>{
    isDrawing = true;
})
document.addEventListener('mouseup',()=>{
    isDrawing = false;
})

const createGrid = (size) =>{

    container.innerHTML = '';

    let gridSize = 640/size;

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size;j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
            grid.style.width  = `${gridSize}px`;
            grid.style.height = `${gridSize}px`;



            grid.addEventListener('mouseover',()=>{ //didn't need to use queryselector
                if(isDrawing){
                    changeColor(grid);  
                }
            })
        }
    }
}

input.addEventListener("input",()=>{
    label.textContent=`size : ${input.value}`;
    createGrid(input.value)
})


createGrid(16);


    const changeColor = grid => {
    const randomR = Math.round(Math.random()*256);
    const randomG = Math.round(Math.random()*256);
    const randomB = Math.round(Math.random()*256);
    grid.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }




