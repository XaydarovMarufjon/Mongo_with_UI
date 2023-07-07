
let iconStyleUPId = document.querySelector(".onSortId")
let iconStyleDownId = document.querySelector(".onSortReverseId")

let iconStyleUPName = document.querySelector(".onSortName")
let iconStyleDownName = document.querySelector(".onSortReverseName")

let iconStyleUPTovar = document.querySelector(".onSortTovar")
let iconStyleDownTovar = document.querySelector(".onSortReverseTovar")

let modalInfo = document.querySelector(".modalInfo")


function add(fioArr) {
    let TableInfo = fioArr.map((value, index) => {
        let TableObject = `
<tr>
 <td>${index + 1}.</td>
 <td>${value._id}.</td>
 <td>${value.ism}</td>
 <td>${value.tovar}</td>
</tr>
         `
        return TableObject;
    })
  
    console.log(fioArr);

    document.querySelector("tbody").innerHTML = TableInfo.join("")
}





function onSortFio() {

    fioArr.sort((a, b) => {
        let az = a.name,
            za = b.name

        if (az < za) {
            return -1;
        }
        if (az > za) {
            return 1;
        }
        return 0;
    })

    add()

    iconStyleUPName.style.cssText = `
        color: blue;
        ` ;

    iconStyleDownName.style.cssText = `
        color: grey;
        ` ;

    iconStyleUPId.style.cssText = `
        color: grey;
        ` ;

    iconStyleDownId.style.cssText = `
        color: grey;
        ` ;

}

function onSortReverseFio() {

    fioArr.sort((a, b) => {
        let az = a.name,
            za = b.name

        if (az > za) {
            return -1;
        }
        if (az < za) {
            return 1;
        }
        return 0;
    })

    add()

    iconStyleDownName.style.cssText = `
        color: blue;
        ` ;
    iconStyleUPName.style.cssText = `
        color: gray;
        ` ;

    iconStyleUPId.style.cssText = `
        color: grey;
        ` ;

    iconStyleDownId.style.cssText = `
        color: grey `;

}


/**************************************/

function onSortId() {

    fioArr.sort((a, b) => {
        let az = a.nomer,
            za = b.nomer

        if (az < za) {
            return -1;
        }
        if (az > za) {
            return 1;
        }
        return 0;
    })

    add()

    iconStyleUPId.style.cssText = `
        color: blue;
        ` ;

    iconStyleDownId.style.cssText = `
        color: grey;
        ` ;

    iconStyleDownName.style.cssText = `
        color: gray;
        ` ;
    iconStyleUPName.style.cssText = `
        color: gray `;

}

function onSortReverseId() {

    fioArr.sort((a, b) => {
        let az = a.nomer,
            za = b.nomer

        if (az > za) {
            return -1;
        }
        if (az < za) {
            return 1;
        }
        return 0;
    })

    add()

    iconStyleDownId.style.cssText = `
    color: blue;
    ` ;
    iconStyleUPId.style.cssText = `
    color: gray;
    ` ;

    iconStyleDownName.style.cssText = `
    color: gray;
    ` ;
    iconStyleUPName.style.cssText = `
    color: gray `;


}

/**************************************/

function onSortTovar() {

    fioArr.sort((a, b) => {
        let az = a.tovar,
            za = b.tovar

        if (az < za) {
            return -1;
        }
        if (az > za) {
            return 1;
        }
        return 0;
    })

    add()

    iconStyleUPTovar.style.cssText = `
        color: blue;
        ` ;

    iconStyleDownTovar.style.cssText = `
        color: grey;
        ` ;

    iconStyleDownId.style.cssText = `
        color: gray;
        ` ;
    iconStyleUPId.style.cssText = `
        color: gray `;

    iconStyleDownName.style.cssText = `
        color: gray;
        ` ;
    iconStyleUPName.style.cssText = `
        color: gray `;

}

function onSortReverseTovar() {

    fioArr.sort((a, b) => {
        let az = a.tovar,
            za = b.tovar

        if (az > za) {
            return -1;
        }
        if (az < za) {
            return 1;
        }
        return 0;
    })

    add()

    iconStyleDownTovar.style.cssText = `
    color: blue;
    ` ;
    iconStyleUPTovar.style.cssText = `
    color: gray;
    ` ;

    iconStyleDownId.style.cssText = `
        color: gray;
        ` ;
    iconStyleUPId.style.cssText = `
        color: gray `;

    iconStyleDownName.style.cssText = `
        color: gray;
        ` ;
    iconStyleUPName.style.cssText = `
        color: gray `;

}

/**************************************/




/* ************************************************************************* */

let barsPanel = document.querySelector(".barsPanel");
let barsIcon = document.querySelector(".cBarsClose");

function cBarsH() {
    barsPanel.classList.toggle("novisibleBars")
    barsIcon.classList.toggle("fa-left-long")

}

/***** ***************************  */

let horizontalMenu = document.querySelector(".horizontalMenu")
let lenta = horizontalMenu.getElementsByClassName("accordionActiv");

let horizontalPanel = document.querySelector(".horizontalPanel")
let panel = horizontalPanel.getElementsByClassName("panel");

for (let i = 0; i < lenta.length; i++) {

    lenta[i].addEventListener("click", function () {
        let activLenta = document.getElementsByClassName("activLenta");
        let panelActiv = document.getElementsByClassName("panelActiv");

        activLenta[0].className = activLenta[0].className.replace(" activLenta", "")
        this.className += " activLenta"

        panelActiv[0].className = panelActiv[0].className.replace(" panelActiv", "")
        panel[i].className += " panelActiv"

    })
   
}

/*   ********************************  */

let panelUpIcon = document.querySelector(".panelUpIcon");

let app = document.querySelector("#app");


function panelUp() {

    horizontalPanel.classList.toggle("horizontalPanelClose")
    panelUpIcon.classList.toggle("panelRotateIcon")

    // console.log(app.classList.contains("appClose")) /* Текширилвотган блокда класс бор еки йуклигини аниклаб беради. Жавоб True/ Folse булади */

    if (!app.classList.contains("appClose")) {
        app.classList.replace("app", "appClose")
    }
    else {
        app.classList.replace("appClose", "app")
    }

}

/*   ********************************  */


let weeks = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверк", "Пятница", "Суббота"]
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

setInterval(function (){
    let d = new Date()
    let hours = zero_first_format(d.getHours())
    let minutes = zero_first_format(d.getMinutes())
    let seconds = zero_first_format(d.getSeconds())
    let date = d.getDate()
    let day = weeks[d.getDay()]
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    let thisYear = day + ' / ' + date + ' ' + month + ' ' + year + 'г.'
    // let today = hours + ":" + minutes + ":" + seconds;

    // document.querySelector(".time").innerHTML = today;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML =`:${minutes}:`;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".day").innerHTML = thisYear;

    // console.log(day);
    // console.log(country);


}, 1000);



/*   ********************************  */

let addinfoOn = document.querySelector(".addInfo")
let section = document.querySelector(".section")

function addInfo() {
    section.classList.toggle("sectionOpacity")
    addinfoOn.classList.toggle("addInfoOn")

}



function addExit() {
    addinfoOn.classList.toggle("addInfoOn")
    section.classList.toggle("sectionOpacity")

}

/*   ********************************  */

fetch('/data')
  .then(response => response.json())
  .then(data => add(data))
  .catch(error => {
    console.error('Error:', error);
  });