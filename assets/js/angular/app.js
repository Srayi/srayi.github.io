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
			publish: true
		}
});
app.controller("HideCtrl",function(){
    this.blogtitle="234";
    this.password= "";
    this.blogtext= "";
    this.publish=true;
    /*this.title="";
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
	]*/

    this.content=[];
    this.submit_clicked = function(){
        var temp={};
        temp.name=this.blogtitle;
        temp.author=this.password;
        temp.created=this.blogtext;
        temp.publish = this.publish;
        // temp.password=this.password;
        // temp.text=this.blogtext;
        this.content.push(temp);
      
    } 

});
