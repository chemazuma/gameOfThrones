import "./Gallery.css";



const Gallery = ({ characters }) => {
  return (
    <div className='gallery'>
      {characters.map(character => (
        <div className='char-container' key={character.id}>
          <img className="img" src={"http://localhost:3000"+character.image} alt={character.name} />
        </div>
      ))}
      </div>
  );
};

export default Gallery;