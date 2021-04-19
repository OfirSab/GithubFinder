
var monitorType = ['hello','bye','sababa','mekintosh']
var monitor = ['makoroni','dokranim','salon']

var ul = document.getElementById('monitor-ul');

// for (var i=0;i<monitorType.length;i++) {
//     $('#monitor-ul').append(`
//     <ul class="monitor-name" id=${monitorType[i]}>
//         <div class="monitor">
//              <span class="name">${monitorType[i]}</span>
//         </div>
//     </ul>
//     `)
// }

// $(`ul[id=${monitorType[i]}]`).hover(()=>{
//     console.log(monitorType[i]);
// })
// for (var i=0;i<monitorType.length;i++) {
//     $(`ul[id=${monitorType[i]}]`).on('click',()=>{
//         console.log(monitorType[i]);
//         var li = `
//         <li><span class="monitor-child">Monitor 1.1</span></li>
//         <li><span class="monitor-child">Monitor 1.2</span></li>
//         <li><span class="monitor-child">Monitor 1.3</span></li>`
//         $(`ul[id=${monitorType[i]}]`).append(li)
//     })
// }
for(index of monitorType){
    $('#monitor-ul').append(`
    <ul class="monitor-name" id=${index}>
        <div class="monitor">
             <span class="name">${index}</span>
        </div>
    </ul>
    `)
}

for(index of monitorType){
    $(`ul[id=${index}]`).on('mouseover',()=>{
        console.log(index);
        // var li = `
        // <li><span class="monitor-child">Monitor 1.1</span></li>`
        // $(`ul[id=${index}]`).append(li)
    })
}
// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }
// // get the ul#menu
// const menu = document.querySelector('#menu');
// // add menu item
// menu.appendChild(createMenuItem('Home'));
// menu.appendChild(createMenuItem('Services'));
// menu.appendChild(createMenuItem('About Us'));

// for (var i=0;i<monitor.length;i++) {
//     $('#monitor-ul').appendchild(`
//     <li class="monitor-name">
//         <div class="monitor">
//              <span class="name">${monitor[i]}</span>
//         </div>
//     </li>
//     `)
// }
    $('#monitor-ul').on('click','li',()=>{
        var ul = `<ul></ul>`;
        var li = `<ul>
        <li><span class="monitor-child">Monitor 1.1</span></li>
        <li><span class="monitor-child">Monitor 1.2</span></li>
        <li><span class="monitor-child">Monitor 1.3</span></li></ul>`
        // $('ul').append(li);
        $('monitor-ul').append(li)

    })




// arr.forEach((e)=>{
//     var li = document.createElement('li');
//     li.innerHTML(arr.shift())
//     ul.append(li)
// })


//   <span class="monitor-child">Monitor 1.2</span> 
//   <span class="monitor-child">Monitor 1.3</span>