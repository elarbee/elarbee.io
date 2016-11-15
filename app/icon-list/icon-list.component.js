angular.
  module('iconList').
  component('iconList', {
	  templateUrl: 'icon-list/icon-list.template.html',
	      controller: ['Icon',
			    function IconListController(Icon) {
					    this.icons = Icon.query();
					    this.orderProp = 'name';
					  }
			  ]
	    });
