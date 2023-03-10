import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    
    const[baslik,setBaslik]=useState('');
    const[aciklama,setAciklama]=useState('');
    const[yazar,setYazar]=useState('');
    const[yukleniyor,setYukleniyor]=useState(false);
    
    const history=useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
        setYukleniyor(true);
      
      
        const yazi={ad:baslik,aciklama,yazar};



        fetch(' http://localhost:8000/yazilar/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(yazi)
        }).then(()=>{

            console.log('yazı eklendi');
            setYukleniyor(false);

            // history.go(-1);
            history.push('/');
        })

    }
    
    return (  
<div className="create">
<h2 className="create-yeni">Yeni Yazı Ekle</h2>

<form onSubmit={handleSubmit}>
    <label>Yazı Başlık:</label>
    <input type="text" required value={baslik} onChange={(e)=>setBaslik(e.target.value)} />
    <label>Yazı Açıklama:</label>
    <textarea value={aciklama} onChange={(e)=>setAciklama(e.target.value)} required>


    </textarea>
    <label>Yazar:</label>
    <select value={yazar}  onChange={(e)=>setYazar(e.target.value)}  className="create-s">
        <option value="Selim Can Sağdıç">Selim Can Sağdıç</option>
        <option value="Ahmet Palavan">Ahmet Palavan</option>
        <option value="Alişan Karadaş">Alişan Karadaş</option>
    </select>
    {!yukleniyor && <button>Ekle</button>}
    {yukleniyor && <button disabled>Yükleniyor</button>}

</form>

</div>

    );
}
 
export default Create;

