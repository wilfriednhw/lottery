let page1 = $('#page1');
let page1content =
    //item 1
    "<div id='page1item1' class='page1items'>" +
    "<div id='page1items-content'>" +
    "<div class='logo-container'><img  src='./assets/logo.jpeg' alt='logo'/></div>" +
    "<div class='shuffle'><img id='img-shuffle' alt='shuffle' src='./assets/shuffle.gif'/></div>" +
    "<table id='item1table'  class='itemtable'>" +
    "<tr><td colspan=2>10 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> -</td></tr>" +
    "<tr><td>3 </td><td> 1</td></tr>" +
    "<tr><td>4 </td><td> 2</td></tr>" +
    "<tr><td>5 </td><td> 3</td></tr>" +
    "<tr><td>6 </td><td> 5</td></tr>" +
    "<tr><td>7 </td><td> 10</td></tr>" +
    "<tr><td>8 </td><td> 200</td></tr>" +
    "<tr><td>9 </td><td> 2000</td></tr>" +
    "<tr><td>10 </td><td> 10000</td></tr>" +
    "</table>" +
    "</div>" +
    "</div>" +
    //item 2
    "<div id='page1item2' class='page1items'>" +
    "<div id='page1items-content'>" +
    "<div id='page1item2-bloc1'>" +
    "<div id='page1item2-bloc1-item-1'>" +
    "<span class='label-bloc1'>jackpot</span>" +
    "<div class='jackpot-container'>" +
    "<div class='countJackpot'>" +
    "<div class='numberJackpot'>" +
    "<span id='jackpot-0'>0</span>" +
    "</div>" +
    "<div class='divider-jackpot'><span>,</span></div>" +
    "<div class='numberJackpot'>" +
    "<span>0</span>" +
    "</div>" +
    "<div class='numberJackpot'>" +
    "<span>0</span>" +
    "</div>" +
    "<div class='numberJackpot'>" +
    "<span>0</span>" +
    "</div>" +
    "<span class='divider-jackpot'><span>.</span></span>" +
    "</div>" +
    "<div class='countJackpot-2'>" +
    "<span class='numberJackpot-2'>" +
    "<span id='jackpot-0'>0</span>" +
    "</span>" +
    "<span class='numberJackpot-2'>" +
    "<span id='jackpot-0'>0</span>" +
    "</span>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div id='page1item2-bloc1-item-2'><span class='label-bloc1'>temp</span><span class='value-bloc1 ' id='compteur1' ></span></div>" +
    "</div>" +

    "<div id='page1item2-bloc2'>" +

    "<div id='page1item2-bloc2-item1'>" +
    //2 numero
    "<table id='bloc2-item1table'  class='itemtable'>" +
    "<tr><td colspan=2>2 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> 1</td></tr>" +
    "<tr><td>2 </td><td> 8</td></tr>" +
    "</table>" +
    // 9numero
    "<table id='bloc2-item2table'  class='itemtable'>" +
    "<tr><td colspan=2>9 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> -</td></tr>" +
    "<tr><td>3 </td><td> 1</td></tr>" +
    "<tr><td>4 </td><td> 2</td></tr>" +
    "<tr><td>4 </td><td> 3</td></tr>" +
    "<tr><td>4 </td><td> 25</td></tr>" +
    "<tr><td>4 </td><td> 100</td></tr>" +
    "<tr><td>4 </td><td> 1500</td></tr>" +
    "<tr><td>4 </td><td> 9000</td></tr>" +
    "</table>" +
    "</div> " +

    //3 numero
    "<div id='page1item2-bloc2-item1'>" +
    "<table id='bloc2-item3table'  class='itemtable'>" +
    "<tr><td colspan=2>3 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> 1</td></tr>" +
    "<tr><td>2 </td><td> 2</td></tr>" +
    "<tr><td>2 </td><td> 10</td></tr>" +
    "</table>" +

    //8numero
    "<table id='bloc2-item4table'  class='itemtable'>" +
    "<tr><td colspan=2>8 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> -</td></tr>" +
    "<tr><td>3 </td><td> 1</td></tr>" +
    "<tr><td>4 </td><td> 2</td></tr>" +
    "<tr><td>4 </td><td> 6</td></tr>" +
    "<tr><td>4 </td><td> 50</td></tr>" +
    "<tr><td>4 </td><td> 1200</td></tr>" +
    "<tr><td>4 </td><td> 80000</td></tr>" +
    "</table>" +
    "</div> " +

    //4numero
    "<div id='page1item2-bloc2-item1'>" +
    "<table id='bloc2-item5table'  class='itemtable'>" +
    "<tr><td colspan=2>4 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> 2</td></tr>" +
    "<tr><td>2 </td><td> 4</td></tr>" +
    "<tr><td>2 </td><td> 75</td></tr>" +
    "</table>" +

    //7 numero
    "<table id='bloc2-item6table'  class='itemtable'>" +
    "<tr><td colspan=2>7 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> -</td></tr>" +
    "<tr><td>3 </td><td> 1</td></tr>" +
    "<tr><td>4 </td><td> 3</td></tr>" +
    "<tr><td>4 </td><td> 30</td></tr>" +
    "<tr><td>4 </td><td> 220</td></tr>" +
    "<tr><td>4 </td><td> 3000</td></tr>" +
    "</table>" +
    "</div> " +

    //numero 5
    "<div id='page1item2-bloc2-item1'>" +
    "<table id='bloc2-item7table'  class='itemtable'>" +
    "<tr><td colspan=2>5 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> 1</td></tr>" +
    "<tr><td>2 </td><td> 2</td></tr>" +
    "<tr><td>2 </td><td> 8</td></tr>" +
    "<tr><td>2 </td><td> 500</td></tr>" +
    "</table>" +

    //numero 6
    "<table id='bloc2-item8table'  class='itemtable'>" +
    "<tr><td colspan=2>6 numero</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> -</td></tr>" +
    "<tr><td>2 </td><td> 1</td></tr>" +
    "<tr><td>3 </td><td> 2</td></tr>" +
    "<tr><td>4 </td><td> 3</td></tr>" +
    "<tr><td>4 </td><td> 25</td></tr>" +
    "<tr><td>4 </td><td> 800</td></tr>" +
    "</table>" +
    "</div> " +
    "</div>" +
    "</div>" +
    "</div>" +
    //item 3
    "<div id='page1item3' class='page1items'>" +
    "<div id='page1items-content'>" +
    "<table id='item9table' class='itemtable'>" +
    "<tr><td colspan=2>tout ou rien</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> 3.6</td></tr>" +
    "<tr><td>2 </td><td>14</td></tr>" +
    "<tr><td>3 </td><td> 60</td></tr>" +
    "<tr><td>4 </td><td> 275</td></tr>" +
    "<tr><td>5 </td><td> 1400</td></tr>" +
    "<tr><td>6 </td><td> 6500</td></tr>" +
    "</table>" +

    "<table id='item10table' class='itemtable'>" +
    "<tr><td colspan=2>non sortant</td></tr>" +
    "<tr><td>w </td><td> cote</td></tr>" +
    "<tr><td>1 </td><td> 1.2</td></tr>" +
    "<tr><td>2 </td><td> 1.6</td></tr>" +
    "<tr><td>3 </td><td> 2</td></tr>" +
    "<tr><td>4 </td><td> 2.7</td></tr>" +
    "<tr><td>5 </td><td> 3.7</td></tr>" +
    "<tr><td>6 </td><td> 5</td></tr>" +
    "<tr><td>7 </td><td> 7</td></tr>" +
    "<tr><td>8 </td><td> 9.5</td></tr>" +
    "<tr><td>9 </td><td> 13</td></tr>" +
    "<tr><td>10 </td><td> 18</td></tr>" +
    "</table>" +
    "</div>" +
    "</div>";

let currentNumber = null;
let jackpotValue = 3204.49;

function animationJackpotCountNumberPartInt(j, k) {
    let jackpotNumber = $(".numberJackpot").eq(k);
    let cd = 0;
    let countDown = setInterval(
        () => {
            console.log(cd)
            jackpotNumber.text(cd);
            cd++;
            if (cd > j) {
                clearInterval(countDown);
            }
        }, 100
    )
}

function animationJackpotCountNumberPartDecimal(j, k) {
    let jackpotNumber = $(".numberJackpot-2").eq(k);
    let cd = 0;
    let countDown = setInterval(
        () => {
            console.log(cd)
            jackpotNumber.text(cd);
            cd++;
            if (cd > j) {
                clearInterval(countDown);
            }
        }, 50
    )
}

function setNumberInjackPotFirst() {
    let item = jackpotValue.toString();
    //first number
    animationJackpotCountNumberPartInt(parseInt(item[0]), 0);

    //second
    animationJackpotCountNumberPartInt(parseInt(item[1]), 1);

    //third
    animationJackpotCountNumberPartInt(parseInt(item[2]), 2);

    //fourth
    animationJackpotCountNumberPartInt(parseInt(item[3]), 3);

    //decimal 1
    animationJackpotCountNumberPartDecimal(parseInt(item[5]), 0);

    //decimal 2
    animationJackpotCountNumberPartDecimal(parseInt(item[6]), 1);
}

function animationShowBounceTable() {
    let table = $('.itemtable');
    let i = 0;
    let intervalIdPage1 = setInterval(
        () => {
            table.eq(i).addClass('animated bounceInUp');
            table.eq(i).show();
            i++;

            if (i == table.length) {
                clearInterval(intervalIdPage1);

                setTimeout(
                    () => {
                        setNumberInjackPotFirst();
                    }, 3000
                )
                animatedShowJackpotAndTimeBox();
            }
        }, 200
    )
    arrayInterval.push(intervalIdPage1);
}

function animatedShowJackpotAndTimeBox() {
    $('#page1item2-bloc1').addClass('animated bounceInDown');
    $('#page1item2-bloc1').css("visibility", "visible");

    setTimeout(
        () => {
        }, 2500
    )

    setTimeout(
        () => {
            $('.shuffle').eq(0).addClass('animated fadeIn');
            $('.shuffle').eq(0).css("visibility", "visible");
        }, 1500
    )

    setTimeout(
        () => {
            // zoomTable();
        }, 1000
    )
}

function zoomTable() {
    let table = $('.itemtable');
    let j = 0;
    let intervalId2page1 = setInterval(
        () => {
            table.eq(j).removeClass('bounceInUp');
            table.eq(j).addClass('pulse');
            j++;
            if (j == table.length) {
                clearInterval(intervalId2page1);
                setTimeout(
                    () => {
                        animateHideTable();
                    }, 1000
                )
            }
        }, 1800
    )
    arrayInterval.push(intervalId2page1);
}

function animateHideTable() {
    let table = $('.itemtable');
    let k = 11;
    let intervalId3page1 = setInterval(
        () => {
            table.eq(k).removeClass('pulse');
            table.eq(k).addClass('animated bounceOutDown');
            k--;
            if (k < 0) {
                clearInterval(intervalId3page1);
                setTimeout(
                    () => {
                        animatedHideJackpotAndTimeBox();
                    }, 1000
                )
            }
        }, 100
    )
    arrayInterval.push(intervalId3page1);
}

function animatedHideJackpotAndTimeBox() {
    $('.logo-container').eq(0).addClass('animated fadeOut');
    $('#page1item2-bloc1').eq(0).addClass('animated fadeOut');
    $('.shuffle').eq(0).removeClass('fadeIn');
    $('.shuffle').eq(0).addClass('animaited fadeOut');


}


