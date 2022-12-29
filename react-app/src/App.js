
import Navbar from "./Navbar";
import Anasayfa from "./Home";
import {BrowserRouter as Router,Route, Switch,} from 'react-router-dom'
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {

//  exact diyince sadece / olan sayfa geliyor

  
return (
<Router>
  <div className="App">
  <Navbar/>
<div className="content">
    <Switch>
      <Route  exact path="/">
    <Anasayfa />
  </Route>
  <Route path="/create">
    <Create />
  </Route>
  <Route path="/blogs/:id">
    <BlogDetails />
  </Route>
</Switch>
</div>
  </div>


</Router>






  //     <div className="App">
//       <div className='content'>
// <h1>{baslik}</h1>
// <p>Okunma Sayısı {okunmaSayisi}</p>
// <p>Blog Ad: {blog.aciklama}</p>
/* <a href="{link}">Google</a> */
      // </div>
    
      // </div>
  );
}

export default App;
