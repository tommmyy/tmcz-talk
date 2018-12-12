import { Provider, connect } from 'react-redux';

<Provider store={store}>
	<MyApp />
</Provider>;

const MyContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyCompoennt);
