// button ripple effect from @ShawnSauce 's pen http://codepen.io/ShawnSauce/full/huLEH
$(document).ready(function() {
    $(function(){

        var animationLibrary = 'animate';

        $.easing.easeOutQuart = function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        };
        $('[ripple]:not([disabled],.disabled)')
            .on('mousedown', function( e ){

                var button = $(this);
                var touch = $('<touch><touch/>');
                var size = button.outerWidth() * 1.8;
                var complete = false;

                $(document)
                    .on('mouseup',function(){
                        var a = {
                            'opacity': '0'
                        };
                        if( complete === true ){
                            size = size * 1.33;
                            $.extend(a, {
                                'height': size + 'px',
                                'width': size + 'px',
                                'margin-top': -(size)/2 + 'px',
                                'margin-left': -(size)/2 + 'px'
                            });
                        }

                        touch
                            [animationLibrary](a, {
                            duration: 500,
                            complete: function(){touch.remove();},
                            easing: 'swing'
                        });
                    });

                touch
                    .addClass( 'touch' )
                    .css({
                        'position': 'absolute',
                        'top': e.pageY-button.offset().top + 'px',
                        'left': e.pageX-button.offset().left + 'px',
                        'width': '0',
                        'height': '0'
                    });

                /* IE8 will not appendChild */
                button.get(0).appendChild(touch.get(0));

                touch
                    [animationLibrary]({
                    'height': size + 'px',
                    'width': size + 'px',
                    'margin-top': -(size)/2 + 'px',
                    'margin-left': -(size)/2 + 'px'
                }, {
                    queue: false,
                    duration: 500,
                    'easing': 'easeOutQuart',
                    'complete': function(){
                        complete = true
                    }
                });
            });
    });

    var username = $('#username'),
        password = $('#password'),
        rusername = $('#rusername'),
        rpassword = $('#rpassword'),
        erroru = $('erroru'),
        errorp = $('errorp'),
        submit = $('#submit'),
        udiv = $('#u'),
        pdiv = $('#p'),
        rudiv = $('#ru'),
        rpdiv = $('#rp');

    username.blur(function() {
        if (password.val().length > 1 && username.val() == '') {
            udiv.attr('errr','');
        } else {
            udiv.removeAttr('errr');
        }
    });

    password.blur(function() {
        if(username.val().length > 1 && password.val() == '') {
            pdiv.attr('errr','');
        } else {
            pdiv.removeAttr('errr');
        }
    });

    rusername.blur(function() {
        if (rusername.val() == '') {
            rudiv.attr('errr','');
        } else {
            rudiv.removeAttr('errr');
        }
    });

    rpassword.blur(function() {
        if(rpassword.val() == '') {
            rpdiv.attr('errr','');
        } else {
            rpdiv.removeAttr('errr');
        }
    });

    submit.on('click', function(event) {
        event.preventDefault();
        if (username.val() == '') {
            udiv.attr('errr','');
        } else {
            udiv.removeAttr('errr');
        }
        if(password.val() == '') {
            pdiv.attr('errr','');
        } else {
            pdiv.removeAttr('errr');
        }
    });

    $('body').append("<div class='login-tooltip'></div>");
    var tooltip = $('.login-tooltip');

    $('.upper-login-info').on('mouseover',function(e){
        console.log(e);
        console.log(e.target.getBoundingClientRect());
        var html = "sup?";
        loginTooltip(e, html);
        tooltip.show();
    });

    $('.upper-login-info').on('mouseleave',function(e){
        tooltip.hide();
    });

    function loginTooltip(event, string){
        var tooltipX = event.target.getBoundingClientRect().left;
        var tooltipY = event.target.getBoundingClientRect().top;
        var height = event.target.getBoundingClientRect().height;
        tooltip.css({top: tooltipY-height*2, left: tooltipX});
        tooltip.html(string);
    }

    var loginf = $('.login');
    var registerf = $('.register');

    //Registration and Login form fadeToggles
    $('#create').on('click', function(){
        loginf.animate({height: '285px','margin-top':'125px'}, 600, function(){
            loginf.fadeOut(600,function(){
                registerf.css({height: '285px','margin-top':'125px'});
                registerf.fadeIn(600);
            });
        });
    });

    $('#log-in-f').on('click', function(){
        registerf.animate({height: '460px','margin-top':'40px'}, 600, function(){
            registerf.fadeOut(600,function(){
                loginf.css({height: '460px','margin-top':'40px'});
                loginf.fadeIn(600);
            });
        });
    });


    function signUp() {
        var user, pass;
        $("#rsubmit").click(function () {
            user = $("#rusername").val();
            pass = $("#rpassword").val();
            $.ajax({
                method: 'POST',
                url: '/rs/login/signup',
                data: {
                    'username': user,
                    'password': pass
                },
                cache: false,
                timeout: 5000,
                beforeSend: function (xhr, settings) {
                },
                error: function () {
                },
                success: function (data, textStatus, jqXHR) {
                },
                complete: function (xhr, textStatus) {
                }
            }).done(function (res) {
                    console.log(res);

                    if (res.type) {
                        swal('Nice!', 'You\'ve successfully signed up!', 'success');
                        window.location.replace('/rs/home/main');
                    } else {
                        swal("Oops...", "Something went wrong!", "error");
                    }
                })
                .fail(function (xhr, textStatus, errorThrown) {
                    console.log("1)" + JSON.stringify(xhr));
                    console.log("2)" + textStatus);
                    console.log("3)" + errorThrown);
                    swal("Oops...", "Something went wrong!", "error");
                })
                .always(function () {
                    console.log("complete");
                });
            return false;
        });
    }
});
