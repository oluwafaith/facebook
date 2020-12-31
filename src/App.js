import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import './App.css'
function App() {
  return (
    <div className="App">
      <Header /> 
      <div className="app_body">
       <Sidebar />
       <Feed />
            {/* feed */}
      {/* widgets */}
      </div>
    </div>
  );
}

export default App;
