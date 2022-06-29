import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
// EnzymeAdapter
import RegisterForm from './';
Enzyme.configure({ adapter: new Adapter() });
describe('Testing Login component', () => {
  const shallowMount = (props = {}) =>
    shallow(
      <BrowserRouter>
        <RegisterForm />
      </BrowserRouter>
    );
  it('Testing the login form', () => {
    const wrapper = shallowMount();
    expect(wrapper.length).toBe(1);
  });
});
