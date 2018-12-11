expect(wrapper.find('p').exists()).toBe(true);
expect(wrapper.find('p').text()).toEqual('Hello world');
expect(wrapper.find('.App').exists()).toBe(true);
expect(wrapper.find('ul').children().length).toBe(2);
expect(wrapper.find('section').hasClass('Section')).toBe(true);
