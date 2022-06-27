import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import PageNotFound from './components/PageNotFound';
import PageWrapper from './hoc/PageWrapper';

function App() {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </PageWrapper>
  );
}

export default App;
