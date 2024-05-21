import React,{useState} from 'react';

function GaleriaDeImagenes() {
  const[imagenes, setImagenes]=useState([
    {src:"img/1.jpeg", alt:"Imagen 1", caption:'Pie de foto 1'},
    {src:"img/2.jpeg", alt:"Imagen 2", caption:'Pie de foto 2'},
    {src:"img/3.jpeg", alt:"Imagen 3", caption:'Pie de foto 3'},
    {src:"img/4.jpeg", alt:"Imagen 4", caption:'Pie de foto 4'}
  ]);
  const [url,setUrl]=useState('');
  const [caption, setCaption]=useState('');
  const agregarImagen=() => {
    if (url && caption){
      setImagenes([...imagenes, {src:url, alt:`Imagen ${imagenes.length +1}`, caption}]);
      setUrl('');
      setCaption('');
    }else{
      alert('introduce imagen y pie');
    }
  };
  return (
    <div>

      <h1 style={{textAlign:'center'}}>Galeria de Imagenes</h1>
      <div style={{textAlign:'center', marginBottom:'20px'}}>
        <input type='text' value={url} onChange={(e)=> setUrl(e.target.value)} placeholder='URL de la imagen'/>
        <input type='text' value={caption} onChange={(e)=> setCaption(e.target.value)} placeholder='Pie de foto'/>
        <button onClick={agregarImagen}>Agregar Imagen</button>            
      </div>
      <div className="galeria" style={{ display:'flex',gap:'10px', justifyContent:'center', margin:'0 auto'}}/>
        {imagenes.map((img,index)=>(
          <div key={index}>
            <img src={img.src} alt={img.alt} width="300px" height="250px"/>
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
        
  );

}
export default GaleriaDeImagenes;
