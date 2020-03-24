"use strict";

(function ($) {
    var menuItem = $('.js_header-link');
    var menuItem1 = $('.header-menu__link');
    var menuCloud = $('.js_header__cloud');
    var menuCloudItem = $('.header__cloud-item');
    var menuFinder = $('.js_header-finder');
    var menuFinderItem = $('.header__finder-item');
    var menuItemUser = $('.js_user-action');
    var menuCloudUser = $('.js_header-user');
    var menuItemSearch = $('.js_search-action');
    var menuCloudSearch = $('.js_header-search');
    menuItem1.each(function () {
        $(this).on('mouseover', function (event) {
            menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
            menuCloud.removeClass('is-show');
        })
    })
    menuItem.each(function () {
        $(this).on('mouseover', function (event) {

            if ($('.js_user-action.is-active') || $('.js_search-action.is-active')) {
                menuItemUser.removeClass('is-active');
                menuItemSearch.removeClass('is-active');
            }

            var href = $(this).attr('data-href');
            $(this).closest('.header-menu__item').siblings().removeClass('is-active');
            $(this).closest('.header-menu__item').addClass('is-active');
            menuCloud.addClass('is-show');
            menuCloudItem.removeClass('is-show');
            $(href).siblings('.header__finder-item').removeClass('is-show');
            $(href).addClass('is-show');
            event.preventDefault();
        });
    });
    menuItemUser.on('click', function () {
        $(this).toggleClass('is-active');
        menuCloud.addClass('is-show');
        menuFinderItem.removeClass('is-show');
        menuCloudUser.siblings('.header__cloud-item').removeClass('is-show');
        menuCloudUser.addClass('is-show');
    });
    menuItemSearch.on('click', function () {
        $(this).toggleClass('is-active');
        menuCloud.addClass('is-show');
        menuFinderItem.removeClass('is-show');
        menuCloudSearch.siblings('.header__cloud-item').removeClass('is-show');
        menuCloudSearch.addClass('is-show');
    }); // закрытие по ESC и клику в любой области

    if ($('.js_header__cloud.is-show')) {
        $(document).on('keyup', function (event) {
            if (event.keyCode === 27) {
                menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
                menuCloud.removeClass('is-show');
                menuCloudUser.removeClass('is-show');
            }
        });
        $(document).mouseup(function (event) {
            if ($(window).width() > 991 && menuCloud.has(event.target).length === 0) {
                menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
                menuCloud.removeClass('is-show');
                menuCloudUser.removeClass('is-show');
            }
        });
        
        menuItem.each(function () {
            $(this).on('mouseleave', function (event) {
                if ($(window).width() > 991 && !$(event.target).has('.js_header-link')) {
                    menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
                    menuCloud.removeClass('is-show');
                }
            })
        })
        $('.header-menu__box').on('mouseleave', function (event) {
            if ($(window).width() > 991 && event.relatedTarget != document.querySelector('.header-cloud__wrap')) {
                menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
                menuCloud.removeClass('is-show');
            }
        })
        $('.header-cloud__wrap').on('mouseleave', function () {
            if ($(window).width() > 991) {
                menuItem.closest('.header-menu__item').siblings().removeClass('is-active');
                menuCloud.removeClass('is-show');
            }
        })
        
    } // клик по гамбургеру


    $('.js_header-toggle').click(function (e) {
        var href = $(this).attr('data-href');

        if ($(href).parents('.js_header__cloud').hasClass('is-show')) {
            $('.is-show').removeClass('is-show');
            $('.js_header-toggle').removeClass('is-active');
        } else {
            $(href).parents('.js_header__cloud').addClass('is-show');
            $(href).siblings('.header__finder-item').removeClass('is-show');
            $(href).addClass('is-show');
            $('.top-menu').toggleClass('open');
            $(this).toggleClass('is-active');
        }
    });
    $('.js_header__cloud').click(function (e) {
        if ($(window).width() < 992 && menuCloud.has(event.target).length === 0) {
            $('.is-show').removeClass('is-show');
            $('.js_header-toggle').removeClass('is-active');
        }
    });
    $('.has_child a').click(function () {
        $(this).parents('.has_child').find('.finder-menu').slideToggle();
    });
})(jQuery);

(function ($) {
    var languageHeader = $('.js_language-action');
    var languageList = $('.js_language-list');
    languageHeader.click(function (event) {
        event.preventDefault();
        $(this).toggleClass('is-open');
        languageList.toggleClass('is-show');
    });

    if ($('.js_language-list.is-show')) {
        $(document).on('keyup', function (event) {
            if (event.keyCode === 27) {
                languageHeader.removeClass('is-open');
                languageList.removeClass('is-show');
            }
        });
        $(document).mouseup(function (event) {
            if (languageList.has(event.target).length === 0) {
                languageHeader.removeClass('is-open');
                languageList.removeClass('is-show');
            }
        });
    }
})(jQuery);

$(document).ready(function () {
    function windowFits() {
        var wdth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 992;

        if ($(window).width() < wdth) {
            return true;
        } else {
            return false;
        }
    }

    $('#trading-market-content').bind('easytabs:before', function (event, clicked, targetPanel, settings) { // if (windowFits(992)) {
        //   var elemToCut = $(clicked).parents('span'),
        //       elemsParent = $(elemToCut).parents('.trading-market__controls-img');
        //   elemToCut.attr('id', 'is-select');
        //   elemToCut.siblings('span').removeAttr('id');
        //   elemToCut.detach();
        //   elemToCut.prependTo(elemsParent);
        // }
    }).easytabs({
        animate: true,
        animationSpeed: 'fast',
        defaultTab: "span#is-select",
        tabs: '> div > div > span',
        tabActiveClass: 'is-active',
        panelActiveClass: "active-content-div",
        updateHash: false
    });
});
$(function () {


    $('.graph-container').each(function () {
        $(this).highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: null,
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            tooltip: {
                shared: false
            },
            series: [{
                showInLegend: false,
                data: $(this).data('graph')
            }]
        });
    });


    // $('#graph-container_1').highcharts({
    //     chart: {
    //         type: 'area'
    //     },
    //     title: {
    //         text: null,
    //         enabled: false
    //     },
    //     xAxis: {
    //         labels: {
    //             enabled: false
    //         }
    //     },
    //     yAxis: {
    //         title: {
    //             text: null
    //         }
    //     },
    //     legend: {
    //         enabled: false
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     tooltip: {
    //         shared: false
    //     },
    //     series: [{
    //         showInLegend: false,
    //         data: [5, 3, 8, 2, 4]
    //     }]
    // });
    // $('#graph-container_2').highcharts({
    //     chart: {
    //         type: 'area'
    //     },
    //     title: {
    //         text: null,
    //         enabled: false
    //     },
    //     xAxis: {
    //         labels: {
    //             enabled: false
    //         }
    //     },
    //     yAxis: {
    //         title: {
    //             text: null
    //         }
    //     },
    //     legend: {
    //         enabled: false
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     tooltip: {
    //         shared: false
    //     },
    //     series: [{
    //         showInLegend: false,
    //         data: [5, 3, 8, 2, 4]
    //     }]
    // });
});
$(document).ready(function () {
    var owl = $('.js_traders-list');
    var owlLeft = owl.parents('.traders-slider__list').find('.js_slider-left');
    var owlRight = owl.parents('.traders-slider__list').find('.js_slider-right');

    if (!$.cookie('hideModal')) {
        // если cookie не установлено появится окно
        // с задержкой 5 секунд
        var delay_popup = 1000;
        setTimeout("document.querySelector('.bottom__cookie-block').style.display='inline-block'", delay_popup);
    }
    $.cookie('hideModal', true, {
        // Время хранения cookie в днях
        expires: 30,
        path: '/'
    });

    owl.owlCarousel({
        loop: false,
        items: 4,
        autoWidth: true
    });
    owlLeft.click(function () {
        owl.trigger('prev.owl.carousel');
    });
    owlRight.click(function () {
        owl.trigger('next.owl.carousel');
    });
    var owl2 = $('.js_advantage-slider');
    var owlLeft2 = owl2.parents('.text-investor__cards').find('.js_slider-left');
    var owlRight2 = owl2.parents('.text-investor__cards').find('.js_slider-right');
    owl2.owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        autoWidth: true
    });
    owlLeft2.click(function () {
        owl2.trigger('prev.owl.carousel');
    });
    owlRight2.click(function () {
        owl2.trigger('next.owl.carousel');
    });
    var owl3 = $('.js_traders-list-main');
    var owlLeft3 = owl3.parents('.top-traders__list').find('.js_slider-left');
    var owlRight3 = owl3.parents('.top-traders__list').find('.js_slider-right');
    owl3.owlCarousel({
        loop: false,
        margin: 20,
        items: 3
    });
    owlLeft3.click(function () {
        owl3.trigger('prev.owl.carousel');
    });
    owlRight3.click(function () {
        owl3.trigger('next.owl.carousel');
    });
    var owl4 = $('.js_headline-slider');
    $('.js_headline-slider').on('initialized.owl.carousel', function (event) {
        draggedMainSlider(event);
    });
    owl4.owlCarousel({
        // autoHeight:true,
        loop: false,
        dots: true,
        items: 1,
        center: true,
        onDragged: draggedMainSlider,
        callbacks: true
    });
    
    function draggedMainSlider(event) {
        if ($(window).width() < 680) {
            $(event.currentTarget).find('.owl-item').each(function(){
                var w = 100 / event.item.count;
                $(this).css('min-width', w);
            });

            $(event.currentTarget).find('.owl-item').animate({
                'opacity': 0
            }, 100);
            
            $(event.currentTarget).find('.owl-item').eq(event.item.index).animate({
                'opacity': 1
            }, 100);
            
            // var currentSlideHeight = $(event.currentTarget).find('.owl-item').eq(event.item.index).find('.headline-slider__item').outerHeight();
            // $(event.currentTarget).animate({
            //     'height': currentSlideHeight
            // }, 300);
        } else {

            $(event.currentTarget).find('.owl-item').each(function(){
                $(this).css({
                    'opacity': 1
                });
            })

        }
    }

    if ($(window).width() < 1176) {
        $('.text-safety__cards').owlCarousel({
            items: 3,
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 10
        });
    } else {
        $('.text-safety__cards').trigger('destroy.owl.carousel');
        $('.text-safety__cards').addClass('off');
    }

    if ($(window).width() < 1092) {
        $('.accounts__list').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 20
        });
        $('.footer-payment-options__list').owlCarousel({
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 10
        });
    } else {
        $('.accounts__list').trigger('destroy.owl.carousel');
        $('.accounts__list').addClass('off');

        $('.footer-payment-options__list').trigger('destroy.owl.carousel');
        $('.footer-payment-options__list').addClass('off');
    }
    if ($(window).width() < 992) {
        $('.why-we__lists').owlCarousel({
            items: 3,
            autoWidth: true,
            dots: false,
            navigation: false
        });
        $('.one-click__cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 30
        });
        $('.start-trading__wrap .advantage-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.text-investor__cards .advantage-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.security-of-means__cards > .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 30
        });
        $('.partners-steps__cards').owlCarousel({
            items: 2,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.partners-start__cards .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.partners-start__cards .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.best-traders .number-cards').owlCarousel({
            items: 2,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.terminal-cards__cards').owlCarousel({
            items: 2,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.advantage-terminal__cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.our-value__cards').owlCarousel({
            items: 2,
            autoWidth: true,
            dots: false,
            nav: false
        });
    } else {
        $('.why-we__lists').trigger('destroy.owl.carousel');
        $('.one-click__cards').trigger('destroy.owl.carousel');
        $('.start-trading__wrap .advantage-cards').trigger('destroy.owl.carousel');
        $('.text-investor__cards .advantage-cards').trigger('destroy.owl.carousel');
        $('.security-of-means__cards > .icon-cards').trigger('destroy.owl.carousel');
        $('.partners-start__cards .icon-cards').trigger('destroy.owl.carousel');
        $('.why-we__lists').addClass('off');
        $('.one-click__cards').addClass('off');
        $('.start-trading__wrap .advantage-cards').addClass('off');
        $('.text-investor__cards .advantage-cards').addClass('off');
        $('.security-of-means__cards > .icon-cards').addClass('off');
        $('.partners-start__cards .icon-cards').addClass('off');
        $('.advantage-terminal__cards').trigger('destroy.owl.carousel');
        $('.advantage-terminal__cards').addClass('off');
        $('.terminal-cards__cards').trigger('destroy.owl.carousel');
        $('.terminal-cards__cards').addClass('off');
        $('.our-value__cards').trigger('destroy.owl.carousel');
        $('.our-value__cards').addClass('off');
    }

    if ($(window).width() < 724) {
        $('.text-about .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 30
        });
    } else {
        $('.text-about .icon-cards').trigger('destroy.owl.carousel');
        $('.text-about .icon-cards').addClass('off');
    }

    if ($(window).width() < 680) {
        
        $('.company-awards__list').owlCarousel({
            items: 3,
            autoWidth: true,
            dots: false
        });
        $('.main-features__cards > .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.security-of-means__cards > .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false,
            margin: 30
        });
        $('.copy-transaction__cards > .icon-cards').owlCarousel({
            items: 4,
            autoWidth: true,
            dots: false,
            nav: false
        });
        $('.text-terminal .icon-cards').owlCarousel({
            items: 3,
            autoWidth: true,
            dots: false,
            nav: false
        });
    } else {
        
        $('.company-awards__list').trigger('destroy.owl.carousel');
        $('.company-awards__list').addClass('off');
        $('.main-features__cards > .icon-cards').trigger('destroy.owl.carousel');
        $('.main-features__cards > .icon-cards').addClass('off');
        $('.security-of-means__cards > .icon-cards').trigger('destroy.owl.carousel');
        $('.security-of-means__cards > .icon-cards').addClass('off');
        $('.text-terminal .icon-cards').trigger('destroy.owl.carousel');
        $('.text-terminal .icon-cards').addClass('off');
    }
    if ($(window).width() < 425){
        $('.why-we__lists').owlCarousel({
            items: 1,
            autoWidth: true,
            dots: false,
            navigation: false
        });
    } else {
        $('.why-we__lists').trigger('destroy.owl.carousel');
        $('.why-we__lists').addClass('off');
    }
    

    $(window).resize(function () {
        if ($(window).width() < 1176) {
            $('.text-safety__cards').owlCarousel({
                items: 3,
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 10
            });
        } else {
            $('.text-safety__cards').trigger('destroy.owl.carousel');
            $('.text-safety__cards').addClass('off');
        }

        if ($(window).width() < 1092) {
            $('.accounts__list').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 20
            });
            $('.footer-payment-options__list').owlCarousel({
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 10
            });
        } else {
            $('.accounts__list').trigger('destroy.owl.carousel');
            $('.accounts__list').addClass('off');
            $('.footer-payment-options__list').trigger('destroy.owl.carousel');
            $('.footer-payment-options__list').addClass('off');
        }

        if ($(window).width() < 992) {
            $('.why-we__lists').owlCarousel({
                items: 3,
                autoWidth: true,
                dots: false,
                navigation: false
            });
            $('.one-click__cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 30
            });
            $('.start-trading__wrap .advantage-cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 30
            });
            $('.text-investor__cards .advantage-cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false
            });
            $('.advantage-terminal__cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false
            });
            $('.partners-steps__cards').owlCarousel({
                items: 2,
                autoWidth: true,
                dots: false,
                nav: false
            });
            $('.partners-start__cards .icon-cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false
            });
            $('.terminal-cards__cards').owlCarousel({
                items: 2,
                autoWidth: true,
                dots: false,
                nav: false
            });
            $('.our-value__cards').owlCarousel({
                items: 2,
                autoWidth: true,
                dots: false,
                nav: false
            });
        } else {
            $('.why-we__lists').trigger('destroy.owl.carousel');
            $('.one-click__cards').trigger('destroy.owl.carousel');
            $('.start-trading__wrap .advantage-cards').trigger('destroy.owl.carousel');
            $('.text-investor__cards .advantage-cards').trigger('destroy.owl.carousel');
            $('.partners-steps__cards').trigger('destroy.owl.carousel'); // $('.security-of-means__cards > .icon-cards').trigger('destroy.owl.carousel');

            $('.why-we__lists').addClass('off');
            $('.one-click__cards').addClass('off');
            $('.start-trading__wrap .advantage-cards').addClass('off');
            $('.text-investor__cards .advantage-cards').addClass('off');
            $('.partners-steps__cards').addClass('off'); // $('.security-of-means__cards > .icon-cards').addClass('off');

            $('.partners-start__cards .icon-cards').trigger('destroy.owl.carousel');
            $('.partners-start__cards .icon-cards').addClass('off');
            $('.advantage-terminal__cards').trigger('destroy.owl.carousel');
            $('.advantage-terminal__cards').addClass('off');
            $('.terminal-cards__cards').trigger('destroy.owl.carousel');
            $('.terminal-cards__cards').addClass('off');
            $('.our-value__cards').trigger('destroy.owl.carousel');
            $('.our-value__cards').addClass('off');
        }

        if ($(window).width() < 724) {
            $('.text-about .icon-cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 30
            });
        } else {
            $('.text-about .icon-cards').trigger('destroy.owl.carousel');
            $('.text-about .icon-cards').addClass('off');
        }

        if ($(window).width() < 680) {
            $('.company-awards__list').owlCarousel({
                items: 3,
                autoWidth: true,
                dots: false
            });
            $('.main-features__cards > .icon-cards').owlCarousel({
                items: 2,
                autoWidth: false,
                dots: false,
                nav: false,
                // margin: 30
            });
            $('.security-of-means__cards > .icon-cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false,
                margin: 30
            });
            $('.copy-transaction__cards > .icon-cards').owlCarousel({
                items: 4,
                autoWidth: true,
                dots: false,
                nav: false
            });
            $('.text-terminal .icon-cards').owlCarousel({
                items: 3,
                autoWidth: true,
                dots: false,
                nav: false
            });
        } else {
            $('.company-awards__list').trigger('destroy.owl.carousel');
            $('.company-awards__list').addClass('off');
            $('.main-features__cards > .icon-cards').trigger('destroy.owl.carousel');
            $('.main-features__cards > .icon-cards').addClass('off');
            $('.security-of-means__cards > .icon-cards').trigger('destroy.owl.carousel');
            $('.security-of-means__cards > .icon-cards').addClass('off');
            $('.copy-transaction__cards > .icon-cards').trigger('destroy.owl.carousel');
            $('.copy-transaction__cards > .icon-cards').addClass('off');
            $('.text-terminal .icon-cards').trigger('destroy.owl.carousel');
            $('.text-terminal .icon-cards').addClass('off');
        }
        if ($(window).width() < 426){
            $('.why-we__lists').owlCarousel({
                items: 1,
                autoWidth: false,
                dots: false,
                navigation: false
            });
        } else {
            $('.why-we__lists').trigger('destroy.owl.carousel');
            $('.why-we__lists').addClass('off');
        }

    });
});
$(document).ready(function () {
    // Проверяем запись в куках о посещении
    // Если запись есть - ничего не происходит
    if (!$.cookie('hideModal')) {
        // если cookie не установлено появится окно
        // с задержкой 5 секунд
        var delay_popup = 1000;
        setTimeout("document.querySelector('.bottom__cookie-block').style.display='inline-block'", delay_popup);
    }
    $.cookie('hideModal', true, {
        // Время хранения cookie в днях
        expires: 30,
        path: '/'
    });
});

// Закрытие полосы cookie


$('.ok').click(function () {
    $('.bottom__cookie-block').fadeOut();
});
//# sourceMappingURL=maps/app.js.map