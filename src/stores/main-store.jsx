import Api     from '../utils/api';
import Reflux  from 'reflux';
import Actions from '../actions';

module.exports = Reflux.createStore({
    listenables:[Actions],

    getAllData() {
        const data = Api.getAllDataViaRest();
        if (data) {

            console.log("Received data");
            console.log(JSON.stringify(data));
            this.data = data;
            this.triggerChange();
        }
    },

    refreshAllData(){
        if(this.data){
            this.triggerChange();
        }
    },

    triggerChange(){
         this.trigger('change',this.data);
    }

});
