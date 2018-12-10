import { lazy } from 'react';

const CustomersChat = lazy(() => import('widget-customers-chat'));

const App = () => {
	useUnion();

	return <CustomersChat />;
};

const CustomerChat = () => {
	const { initialData, ref } = useDefineWidget('customers-chat', null);

	return <div ref={ref} />;
};
