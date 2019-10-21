export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat(action.item);
		case 'DELETE_TODO':
			return state.filter(item => (item.id === action.itemId ? false : true));
		default:
			return state;
	}
};
