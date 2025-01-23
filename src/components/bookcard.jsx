import React from "react";
const BookCard=({image,name,genre,author})=>{
    return(
        <div style={styles.card}>
            <img src={image} style={styles.image}/>
            <h3 style={styles.title}>{name}</h3>
            <p><strong>Genre:</strong>{genre}</p>
            <p><strong>Author:</strong>{author}</p>
        </div>
    )
}
const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      maxWidth: '200px',
      margin: '10px',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '4px',
    },
    title: {
      margin: '8px 0',
      fontSize: '1.2rem',
    },
  };
export default BookCard