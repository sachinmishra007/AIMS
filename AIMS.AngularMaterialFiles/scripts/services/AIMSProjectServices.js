
"use strict";
angular.module("AIMS.Services", [])
.service("AIMSDocumentList", function ($http) {
    this.GetABSADocumentList = function () {
        return $http({
            datatype: 'JSON',
            method: 'GET',
            cache:false,
            url: 'AIMS.AngularMaterialFiles/scripts/jsondata/ABSAVDIList.json'
        });
    };

    this.GetABSAVISADocumentList = function () {
        return $http({
            datatype: 'JSON',
            method: 'GET',
            cache: false,
            url: 'AIMS.AngularMaterialFiles/scripts/jsondata/ABSAVISA.json'
        });
    };

    this.GetABSATechnicalDocumentList = function () {
        return $http({
            datatype: 'JSON',
            method: 'GET',
            cache: false,
            url: 'AIMS.AngularMaterialFiles/scripts/jsondata/ABSATechnical.json'
        });
    };


});

