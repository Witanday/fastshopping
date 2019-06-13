const INITIAL_STATE={
    count :1
}


export default (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'QUANTITY':
        return {
            count:state.count +1
        };

        
        default : 
        return state
    }


}
