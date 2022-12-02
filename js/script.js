const list = ['pane', 'latte', 'biscotti', 'succo di frutta','scottex' , 'frutta']
const lsititem = document.querySelector(`.shopping-list`)

let item = 0;


while (item < list.length){
    
    let itemContainer= document.createElement('li');

    itemContainer.innerText = list[item];

    lsititem.append(itemContainer);

    item++;

}