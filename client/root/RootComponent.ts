import {bootstrap} from 'angular2/platform/browser';
import {Component, provide,View,OnInit,Inject, AfterViewInit} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy, Router, Location} from 'angular2/router';
import {Test} from "./../components/Test";
import {Minder} from "./../components/Minder";
import {Home} from "../components/Home";
import {Activate} from "../components/Activate";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

// Root Component
@Component({
    selector: 'root-component'
})
@View({
    templateUrl: '/./root/rootComponent.html',
    directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
})
@RouteConfig([
    {path: '/front/activate/:token', component: Activate, name: 'Activate'},
    {path: '/front/minder', component: Minder, name: 'Minder'},
    {path: '/front/test', component: Test, name: 'Test'},
    {path: '/front/home', component: Home, name: 'Home', useAsDefault: true},
    {path: '/...', name: 'H', redirectTo: ['Home']}
])
export class RootComponent implements OnInit, AfterViewInit {
    private urlPath:any;
    private isActivate: boolean;
    private token: string;
    private tokenToCheck: string;
    private username: string;
    private router: Router;
    private location: Location;
    private tooltip: any;
    private hasToken:boolean;

    constructor(router:Router, location:Location) {

        this.hasToken = false;
        this.router = router;
        this.token = null;
        this.location = location;
        this.isActivate = false;
        console.log("constructor");
    }

    ngOnInit() {
        var that = this;
        this.urlPath = this.location.path().split('/');
        this.isActivate = this.urlPath[2] == 'activate';
        if(this.isActivate){
            var username = this.urlPath[3];
            var tokenToCheck = this.urlPath[4];
            $.ajax({
                method: 'POST',
                url: '/rs/login/activate',
                data: {
                    'username': username,
                    'token': tokenToCheck
                },
                cache: false,
                timeout: 5000,
            }).done(function (res) {
                    console.log(res.type);
                    if (res.type) {
                        that.token = tokenToCheck;
                    } else {
                        swal("Wrong credentials!", "Did you sign up?", "error");
                    }

                })
                .fail(function (xhr, textStatus, errorThrown) {
                    swal("Oops...", "Something went wrong!", "error");
                });
        }

        //console.log('Root');
        //console.log(token,username);
        //this.token = token;
        // Store
        console.log(localStorage.getItem("lastname"));

        var pathname = window.location.pathname;
        console.log(pathname + "hey");

    }

    ngAfterViewInit() {
        var that = this;
        //if(this.hasToken){
        //    this.token = this.tokenToCheck;
        //}

        $('#submit').on('click', this.login.bind(this));

        this.indexInit();

        //setTimeout(function(){
        //    console.log('im setting');
        //    that.token = that.tokenToCheck;
        //},3000);

    }

    login() {
        var that = this;

        var user = $('#username').val();
        var pass = $('#password').val();

        $.ajax({
            method: 'POST',
            url: '/rs/login/authenticate',
            data: {
                'username': user,
                'password': pass
            },
            cache: false,
            timeout: 5000
        }).done(function (res) {
                if (res.type) {
                    swal('Nice!', 'You\'ve successfully logged in ' + res.data.username, 'success');
                    that.token = res.data.token;
                    //that.router.navigate(['Home']);
                    //window.location.replace('/front/test');
                } else {
                    swal("Wrong credentials!", "Did you sign up?", "error");
                }
            })
            .fail(function (xhr, textStatus, errorThrown) {
                swal("Oops...", "Something went wrong!", "error");
            });

    }

    indexInit() {
        var that = this;
        var username = $('#username'),
            password = $('#password'),
            rusername = $('#rusername'),
            rpassword = $('#rpassword'),
            erroru = $('erroru'),
            errorp = $('errorp'),
            udiv = $('#u'),
            pdiv = $('#p'),
            rudiv = $('#ru'),
            rpdiv = $('#rp');

        username.blur(function () {
            if (password.val().length > 1 && username.val() == '') {
                udiv.attr('errr', '');
            } else {
                udiv.removeAttr('errr');
            }
        });

        password.blur(function () {
            if (username.val().length > 1 && password.val() == '') {
                pdiv.attr('errr', '');
            } else {
                pdiv.removeAttr('errr');
            }
        });

        rusername.blur(function () {
            if (rusername.val() == '') {
                rudiv.attr('errr', '');
            } else {
                rudiv.removeAttr('errr');
            }
        });

        rpassword.blur(function () {
            if (rpassword.val() == '') {
                rpdiv.attr('errr', '');
            } else {
                rpdiv.removeAttr('errr');
            }
        });

        //submit.on('click', function(event) {
        //    event.preventDefault();
        //    if (username.val() == '') {
        //        udiv.attr('errr','');
        //    } else {
        //        udiv.removeAttr('errr');
        //    }
        //    if(password.val() == '') {
        //        pdiv.attr('errr','');
        //    } else {
        //        pdiv.removeAttr('errr');
        //    }
        //});

        $('body').append("<div class='login-tooltip'></div>");
        this.tooltip = $('.login-tooltip');

        $('.upper-login-info').on('mouseover', function (e) {

            var html = "sup?";
            that.loginTooltip(e, html);
            that.tooltip.show();
        });

        $('.upper-login-info').on('mouseleave', function (e) {
            that.tooltip.hide();
        });


        var loginf = $('.login');
        var registerf = $('.register');

        //Registration and Login form fadeToggles
        $('#create').on('click', function () {
            loginf.animate({height: '555px', 'margin-top': '125px'}, 600, function () {
                loginf.fadeOut(600, function () {
                    registerf.css({height: '555px', 'margin-top': '125px'});
                    registerf.fadeIn(600);
                });
            });
        });

        $('#log-in-f').on('click', function () {
            registerf.animate({height: '490px', 'margin-top': '40px'}, 600, function () {
                registerf.fadeOut(600, function () {
                    loginf.css({height: '490px', 'margin-top': '40px'});
                    loginf.fadeIn(600);
                });
            });
        });


        var user, pass;
        $("#rsubmit").click(function () {
            user = $("#rusername").val();
            pass = $("#rpassword").val();
            $.ajax({
                method: 'POST',
                url: 'http://192.168.3.17:8000/rs/login/signup',
                data: {
                    'username': user,
                    'password': pass
                },
                cache: false,
                timeout: 5000
            }).done(function (res) {
                    console.log(res);

                    if (res.type) {
                        swal('Nice!', 'You\'ve successfully signed up!', 'success');
                    } else {
                        swal("Oops...", "Something went wrong!", "error");
                    }
                })
                .fail(function (xhr, textStatus, errorThrown) {
                    swal("Oops...", "Something went wrong!", "error");
                });
            return false;
        });
    }

    loginTooltip(event, string) {
        var tooltipX = event.target.getBoundingClientRect().left;
        var tooltipY = event.target.getBoundingClientRect().top;
        var height = event.target.getBoundingClientRect().height;
        this.tooltip.css({top: tooltipY - height * 2, left: tooltipX});
        this.tooltip.html(string);
    }

}

//noinspection TypeScriptValidateTypes
bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
//, provide(LocationStrategy, {useClass: HashLocationStrategy})
