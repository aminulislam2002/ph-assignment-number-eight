import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const { bookMark } = props;

  let time = 0;
  for (const blog of cart) {
    time = time + blog.time;
  }

  return (
    <div className="cart-container">
      <div className="show-time">
        <h4>Spent time on read : {time} min</h4>
      </div>
      <div>
        <h3 className="book-mark-length">Length: {bookMark.length}</h3>
      </div>
      <div>
        {bookMark.map((singleBooKMark) => (
          <div className="single-booK-mark-container">
            <h4>{singleBooKMark.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
