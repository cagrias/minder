System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', "./Test"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, Test_1;
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
            }],
        execute: function() {
            // Root Component
            RootComponent = (function () {
                function RootComponent() {
                }
                RootComponent.prototype.ngOnInit = function () {
                    $(".nav a").on("click", function () {
                        $(".nav").find(".active").removeClass("active");
                        $(this).parent().addClass("active");
                    });
                    var pathname = window.location.pathname;
                    console.log(pathname);
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'RootComponent'
                    }),
                    core_1.View({
                        templateUrl: 'navigation/topnav.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/test', component: Test_1.Test, name: 'Test', useAsDefault: true },
                        { path: '/...', name: 'T', redirectTo: ['Test'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], RootComponent);
                return RootComponent;
            })();
            exports_1("RootComponent", RootComponent);
            browser_1.bootstrap(RootComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=RootComponent.js.map