'use strict';

angular.module('app')
    .directive('multiple', function () {

        return {

            scope: true,
            link: function (scope, element, attrs) {

                element.multiselect({

                    // Replicate the native functionality on the elements so
                    // that angular can handle the changes for us.
                    onChange: function (optionElement, checked) {

                        optionElement.removeAttr('selected');

                        if (checked) {
                            optionElement.attr('selected', 'selected');
                        }

                        element.change();
                    }
                });

                // Watch for any changes to the length of our select element
                scope.$watch(function () {
                    return element[0].length;
                }, function () {
                    element.multiselect('rebuild');
                });

                // Watch for any changes from outside the directive and refresh
                scope.$watch(attrs.ngModel, function () {
                    element.multiselect('refresh');
                });

            }

        };
    });