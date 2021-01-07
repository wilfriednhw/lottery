let page3 = $('#page3');
let page3content =
    "<div id ='page3-output-winnner-container'>" +
        "<div id='page3-output-winnner-1'>" +
        
        "</div>" +
        "<div id='page3-output-winnner-2'>" +
        
        "</div>" +
    "</div>" +


    "<div id='page3-logo'>" +
    "<div class='logo-container'><img src='./assets/logo.jpeg' alt='logo'/></div>" +
    "</div>" +


    "<div id='page3-jackpot-tirage'>" +
    "<div id='page3-jackpot'>" +
    "<span class='label label-bloc1'>jackpot</span>" +
    "<div class='jackpot-container-page-3'>" +
        "<div class='countJackpot-2'>" +
            "<div class='numberJackpot-page-3'>" +
                "<span id='jackpot-0'>0</span>" +
            "</div>" +
            "<div class='divider-jackpotPage2'><span>,</span></div>" +
            "<div class='numberJackpot-page-3'>" +
                "<span>0</span>" +
            "</div>" +
            "<div class='numberJackpot-page-3'>" +
                "<span>0</span>" +
            "</div>" +
            "<div class='numberJackpot-page-3'>" +
                "<span>0</span>" +
            "</div>" +
            "<div class='divider-jackpotPage2'><span>.</span></div>" +
        "</div>" +
        "<div class='countJackpot-2'>" +
            "<div class='numberJackpot-page-3-2'>" +
                "<span id='jackpot-0'>0</span>" +
            "</div>" +
            "<div class='numberJackpot-page-3-2'>" +
                "<span id='jackpot-0'>0</span>" +
            "</div>" +
        "</div>" +
    "</div>" +
    "</div>" +
    "<div id='page3-tirage'>" +
    "<div class='page3-tirage-item'>" +
    "<span class='label label-bloc1'>tirage</span>" +
    "<span >32323</span>" +
    "</div>" +

    "<div class='page3-tirage-item'>" +
    "<span class='label label-bloc1'>M</span>" +
    "<span >-</span>" +
    "</div>" +
    "</div>" +
    "</div>";

let outputNumber = [12, 24, 38, 49, 50, 66, 75, 80, 79, 60, 11, 28, 16, 18, 51, 45, 17, 32, 27, 20]

function setOutputNumber() {
    //set number in first row
    let page3OutputWinnner1 = $('#page3-output-winnner-1');
    for (let i = 0; i < outputNumber.length-10; i++) {
        page3OutputWinnner1.append("<span class='numOutput num" + outputNumber[i] + "'>" + outputNumber[i] + "</span>");
    }

    //set number in second row
    let page3OutputWinnner2 = $('#page3-output-winnner-2');
    for (let i = 0; i < outputNumber.length-10; i++) {
        page3OutputWinnner2.append("<span class='numOutput num" + outputNumber[i + 10] + "'>" + outputNumber[i + 10] + "</span>");
    }
    updateColor();
}

//2
function animationJackPot() {
    $('#page3-jackpot-tirage').css('visibility', 'visible');
    $('#page3-jackpot-tirage').children().addClass('animated bounceInUp');

    setTimeout(
        () => {
            animationLogo();
            setNumberInjackPotFirstPage3();
        }, 2000
    )


}

//3
function animationLogo() {
    $('#page3-logo').css('visibility', 'visible');
    $('#page3-logo').children().addClass('animated fadeIn');
    setTimeout(
        () => {
            zoomAnimationOutPutNumberWithBorder();
        }, 2000
    )
}

//1
function animationStartOutPutNumber() {
    $('#page3-output-winnner-1').css('visibility', 'visible');
    $('#page3-output-winnner-2').css('visibility', 'visible');
    setTimeout(
        () => {
            animationJackPot();
        }, 2000
    )
}

//4
function zoomAnimationOutPutNumberWithBorder() {
    let i = 0;
    let intervalId = setInterval(
        () => {
            $('#page3-output-winnner-1').children().eq(i).addClass('animated pulse');
            i++;
            // remove border

            if (i > $('#page3-output-winnner-1').children().length) {
                clearInterval(intervalId);
                let j = 0;
                let intervalId2 = setInterval(
                    () => {
                        $('#page3-output-winnner-2').children().eq(j).addClass('animated pulse');
                        j++;
                        // remove border

                        if (j > $('#page3-output-winnner-2').children().length) {
                            clearInterval(intervalId2);

                            animationHideJackpotLogo();
                        }
                    }, 50
                )
            }
        }, 100
    );
    arrayInterval.push(intervalId);

}


function animationJackpotCountNumberPartIntPage3(j, k) {
    let jackpotNumber = $(".numberJackpot-page-3").eq(k);
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

function animationJackpotCountNumberPartDecimalPage3(j, k) {
    let jackpotNumber = $(".numberJackpot-page-3-2").eq(k);
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

function setNumberInjackPotFirstPage3() {
    let item = jackpotValue.toString();
    //first number
    animationJackpotCountNumberPartIntPage3(parseInt(item[0]), 0);

    //second
    animationJackpotCountNumberPartIntPage3(parseInt(item[1]), 1);

    //third
    animationJackpotCountNumberPartIntPage3(parseInt(item[2]), 2);

    //fourth
    animationJackpotCountNumberPartIntPage3(parseInt(item[3]), 3);

    //decimal 1
    animationJackpotCountNumberPartDecimalPage3(parseInt(item[5]), 0);

    //decimal 2
    animationJackpotCountNumberPartDecimalPage3(parseInt(item[6]), 1);
}

function animationHideJackpotLogo() {
    setTimeout(
        () => {
            $('#page3-logo').children().removeClass('animated fadeIn');
            $('#page3-logo').children().addClass('animated bounceOutDown');

            $('#page3-jackpot-tirage').children().removeClass('animated bounceInUp');
            $('#page3-jackpot-tirage').children().addClass('animated bounceOutDown');

            setTimeout(
                () => {
                    animationHideNumeroOutput();
                }, 300
            )
        }, 2500
    )
}

function animationHideNumeroOutput() {
    let i = 10;
    let j = 10;

    let intervalId1 = setInterval(
        () => {
            $('#page3-output-winnner-1').children().eq(i).removeClass('animated pulse');
            $('#page3-output-winnner-1').children().eq(i).addClass('animated bounceOutDown');
            i--;
            if (i < 0) {
                clearInterval(intervalId1);
                window.location.reload();
            }
        }, 100
    )
    arrayInterval.push(intervalId1);

    let intervalId2 = setInterval(
        () => {
            $('#page3-output-winnner-2').children().eq(i).removeClass('animated pulse');
            $('#page3-output-winnner-2').children().eq(i).addClass('animated bounceOutDown');
            j--;
            if (j < 0) {
                clearInterval(intervalId2);
            }
        }, 100
    )
    arrayInterval.push(intervalId2);

}