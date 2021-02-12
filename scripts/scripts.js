jQuery(function () {

    function sidebar() {
        $('.drop_down_title').click(function () {
            if (!$('.sidebar_menu_cont').hasClass('_active')) {
                $('.drop_down_title').not(this).parent().removeClass('_active');
                $('.drop_down_title').not(this).siblings().slideUp();
                $(this).siblings().slideToggle();
                $(this).parent().toggleClass('_active');
            }
        });
        $('._drop_item').click(function () {
            $(this).parent().slideUp();
            $(this).parent().parent().removeClass('_active');
            //$(this).parent().siblings().children('.text').text($(this).text());
        });


        if ($('html').width() > 700) {
            if ($('.sidebar_menu_cont').hasClass('_active')) {
                $('.side_bar_title').children('.text').toggle();
                setTimeout(function () {
                    $('.sidebar_menu_cont').addClass('_done');
                }, 150)
            }
        } else {
            $('.sidebar_menu_cont').removeClass('_active');
        }
        $('#sidebar_arrow').click(function () {
            if ($('html').width() > 700) {


                if ($(this).hasClass('_active')) {


                    $('.sidebar_menu_cont').removeClass('_done');


                    setTimeout(function () {

                        $('.side_bar_title').children('.text').toggle();
                    }, 250);

                } else {

                    $('.side_bar_title').children('.text').toggle();
                    setTimeout(function () {
                        $('.sidebar_menu_cont').addClass('_done');
                    }, 150)
                }
                $('.sidebar_menu_cont').toggleClass('_active');
                $(this).toggleClass('_active');
                $('.main_content_box').toggleClass('_active');
            } else {
                $('.sidebar_menu_cont').toggleClass('_active_2');
                $(this).toggleClass('_active');
                $('.main_content_box').toggleClass('_active');
            }
            if ($('html').width() > 1000) {
                rebuid_card();
            }
        })
        $('#sidebar_arrow_2').click(function () {
            $(this).toggleClass('_active');
            $('.sidebar_menu_cont').toggleClass('_active_2');
        })
    }
    function rebuid_card() {
        if ($('.big_profile_card').children('.action_column').length != 0) {
            $('.actions_container').append($('.big_profile_card').children('.action_column'));
        } else {
            $('.big_profile_card').append($('.actions_container').children('.action_column'));
        }
    }
    function drop() {
        $('._drop_down_title').click(function () {
            $('.drop_down_title').not(this).parent().removeClass('_active');
            $('.drop_down_title').not(this).siblings().slideUp();
            $(this).siblings().slideToggle();
            $(this).parent().toggleClass('_active');
        });

    }
    function tabs() {
        $(".tab_body").not(":first").hide();
        $('.tab_link').click(function () {
            $('.tab_link').removeClass('_active');
            $(this).addClass('_active');
            $(".tab_body").hide().eq($(this).index()).fadeIn()
        });
    }
    drop();
    //tabs();
    sidebar();

    function calendar() {
        remove_empty();
        var mounth_n_days = [
            [0, 'Январь'],
            [1, 'Февраль'],
            [2, 'Март'],
            [3, 'Апрель'],
            [4, 'Май'],
            [5, 'Июнь'],
            [6, 'Июль'],
            [7, 'Август'],
            [8, 'Сентябрь'],
            [9, 'Октябрь'],
            [10, 'Ноябрь'],
            [11, 'Декабрь'],
        ]
        function search_mon_num(mun) {
            for (var i = 0; i < mounth_n_days.length; i++) {
                if (mun == mounth_n_days[i][1]) {
                    return mounth_n_days[i][0];
                }
            }
        }

        function remove_empty() {
            for (var i = 0; i < 42; i++) {
                if ($('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text().length == 0) {
                    $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).addClass('_none');
                } else {
                    $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).removeClass('_none');
                }
                if ($('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text().length == 0) {
                    $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).addClass('_none');
                } else {
                    $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).removeClass('_none');
                }
            }
        }
        $('.number_item').click(function () {

            var part = $(this).parent().parent().parent().index() - 1;

            if ($(this).text().length != 0) {
                if ($('.numbers_body').children('._active').length < 2) {
                    $(this).toggleClass('_active');
                } else {
                    if ($(this).hasClass('_active')) {
                        $(this).toggleClass('_active');
                    }
                }
            }


            remove_empty();
            if ($('.number_item._active').length == 2) {
                if ($('.number_item._active').eq(0).parent().parent().parent().index() != $('.number_item._active').eq(1).parent().parent().parent().index()) {

                    for (var i = $('.numbers_body').eq(0).children('._active').index(); i < $('.numbers_body').eq(0).children().length; i++) {
                        $('.numbers_body').eq(0).children().eq(i).addClass('_blue');
                    }



                    for (var i = $('.numbers_body').eq(1).children('._active').index() - 1; i >= 0; i--) {
                        $('.numbers_body').eq(1).children().eq(i).addClass('_blue');
                    }
                } else {
                    for (var j = $('.numbers_body').eq(part).children('._active').eq(0).index(); j < $('.numbers_body').children('._active').eq(1).index(); j++) {
                        $('.numbers_body').eq(part).children().eq(j).addClass('_blue');
                    }
                }
            } else {
                $('.numbers_body').children().removeClass('_blue')
            }



            var t;
            if (search_mon_num($('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1 <= 9) {
                t = search_mon_num($('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1;
                t = '0' + t;
            }
            if ($('.number_item._active').eq(0).text().length != 0) {
                $('.datepicker').eq(0).children('.text').text($('.number_item._active').eq(0).text() + '.' + t + '.' + $('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.year').text());
            } else {
                $('.datepicker').eq(0).children('.text').text('--.--.----')
            }


            if (search_mon_num($('.number_item._active').eq(1).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1 <= 9) {
                t = search_mon_num($('.number_item._active').eq(1).parent().parent().siblings('.mounth_header').children('.mounth_name').text()) + 1;
                t = '0' + t;
            }
            if ($('.number_item._active').eq(1).text().length != 0) {
                $('.datepicker').eq(1).children('.text').text($('.number_item._active').eq(1).text() + '.' + t + '.' + $('.number_item._active').eq(0).parent().parent().siblings('.mounth_header').children('.year').text());
            } else {
                $('.datepicker').eq(1).children('.text').text('--.--.----')
            }

        });

        $('.caelndar_arrow._prev').click(function () {
            $('.numbers_body').children().removeClass('_blue');
            var mounth = $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text();
            var year = +$('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text();

            var mounth_2 = $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text();
            var year_2 = +$('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text();

            mounth = search_mon_num(mounth) - 1;
            mounth_2 = search_mon_num(mounth_2) - 1;

            if (mounth == -1) {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[11][1]);
                mounth = 11;
                year--;
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text(year);
            } else {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth][1]);
            }

            if (mounth_2 == -1) {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[11][1]);
                year_2--;
                mounth_2 = 11;
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text(year_2);
            } else {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth_2][1]);
            }



            var id_1 = -1;
            for (i = 0; i < $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().length && id_1 == -1; i++) {
                if ($('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text().length != 0) {
                    id_1 = i;

                }
            }

            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }
            var number_in_1 = dayInMounth(year_2, mounth_2);


            var j = 1;
            for (var i = id_1; j <= number_in_1; i++, j++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text(j);
            }




            var number_in_0 = dayInMounth(year, mounth);

            var k = number_in_0;

            console.log(id_1);
            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }
            var x;
            if (27 + id_1 - number_in_0 < 0) {
                x = 34;
            } else {
                x = 27
            }
            for (var i = x + id_1; k >= 1; i--, k--) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text(k);
            }
            remove_empty();

        })


        $('.caelndar_arrow._next').click(function () {
            $('.numbers_body').children().removeClass('_blue')
            var mounth = $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text();
            var year = +$('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text();

            var mounth_2 = $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text();
            var year_2 = +$('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text();

            mounth = search_mon_num(mounth) + 1;
            mounth_2 = search_mon_num(mounth_2) + 1;

            if (mounth == 12) {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[0][1]);
                mounth = 0;
                year++;
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.year').text(year);
            } else {
                $('.calendar_mounth').eq(0).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth][1]);
            }

            if (mounth_2 == 12) {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[0][1]);
                year_2++;
                mounth_2 = 0;
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.year').text(year_2);
            } else {
                $('.calendar_mounth').eq(1).children('.mounth_header').children('.mounth_name').text(mounth_n_days[mounth_2][1]);
            }



            var id_1 = -1;
            for (i = 0; i < $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().length && id_1 == -1; i++) {
                if ($('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text().length != 0) {
                    id_1 = i;
                }
            }

            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }
            var number_in_1 = dayInMounth(year, mounth);


            var j = 1;
            for (var i = id_1; j <= number_in_1; i++, j++) {
                $('.calendar_mounth').eq(0).children('.mounth_body').children('.numbers_body').children().eq(i).text(j);
            }




            var id_1 = -1;
            for (i = 12; i < $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().length && id_1 == -1; i++) {
                if ($('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text().length == 0) {
                    id_1 = i;
                }
            }


            var number_in_0 = dayInMounth(year_2, mounth_2);
            var k = 1;


            for (var i = 0; i < 42; i++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text('');
            }

            var x;
            if (id_1 - 28 < 7) {
                x = 28;
            } else {
                x = 35;
            }

            for (var i = id_1 - x; k <= number_in_0; i++, k++) {
                $('.calendar_mounth').eq(1).children('.mounth_body').children('.numbers_body').children().eq(i).text(k);
            }
            remove_empty()
        })




        $('.datepicker').click(function () {
            $('.datepicker').siblings().slideToggle();
            if ($('html').width() < 1030) {
                $('.calendar_black').addClass('_active');
            }
        })
        $('.calendar_black').click(function () {
            $('.calendar_black').removeClass('_active');
            $('.datepicker').siblings().slideUp();
        })



        function dayInMounth(year, number) {
            number++;
            return new Date(year, number, 0).getDate();
        }

    }
    calendar();
});