import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.scss';
import './index.scss';
import Reducers from './redux/reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from '@/router/history';
import BrowserRouter from '@/router/browser-router';

if (process.env.REACT_APP_ENV === 'mock') {
  require('./mock');
}

const store = createStore(
  Reducers
);

let root: ReactDOM.Root | null;

function render(props: { container?: Element }) {
  const { container } = props;
  const dom: any = container ? container.querySelector('#root') : document.getElementById('root');

  root = ReactDOM.createRoot(dom);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter
          history={history}
          basename="/sub-react"
        >
          <App/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

// 子应用独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

// 导出微应用相关生命周期
export async function bootstrap() {

}

export async function mount(props: { container: Element }) {
  render(props);
}

export async function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
