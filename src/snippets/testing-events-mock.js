const wrapper = shallow(<App />);

const input = wrapper.find('input');
const text = wrapper.find('.text');

expect(text.text()).toBe('');
button.simulate('change', { target: { value: 'Darth Vader' } });
expect(text.text()).toBe('Darth Vader');
