import Component from '@ember/component';
import EmberArray from '@ember/array';

export default Component.extend({

 bookcategories: [],
 actions: {
    changeCheck(model) {	
    	    let x = this.checkArray(model.srcElement.value);
    	    console.log("chala");
    	    if(x)
    	    {
    	    	this.bookcategories.pushObject(model.srcElement.value);
    	    }
    	    else
    	    {
    	    	this.bookcategories.removeObject(model.srcElement.value);
    	    }
    	  x = this.sendAction('sendCheckedBook', this.bookcategories);
    	  console.log(x);
    	}
    },

    checkArray(value) {
  		for (var i = this.bookcategories.length - 1; i >= 0; i--) {
    	    	if(this.bookcategories[i] === value)
    	    	{
    	    		return false;
    	    	}
    	    }
    	return true;
	}
  
});
