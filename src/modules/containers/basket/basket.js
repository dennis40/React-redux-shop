import React from 'react';
import { connect } from 'react-redux';
import { getTotalBasketPrice, getBasketWithCount } from '../../selectors';
import { isEmpty, not } from 'ramda';
import {
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
} from '../../actions';
import { Link } from 'react-router-dom';

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
}) => {
  const isBasketEmpty = isEmpty(phones);
  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shopping cart is empty</div>}
      {not(isBasketEmpty) && (
        <>
          <div className="table-responsive">
            <table className="table-bordered table-striped table-condensed cf">
              <tbody>
                {phones.map((phone, index) => (
                  <tr key={index} className="item-checout">
                    <td className="first-column-checkout">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>{phone.name}</td>
                    <td>{phone.price}</td>
                    <td>{phone.count}</td>
                    <td>
                      <span
                        onClick={() => removePhoneFromBasket(phone.id)}
                        className="delete-cart"
                      ></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total:</b> ${totalPrice}
            </div>
          </div>
        </>
      )}
    </div>
  );
  const renderSidebar = () => (
    <div>
      <Link to={'/'} className="btn btn-info">
        <span className="glyphicon glyphicon-info0sign"></span>
        <span>Continue shopping!</span>
      </Link>
      {not(isBasketEmpty) && (
        <div>
          <button onClick={cleanBasket} className="btn btn-danger">
            <span className="glyphicon glyphicon-trash">Clean cart</span>
          </button>
          <button
            onClick={() => basketCheckout(phones)}
            className="btn success"
          >
            <span className="glyphicon envelope">Checkout</span>
          </button>
        </div>
      )}
    </div>
  );
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: getBasketWithCount(state),
    totalPrice: getTotalBasketPrice(state),
  };
};

const mapDispatchToProps = {
  removePhoneFromBasket,
  cleanBasket,
  basketCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
