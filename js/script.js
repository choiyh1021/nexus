window.load = function () {};
$(document).ready(function () {
     // 모달창 기능

    // 1 : .modal을 찾아서 웹브라우저에 보관한다.
    let modal = $('.modal');

    // 2 : .modal-cont를 찾아서 웹브라우저에 보관한다.
    let modal_cont = $('.modal-cont');

    // 3 : .modal-close를 찾아서 웹브라우저에 보관한다.
    let modal_close = $('.modal-close');

    // 3-1 : .modal-show를 찾아서 웹브라우저에 보관한다.
    let modal_show = $('.modal-show');

    // 4 : .modal을 display:none 안 보여요.
    // modal.fadeIn();

    // 5 : .modal_close를 마우스로 클릭하면 사라진다.
    modal_close.click(function () {
        modal.fadeOut();
    });

    // 6 : .modal을 마우스로 클릭하면 사라진다.
    modal.click(function () {
        modal.fadeOut();
    });

    // 7 : .modal-cont를 마우스로 클릭하면 그냥 있어라.
    modal_cont.click(function (e) {
        e.stopPropagation();
    });

    // 8 : .modal=show를 마우스로 클릭하면 보인다.
    // 8-1 : 아주 중요합니다. a 태그라면 주의합니다!!!
    modal_show.click(function (e) {
        // href를 막아야 합니다.
        e.preventDefault();
        modal.fadeIn();
    });

    // 위로가기 기능
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    // 주메뉴 관련 코드
    let header = $('.header');
    $(window).scroll(function () {
        let 스크롤바 = $(window).scrollTop();
        if (스크롤바 > 0) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });
    // 모바일메뉴 관련
    let gnb_mobile = $('.gnb-mobile');
    let mobile_menu = $('.mobile-menu');
    let mobile_close = $('.mobile-close');

    gnb_mobile.click(function () {
        mobile_menu.toggleClass('mobile-menu-active');
    });
    mobile_close.click(function () {
        mobile_menu.removeClass('mobile-menu-active');
    });

    //화면너비가 변하면 체크
    $(window).resize(function () {
        let w = $(window).width();
        if (w > 1000) {
            mobile_menu.removeClass('mobile-menu-active');
        }
    });

    //비주얼 슬라이드영역
    let sw_visual_slide_img;
    // 
    let bulletsIndex = 0;

    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
            el: ".sw-visual-pg",
            clickable: true
        },
        direction: "vertical",
        on: {
            init: function () {
            },
            slideChange: function () {

                if (!sw_visual_slide_img) {
                    sw_visual_slide_img = $('.sw-visual .swiper-slide img');
                }

                // this.activeIndex : 활성화 되어야 할 슬라이드
                sw_visual_slide_img.eq(this.activeIndex).css({
                    opacity: 0,
                    'margin-left': '-15%'
                });
                sw_visual_slide_img.eq(this.activeIndex).stop().animate({
                    opacity: 1,
                    'margin-left': '0%'
                }, 800);

                // this.previousIndex : 보였었던 슬라이드
                sw_visual_slide_img.eq(this.previousIndex).stop().animate({
                    opacity: 0
                }, 300);

                // 마치 클릭이 되었을 때의 index 처럼
                // 실제 html 코딩의 순서 값이 넘어온다.
                // console.log(this.realIndex);               
                pgMove(this.realIndex);

            }
        },
    });

    // sw-visual-pg 를 위한 코드
    // 선택된 것이 바뀌어지는 감시한다.  
    // 목록(blullet)을 저장한다.
    let bullets = $('.sw-visual-pg .swiper-pagination-bullet');

    $.each(bullets, function (index, item) {
        $(this).click(function () {
            pgMove(index);
        });
    });

    function pgMove(_num) {
        // 동일한 포커스 시
        if (_num == bulletsIndex) {
            // 아래로 가지마라.
            return;
        }
        // console.log(_num);

        $('.sw-visual-pg .swiper-pagination-bullet').removeClass('sw-visual-pg-active');
        $('.sw-visual-pg .swiper-pagination-bullet').eq(bulletsIndex).addClass('sw-visual-pg-active');

        bulletsIndex = _num;
    }

    // 스크롤시 애니메이션 
    $('.visual-story').waypoint(function (dir) {
        if (dir == "down") {
            $('.visual-story').addClass('visual-story-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-1').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-1').addClass('contents-1-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-2').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-2').addClass('contents-2-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-3').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-3').addClass('contents-3-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-4').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-4').addClass('contents-4-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-5').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-5').addClass('contents-5-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-6').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-6').addClass('contents-6-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-7').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-7').addClass('contents-7-active');
        } else {}
    }, {
        offset: '70%'
    });
    $('.contents-8').waypoint(function (dir) {
        if (dir == "down") {
            $('.contents-8').addClass('contents-8-active');
        } else {}
    }, {
        offset: '70%'
    });

    $('.gallery-txt').waypoint(function (dir) {
        if (dir == "down") {
            $('.gallery-txt').addClass('gallery-txt-active');
        } else {}
    }, {
        offset: '100%'
    });

});