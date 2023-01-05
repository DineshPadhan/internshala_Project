$(document).ready(function () {

    $('.accordion-select').click(function () {
        $('.accordion-select-once').not(this).prop('checked', false);
    });

    $('.svg-icons').click(function () {
        //left box arrow icon change
        $('.bi-caret-left-fill').toggle();


        if ($('.bi-caret-left-fill').css('display') == 'none') {
            $('.left-box-close').css('display', 'block');
            $('.left-box-open').hide();
        } else if ($('.left-box-open').css("display") == $('.left-box-close').css("display")) {
            $('.left-box-open').css("display", "block");
        }
        else {
            $('.left-box-close').css('display', 'none');
            $('.left-box-open').show();
        }
    });
    // hover effect on left box closed
    $(".left-box-close").hover(function () {
        $('.left-box-open').css("display", "block");
    }, function () {
        $('.left-box-open').css("display", "none");
    });
    $(".left-box-open").hover(function () {
        $('.left-box-open').css("display", "block");
    }, function () {
        $('.left-box-open').css("display", "none");
    });

    setInterval(() => {
        $('.mes-dot').toggle();
    }, 500);
});

// select list 
$(document).ready(function () {
    $('.select-box').on('click', function () {
        $(this).toggleClass('active')
    })

    $('.select-box ul li').on('click', function () {
        var v = $(this).text();
        $('.select-box ul li').not($(this)).removeClass('active');
        $(this).addClass('active');
        $('.select-box label button').text(v)
    })
});