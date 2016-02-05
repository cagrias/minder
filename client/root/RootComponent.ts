import {bootstrap} from 'angular2/platform/browser';
import {Component, provide,View,OnInit,Inject, AfterViewInit} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy, Router} from 'angular2/router';
import {Test} from "./../components/Test";
import {Minder} from "./../components/Minder";

// Root Component
@Component({
    selector: 'root-component'
})
@View({
    templateUrl: '/./root/rootComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/minder', component: Minder, name: 'Minder'},
    {path: '/test', component: Test, name: 'Test'}
])
export class RootComponent implements OnInit, AfterViewInit {


    private token: string;
    private router: Router;

    constructor(router: Router){
        this.router = router;
        this.token = null;
        console.log("constructor");
    }
    ngOnInit(){
        //$(".nav a").on("click", function(){
        //    $(".nav").find(".active").removeClass("active");
        //    $(this).parent().addClass("active");
        //});
        var pathname = window.location.pathname;
        console.log(pathname+"hey");

        $('#submit').on('click', function(){
            console.log('hey');
        });
        //this.login($('#username').val(), $('#password').val())
    }

    ngAfterViewInit() {
       // this.router.navigate(['/']);
        $('#submit').on('click', this.login.bind(this) );


    }

    login(){


        var that = this;

        var user = $('#username').val();
        var pass = $('#password').val();
        console.log(user,pass);
        $.ajax({
            method: 'POST',
            url: '/rs/login/authenticate',
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
                    swal('Nice!', 'You\'ve successfully logged in ' + res.data.username, 'success');
                    that.token = res.data.token;
                    that.router.navigate(['Minder']);
                    //window.location.replace('/front/test');
                } else {
                    swal("Wrong credentials!", "Did you sign up?", "error");
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

    }
}

//noinspection TypeScriptValidateTypes
bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
//, provide(LocationStrategy, {useClass: HashLocationStrategy})
