
/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module DocDispatchUi{

    
    export class SearchController{
        $inject =["DispatchService"];
        private dispatchClients : DispatchClient[]
        constructor(private dispatchService: IDispatchService){
        }


 submit(address: string) {
	this.dispatchService.check(address).then((result : ng.IHttpPromiseCallbackArg<{}>) =>{
	//this.dispatchClients = result.data;
	})
	.catch((reason : any) => {
		alert(reason.Message || reason.message);	
	});
}
}


    angular
    .module("DocDispatchUi")
    .controller("SearchController",SearchController);

}