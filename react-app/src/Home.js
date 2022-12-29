
import BlogList from "./BlogList";
import useFetch  from "./useFetch";

const Home = () => {

  const{veri:blogs,yukleniyor,hata}=useFetch(' http://localhost:8000/yazilar')


  // köşeli parantez içi boşken sadece sayfa yenilenince çalışacak blogs yazarsak değişiklikte de çalışacak


  
  
  return (
    <div className="home">
      {hata && <div className="error">{hata}</div>}
      {yukleniyor && <div className="loading">Yükleniyor</div> }
      {blogs && <BlogList  blogs={blogs} baslik="Bütün Yazılar" />
      }
    </div>
  );
};

export default Home;
