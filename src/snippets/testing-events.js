const wrapper = shallow(<App />);

const button = wrapper.find('Button');
const text = wrapper.find('.text');

expect(text.text()).toBe('');
button.simulate('click');
expect(text.text()).toBe('Clicked!');
