$(document).ready(function () {
    // Variables
    var clickedTab = $('.tabs > .active');
    var tabWrapper = $('.tab__content');
    var activeTab = tabWrapper.find('.active');
    var activeTabHeight = activeTab.outerHeight();

    // Show tab on page load
    activeTab.show();

    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);

    $('.tabs > li').on('click', function () {
        // Remove class from active tab
        $('.tabs > li').removeClass('active');

        // Add class active to clicked tab
        $(this).addClass('active');

        // Update clickedTab variable
        clickedTab = $('.tabs .active');

        // fade out active tab
        activeTab.fadeOut(250, function () {
            // Remove active class all tabs
            $('.tab__content > li').removeClass('active');

            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $('.tab__content > li').eq(clickedTabIndex).addClass('active');

            // update new active tab
            activeTab = $('.tab__content > .active');

            // Update variable
            activeTabHeight = activeTab.outerHeight();

            // Animate height of wrapper to new tab height
            tabWrapper
                .stop()
                .delay(50)
                .animate(
                    {
                        height: activeTabHeight,
                    },
                    500,
                    function () {
                        // Fade in active tab
                        activeTab.delay(50).fadeIn(250);
                    }
                );
        });
    });

    // Variables
    var colorButton = $('.colors li');

    colorButton.on('click', function () {
        // Remove class from currently active button
        $('.colors > li').removeClass('active-color');

        // Add class active to clicked button
        $(this).addClass('active-color');

        // Get background color of clicked
        var newColor = $(this).attr('data-color');

        // Change background of everything with class .bg-color
        $('.bg-color').css('background-color', newColor);

        // Change color of everything with class .text-color
        $('.text-color').css('color', newColor);
    });
});

// function handleClick(){

// const btnNumber = document.querySelector("#btnNumber");
// const CLICKED_CLASS = "#btnNumber"
// 	console.log(btnNumber);
//  btnNumber.classList.toggle(CLICKED_CLASS);
// }

var redCount = 0;
var yellowCount = 0;
var redArr = new Array();
var yellowArr = new Array();
var yellowCount = 0;
function handleClick(num) {
    const ClickNum = document.querySelector('#ClickNum' + num);
    const CLICKED_CLASS_1 = 'clickNumOne';
    const CLICKED_CLASS_2 = 'clickNumTwo';
    const CLICKED_CLASS_3 = 'clickNumThree';

    const hasClass_1 = ClickNum.classList.contains(CLICKED_CLASS_1);
    const hasClass_2 = ClickNum.classList.contains(CLICKED_CLASS_2);
    const hasClass_3 = ClickNum.classList.contains(CLICKED_CLASS_3);
    // console.log(!hasClass_1);
    // if (!hasClass_1) {
    //     ClickNum.classList.add(CLICKED_CLASS_2);
    // } else {
    //     ClickNum.classList.remove(CLICKED_CLASS_1);
    // }

    if (hasClass_1 == true) {
        if (redCount > 38) {
            alert('더이상 제외시킬 수 없습니다.');
        } else {
            ClickNum.classList.remove(CLICKED_CLASS_1);
            ClickNum.classList.add(CLICKED_CLASS_2);
            redArr[redCount] = num;
            redCount++;
        }
    } else if (hasClass_2 == true) {
        if (yellowCount > 5) {
            alert('더이상 포함시킬 수 없습니다.');
        } else {
            ClickNum.classList.remove(CLICKED_CLASS_2);
            ClickNum.classList.add(CLICKED_CLASS_3);
            redArr.splice(redArr.indexOf(num), 1);
            yellowArr[yellowCount] = num;
            redCount--;
            yellowCount++;
        }
    } else if (hasClass_3 == true) {
        ClickNum.classList.remove(CLICKED_CLASS_3);
        ClickNum.classList.add(CLICKED_CLASS_1);
        yellowArr.splice(yellowArr.indexOf(num), 1);
        yellowCount--;
    } else {
        ClickNum.classList.add(CLICKED_CLASS_1);
        redCount = 0;
        yellowCount = 0;
    }
   
}


