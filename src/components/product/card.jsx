const Card = (props) => {
    const { product } = props;
  
    return (
      <div className=" col-3">
        <div className="card col-3 col-offset-2 my-2 bg-light" id="card">
          <img src={product.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              laudantium enim error consequuntur optio officia.
            </p>
            <h6>{product.price}</h6>
            <button id="btn" class="btn btn-outline-warning">
              More details
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Card