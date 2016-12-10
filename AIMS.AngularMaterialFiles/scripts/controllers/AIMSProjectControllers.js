
"use strict";

angular.module("AIMS.Controllers", [])
.controller("DocumentationController", function ($scope, $log, $window, $document, $mdToast, $mdDialog, $interval, $timeout, AIMSDocumentList) {

    $scope.AbsadocumentsVDIMachine = [];
    $scope.AbsaVisaDocuments = [];
    $scope.AbsaTechnicalDocuments = [];
    //$scope.AbsadocumentsVDIMachine.push();

    AIMSDocumentList
        .GetABSADocumentList()
        .success(function (_result) {
            $scope.AbsadocumentsVDIMachine = _result;
        })
        .error(function (_error) {
            $log.info(_error);
        });
    AIMSDocumentList
            .GetABSAVISADocumentList()
            .success(function (_result) {
                $scope.AbsaVisaDocuments = _result;
            })
            .error(function (_error) {
                $log.info(_error);
            });
    AIMSDocumentList
            .GetABSATechnicalDocumentList()
            .success(function (_result) {
                $scope.AbsaTechnicalDocuments = _result;
            })
            .error(function (_error) {
                $log.info(_error);
            });


    $log.info($scope.AbsadocumentsVDIMachine);

    $scope.NavigateToDownLoad = function (url) {
        $window.open(url, '_blank');
    };
    $scope.NavigateToUrl = function (url) {
        $window.open(url, '_blank');
    };
    $scope.ClickOnLetsExploreButton = function () {
        $('#WelcomeText').hide();
        $('#HomeScreen').show();
    };
    $scope.ClickOnHome = function () {
        $('#WelcomeText').show();
        $('#HomeScreen').hide();
    }

    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'AIMSProjectFilesInstructions.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };


    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }


});