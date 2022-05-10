function DogsImage(props) {
    const [image, setImage] = useState([]);
    props.handler(()=>breedSelect(breed)) 
          .then((res) => res.json())
          .then((res) => setDogs(res.message));

          function breedSelect() {
            const breed = select.value;
            const img = null;
            fetch(`https://dog.ceo/api/breed/
          ${breed}
          /images/random`)
              .then((res) => res.json())
              .then((dogImg) => {
                img.src = dogImg.message;
              });
          }
    return (
        
        <img src={img} ></img>
    );
}

export default DogsImage;

// {i+1}. {name}