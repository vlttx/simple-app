const ToDos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat(action.item);
		case 'DELETE_TODO':
			return state.filter(item => (item.id === action.id ? false : true));
		case 'COMPLETE_TODO':
			return state.map(item =>
				item.id === action.item.id ? action.item : item
			);
		default:
			return state;
	}
};

export default ToDos;
