System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', "./../components/Test", "./../components/Minder"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, Test_1, Minder_1;
    var RootComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Test_1_1) {
                Test_1 = Test_1_1;
            },
            function (Minder_1_1) {
                Minder_1 = Minder_1_1;
            }],
        execute: function() {
            // Root Component
            RootComponent = (function () {
                function RootComponent(router) {
                    this.router = router;
                    this.token = null;
                    console.log("constructor");
                }
                RootComponent.prototype.ngOnInit = function () {
                    //$(".nav a").on("click", function(){
                    //    $(".nav").find(".active").removeClass("active");
                    //    $(this).parent().addClass("active");
                    //});
                    var pathname = window.location.pathname;
                    console.log(pathname + "hey");
                    $('#submit').on('click', function () {
                        console.log('hey');
                    });
                    //this.login($('#username').val(), $('#password').val())
                };
                RootComponent.prototype.ngAfterViewInit = function () {
                    // this.router.navigate(['/']);
                    $('#submit').on('click', this.login.bind(this));
                };
                RootComponent.prototype.login = function () {
                    var that = this;
                    var user = $('#username').val();
                    var pass = $('#password').val();
                    console.log(user, pass);
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
                        }
                        else {
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
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'root-component'
                    }),
                    core_1.View({
                        templateUrl: '/./root/rootComponent.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/minder', component: Minder_1.Minder, name: 'Minder' },
                        { path: '/test', component: Test_1.Test, name: 'Test' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RootComponent);
                return RootComponent;
            })();
            exports_1("RootComponent", RootComponent);
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(RootComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//, provide(LocationStrategy, {useClass: HashLocationStrategy})
//# sourceMappingURL=RootComponent.js.map