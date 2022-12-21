import { useState } from "react";
import BlogList from './Blog_List';

const Home = () => {
  
    const [blogs, setBlogs] = useState([
    {
      ad: "Yeni Başlayanlar için C#",
      aciklama: "lorem ipsum",
      yazar: " Selim Can Sağdıç",
      id: 1,
    },
    {
      ad: "React Öğreniyorum",
      aciklama: "lorem ipsum",
      yazar: " Ahmet Palavan",
      id: 2,
    },
    {
      ad: "İleri Seviye C#",
      aciklama: "lorem ipsum",
      yazar: " Furkan Tanrıöver",
      id: 3,
    },
    {
      ad: "MVC Öğreniyorum",
      aciklama: "lorem ipsum",
      yazar: " Alişan Karadaş",
      id: 4,
    },
  ]);

  return (
  <div className="home">
<BlogList/>

  </div>
  );
};

export default Home;
