"use strict";
define([
    'require/text!./container.tpl'
    ], function(
    template
) {
    function containerDirective(mainCtrl) {
        return {
            restrict: 'E' // only matches element names
          , controller: 'ContainerController'
          , replace: false
          , template: template
          , scope: {
                model: '=mtkModel'
            }
        };
    }
    containerDirective.$inject = [];
    return containerDirective;
})
