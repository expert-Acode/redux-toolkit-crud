import react,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter ,Route,Routes,Link} from 'react-router-dom'
import "./App.css";
import TutorialsList from "./components/tutorial-list.component"
import AddTutorialComponent from './components/add-tutorial.component';
import Tutorial from './components/tutorial.component'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            welStart
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
          <Route  path="/"  element={<TutorialsList/>} />
          <Route  path="/tutorials"  element={<TutorialsList/>} />
            <Route  path="/add" element={<AddTutorialComponent/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
          </div>
      </BrowserRouter>
    )
  }
}
export default App