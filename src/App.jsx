import styles from './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
