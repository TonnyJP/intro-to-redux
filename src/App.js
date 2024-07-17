import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth'
import { useDispatch, useSelector } from "react-redux"


function App() {
  const isAuthentificated = useSelector(state => state.auth.isAuthentificated)
  //const dispatch = useDispatch();
  return (<>
    <Header />
    {isAuthentificated ? <UserProfile /> : <Auth />}
    <Counter /></>
  );
}

export default App;
