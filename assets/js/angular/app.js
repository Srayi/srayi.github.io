var app = angular.module('mainmod1', []);
app.controller("HomeCtrl", function(){
		this.name ="Malala";
		this.date= "Jan2017";
		
		this.my_var = {
			name: 'Sai',
			publish: true
		}
		this.my_var2 = {
			name: 'Rayi',
			publish: false
		}
});
app.controller("HideCtrl",function(){
	this.publish=false
	this.contents=[ {
		name: 'name1',
		author: 'auth1',
		created: '2015',
		text:" qqqqqqyyyyyyyyyyyyyyyyyyyyyyre \n fkheriwth \n ehfwiowerqjhtgkre"
	},{
		name: 'name2',
		author: 'auth2',
		created: '2016',
		text:" oooooooooooooooooooooooooooooooe \n fkheriwth \n ehfwiowerqjhtgkre"

	}
	];
	this.list=[
	'item1',
	'item2',
	'item3',
	]
});
