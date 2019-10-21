const INITIAL_STATE = {
	items: [],
	text: '',
	completed: false
};


export default (state=INITIAL_STATE, action){
	switch(action.type){
		case 'ADD_TODO':
			return {
				...state, items: state.items.concat(action.item)
			};
			case 'COMPLETE_TODO':
				return {
					...state, completed:true
				};
				case 'DELETE_TODO':
					return{
						...state, items: state.filter(item =>
				item.id === action.itemId ? false : true)
					};
				default:
					return state;

	}
}