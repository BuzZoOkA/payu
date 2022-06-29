import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
// EnzymeAdapter
import EmailPwdComponent from '../EmailPwdComponent';
import LoginForm from './';
Enzyme.configure({ adapter: new Adapter() });
describe('Testing Login component', () => {
  const shallowMount = (props = {}) =>
    shallow(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  it('Testing the login form', () => {
    const wrapper = shallowMount();
    expect(wrapper.length).toBe(1);
  });
});
