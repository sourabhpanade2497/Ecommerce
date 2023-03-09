import "./../Cart/Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="your-bag">Your Bag</div>
      <div className="cart-inner">
        <div className="continue-shoping-wrapper">
          <div className="continue-shoping">Continue Shoping</div>
        </div>
      </div>
      <div className="cart-child">
        <div className="please-fill-me-wrapper">
          <div className="please-fill-me">Please Fill Me</div>
        </div>
      </div>
      <div className="vector-group">
        <img className="group-child14" alt="" src="../vector-43.svg" />
        <img className="group-child15" alt="" src="../ellipse-82.svg" />
        <img className="group-child16" alt="" src="../ellipse-82.svg" />
        <img className="group-child17" alt="" src="../vector-44.svg" />
        <img className="group-child18" alt="" src="../ellipse-84.svg" />
        <img className="group-child19" alt="" src="../ellipse-84.svg" />
        <img className="group-child20" alt="" src="../ellipse-86.svg" />
        <div className="div1">{`0 `}</div>
        <div className="order">Order</div>
      </div>
      <div className="it-looks-like">
        It looks like your have not shop anything yet
      </div>
    </div>
  );
};

export default Cart;
