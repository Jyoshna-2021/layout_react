import './App.css';
import Header from './Component/Header';
import Navigation from './Component/Navigation';
import SideBar from './Component/SideBar';
import Content from './Component/Content';
import Footer from './Component/Footer';
function App() {
  return (
   <div className="container">
     <Header />
     <Navigation />
     <SideBar/>
     <Content/>
     <Footer/>
   </div>
  );
}
export default App;