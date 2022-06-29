import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
// EnzymeAdapter
import ButtonWithText from './';
Enzyme.configure({ adapter: new Adapter() });
describe('Testing Button component', () => {
  const onClick = jest.fn();
  const shallowMount = (props = {}) =>
    shallow(<ButtonWithText text='Test' onClick={onClick} />);
  it('Testing the render', () => {
    const wrapper = shallowMount();
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe('Test');
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
