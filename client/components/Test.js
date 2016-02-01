System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Test;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Test = (function () {
                function Test() {
                    console.log("Test class");
                    this.textarea = JSON.stringify({ "data": { "current": [{ "Info": { "name": "NetsureControllerv0.2", "weight": 29, "maxDepth": 6, "elementCountPerDepth": [1, 1, 1, 1, 1, 1, 1], "activeSince": "2014.06.0409: 28: 08" }, "Switches": [{ "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C5: DA", "depth": 1, "ipv4Address": "192.196.197.218", "vendor": "StanfordUniversity, EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C6: 75", "depth": 6, "ipv4Address": "192.196.can.orhan4", "vendor": "StanfordUniversity, EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C6: 18", "depth": 4, "ipv4Address": "192.196.198.aydinabi", "vendor": "Stanford University, EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C5: BB", "depth": 0, "ipv4Address": "192.196.197.aydinabi", "vendor": "StanfordUniversity, EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C6: 56", "depth": 5, "ipv4Address": "192.196.198.86", "vendor": "StanfordUniversity,EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C5: F9", "depth": 2, "ipv4Address": "192.196.197.249", "vendor": "StanfordUniversity, EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "dataPathId": "OpenFlow1.3ReferenceUserspaceSwitchDatapath", "hwAddress": "60: EB: 69: FE: C6: 37", "depth": 3, "ipv4Address": "192.196.198.55", "vendor": "StanfordUniversity, EricssonResearchandCPqDResearch", "activeSince": "2014.06.0409: 38: 39", "packets": 0, "bytes": 0, "flows": 0, "version": "1.3", "blocked": 0, "status": 0, "required": false, "colorCode": "B" }], "Links": [{ "srcHWAddress": "60: EB: 69: FE: C6: 56", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 75", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C5: BB", "srcPortId": 66, "destHWAddress": "60: EB: 69: FE: C5: BB", "destPortId": 188, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 56", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 56", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 56", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 75", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 56", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 75", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 56", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 75", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 18", "srcPortId": 1, "destHWAddress": "60: EB: 69: FE: C6: 37", "destPortId": 2, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 18", "srcPortId": 1, "destHWAddress": "60: EB: 69: FE: C5: F9", "destPortId": 7777, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C6: 18", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 56", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C5: DA", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C5: F9", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C5: F9", "srcPortId": 2, "destHWAddress": "60: EB: 69: FE: C6: 37", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }, { "srcHWAddress": "60: EB: 69: FE: C5: BB", "srcPortId": 1, "destHWAddress": "60: EB: 69: FE: C5: DA", "destPortId": 1, "blocked": 0, "status": 0, "required": false, "colorCode": "B" }], "Hosts": [{ "hostHWAddress": "00: 00: 00: 00: 00: 65", "hostIpv4Address": "192.168.0.101", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "1", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 66", "hostIpv4Address": "192.168.0.102", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "2", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 67", "hostIpv4Address": "192.168.0.103", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "1", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 68", "hostIpv4Address": "192.168.0.104", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "3", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 69", "hostIpv4Address": "192.168.0.105", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "4", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 70", "hostIpv4Address": "192.168.0.106", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "2", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 71", "hostIpv4Address": "192.168.0.107", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "1", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 72", "hostIpv4Address": "192.168.0.108", "switchHWAddress": "60: EB: 69: FE: C5: F9", "switchPortNo": "3", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 73", "hostIpv4Address": "192.168.0.109", "switchHWAddress": "60: EB: 69: FE: C5: DA", "switchPortNo": "1", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }, { "hostHWAddress": "00: 00: 00: 00: 00: 74", "hostIpv4Address": "192.168.0.110", "switchHWAddress": "60: EB: 69: FE: C6: 37", "switchPortNo": "3", "activeSince": "2014.02.1211: 07: 48", "displayName": "Unknown", "depth": 3, "status": 0, "required": false, "colorCode": "B" }] }], "track": {} } });
                }
                Test.prototype.ngOnInit = function () {
                };
                Test.prototype.validate = function (e) {
                    console.log("beautifying");
                    console.log(typeof e);
                    try {
                        var parsed = JSON.parse(e);
                        var j = JSON.stringify(parsed, null, 4);
                        $('textarea').val('');
                        $('textarea').val(j);
                        this.resultClass = 'validJSON';
                        this.resultvalue = 'Valid!';
                    }
                    catch (e) {
                        this.resultClass = 'notValidJSON';
                        this.resultvalue = 'Not a valid JSON \n' + e.message;
                        return false;
                    }
                    return true;
                };
                Test.prototype.submit = function (data) {
                    if (this.validate(data)) {
                        console.log("submitting..");
                        $.ajax({ method: 'PUT', url: '/testtopology', data: data, cache: false, timeout: 3000, contentType: 'text/plain' });
                    }
                    else {
                        console.log('error');
                    }
                };
                Test = __decorate([
                    core_1.Component({
                        selector: 'test'
                    }),
                    core_1.View({
                        templateUrl: 'pagehtmls/test.html',
                        styleUrls: ['pagehtmls/test.css'],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], Test);
                return Test;
            })();
            exports_1("Test", Test);
        }
    }
});
//# sourceMappingURL=Test.js.map