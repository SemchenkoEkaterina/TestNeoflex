import { observer } from 'mobx-react-lite';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppStyles = {
  background: "#EAEAEA",
  minHeight: "100vh",
  position: "relative",
  paddingBottom: "149px",
};

function App() {
  return (
    <div style={AppStyles}>
      <AppRouter/>
    </div>
  );
}

export default observer(App);
