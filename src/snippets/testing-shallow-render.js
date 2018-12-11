import { shallow } from 'enzyme';

const wrapper = shallow(<App />);
// Or:
const wrapper = shallow(<App />, {
	context: {},
	disableLifecycleMethods: false,
});
