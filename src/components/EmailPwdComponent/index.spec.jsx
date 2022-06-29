import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
// EnzymeAdapter
import EmailPwdContainer from './';
Enzyme.configure({ adapter: new Adapter() });
describe('Testing EmailPwdContainer component', () => {
  const onEmailChange = jest.fn();
  const onPwdChange = jest.fn();
  const shallowMount = (props = {}) =>
    shallow(
      <EmailPwdContainer
        imageFooter={'Sign in to PayU'}
        emailLabel={'Username or email address'}
        onEmailChange={(evt) => {
          console.log('evt', evt);
          onEmailChange(evt.target.value);
        }}
        pwdLabel={'Password'}
        onPwdChange={(evt) => {
          onPwdChange(evt.target.value);
        }}
        error={'firebase error'}
      />
    );
  it('Testing the render', () => {
    const wrapper = shallowMount();
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('label').at(0).text()).toBe(
      'Username or email address'
    );
    expect(wrapper.find('label').at(1).text()).toBe('Password');
  });
  it('Testing the onchange events', () => {
    const wrapper = shallowMount();
    const event = { target: { name: 'input', value: 'value' } };
    const input1 = wrapper.find('input').at(0);
    input1.simulate('change', event);
    expect(onEmailChange).toHaveBeenCalledTimes(1);
    const input2 = wrapper.find('input').at(1);
    input2.simulate('change', event);
    expect(onPwdChange).toHaveBeenCalledTimes(1);
  });
});
