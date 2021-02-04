import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IosDynamicLink = /** @class */ (function (_super) {
    __extends(IosDynamicLink, _super);
    function IosDynamicLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosDynamicLink.prototype.testName = function () { return cordova(this, "testName", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    IosDynamicLink.pluginName = "IosDynamicLink";
    IosDynamicLink.plugin = "cordova-plugin-ios-dynamic-link";
    IosDynamicLink.pluginRef = "IosDynamicLink";
    IosDynamicLink.repo = "https://github.com/JakeMarquez/cordova-plugin-ios-dynamic-link";
    IosDynamicLink.platforms = ["iOS"];
    IosDynamicLink.decorators = [
        { type: Injectable }
    ];
    return IosDynamicLink;
}(IonicNativePlugin));
export { IosDynamicLink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvcy1keW5hbWljLWxpbmsvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVXBDLGtDQUFpQjs7OztJQVVqRCxpQ0FBUTs7Ozs7OztnQkFYWCxVQUFVOzt5QkFWWDtFQVdvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJb3NEeW5hbWljTGluaycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9zLWR5bmFtaWMtbGluaycsXHJcbiAgcGx1Z2luUmVmOiAnSW9zRHluYW1pY0xpbmsnLFxyXG4gIHJlcG86XHJcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL0pha2VNYXJxdWV6L2NvcmRvdmEtcGx1Z2luLWlvcy1keW5hbWljLWxpbmsnLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJb3NEeW5hbWljTGluayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuIC8qKlxyXG4gICogWW91ciBwbHVnaW4gcGx1Z2luIGZ1bmN0aW9ucyBnbyBoZXJlLiBcclxuICAqIEZ1bmN0aW9uIG5hbWVzIHNob3VsZCBtYXRjaCB0aGUgb25lcyBpbiB5b3VyIC5zd2lmdCAmIC5qcyBmaWxlcy5cclxuICAqIE90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBleGVjdXRlIHRoZW0uXHJcbiAgKi9cclxuICAgIEBDb3Jkb3ZhKHtcclxuICAgICAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICAgICAgZXJyb3JJbmRleDogMVxyXG4gICAgfSlcclxuICAgIHRlc3ROYW1lKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59Il19