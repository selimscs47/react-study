
import Navbar from "./Navbar";
import Anasayfa from "./Home";

function App() {







  //   const baslik ="AOS Blog"
//   let okunmaSayisi=300;
  
// const blog={ad:"ilk",aciklama:"ilk açıklama"} 
// const link= "www.google.com"
  
return (
  <div className="App">
<Navbar/>
<div className="content">
  <Anasayfa></Anasayfa>
</div>
  </div>







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
