;
(function () {
    set_zhaopai()
    $(window).resize(function () {
        set_zhaopai();
    })
    function set_zhaopai() {
        if ($(window).width() > 1023) {
            $('.img-holder').imageScroll({
                image: null,
                imageAttribute: 'image',
                container: $('body'),
                windowObject: $(window),
                speed: .2,
                coverRatio: .75,
                coverRatio: 1,
                holderClass: 'imageHolder',
                imgClass: 'img-holder-img',
                holderMinHeight: 200,
                holderMaxHeight: 900,
                extraHeight: -200,
                mediaWidth: 1920,
                mediaHeight: 1080,
                parallax: true,
                touch: false
            });
            $('.guangxing_index_chrismas').css('top', $('.newest_product').height() + 700 + 350 - 125);
            $('.guangxing_index_halloween').css('top', $('.newest_product').height() + $('.chrimas_product').height() + 1400 + 350 - 125);
            $('.guangxing_index_flower').css('top', $('.newest_product').height() + $('.chrimas_product').height() + $('.halloween_product').height() + 2100 + 350 - 125);
            $('.guangxing_index_star').css('top', $('.newest_product').height() + $('.chrimas_product').height() + $('.halloween_product').height() + $('.star_product').height() + 2800 + 350 - 125);
            $('.guangxing_index_crown').css('top', $('.newest_product').height() + $('.chrimas_product').height() + $('.halloween_product').height() + $('.star_product').height() + $('.crown_product').height() + 3500 + 350 - 125);
            $('.guangxing_index_wing').css('top', $('.newest_product').height() + $('.chrimas_product').height() + $('.halloween_product').height() + $('.star_product').height() + $('.crown_product').height() + $('.wing_product').height() + 4200 + 350 - 125);
            $('.guangxing_index_heart').css('top', $('.newest_product').height() + $('.chrimas_product').height() + $('.halloween_product').height() + $('.star_product').height() + $('.crown_product').height() + $('.wing_product').height() + $('.heart_product').height() + 4900 + 350 - 125);
        } else if($(window).width() > 767 && $(window).width() <= 1023) {
            var height = $('.phone_show').height();
            var half_height = height / 2;
            $('.guangxing_index_title').css('top', half_height - 125);
            $('.guangxing_index_chrismas').css('top', $('.newest_product .container').height() + height + half_height - 125);
            $('.guangxing_index_halloween').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + height * 2 + half_height - 125);
            $('.guangxing_index_flower').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + height * 3 + half_height - 125);
            $('.guangxing_index_star').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ height * 4 + half_height - 125);
            $('.guangxing_index_crown').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ $('.star_product .container').height()  + height * 5 + half_height - 125);
            $('.guangxing_index_wing').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ $('.star_product .container').height() + $('.crown_product .container').height()+ height * 6 + half_height  - 125);
            $('.guangxing_index_heart').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ $('.star_product .container').height() + $('.crown_product .container').height() + $('.wing_product .container').height()+ height * 7 + half_height - 125);
            
        }else if($(window).width() <= 767) {
            var height = $('.phone_show').height();
            var half_height = height / 2;
            $('.guangxing_index_title').css('top', half_height - 110);
            $('.guangxing_index_chrismas').css('top', $('.newest_product .container').height() + height + half_height - 110);
            $('.guangxing_index_halloween').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + height * 2 + half_height - 110);
            $('.guangxing_index_flower').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + height * 3 + half_height - 110);
            $('.guangxing_index_star').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height() + height * 4 + half_height - 110);
            $('.guangxing_index_crown').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ $('.star_product .container').height()  + height * 5 + half_height - 110);
            $('.guangxing_index_wing').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ $('.star_product .container').height() + $('.crown_product .container').height()+ height * 6 + half_height - 110);
            $('.guangxing_index_heart').css('top', $('.newest_product .container').height() + $('.chrimas_product .container').height() + $('.halloween_product .container').height() + $('.flower_product .container').height()+ $('.star_product .container').height() + $('.crown_product .container').height() + $('.wing_product .container').height() + height * 7 + half_height - 110);
        }

    }
}());