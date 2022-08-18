import React, { useEffect, useState } from "react";

function Card({ state, dispatch }) {
  const { card } = state;
  const [total, setTotal] = useState(0);
  const changeQuantity = (id, quantity) => {
    dispatch({
      type: "CHANGE_CARD_QUANTITY",
      payload: {
        id,
        quantity,
      },
    });
  };
  useEffect(() => {
    setTotal(
      card.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    );
  }, [card]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <b
        style={{
          fontSize: 30,
          alignSelf: "center",
        }}
      >
        Card
      </b>
      <b
        style={{
          alignSelf: "center",
        }}
      >
        Subtotal: $ {total}
      </b>
      {card.length > 0 ? (
        card.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: 70,
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span> {item.title} </span>
                  <b>$ {item.price} </b>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <button
                  onClick={() => changeQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity} </span>
                <button
                  onClick={() => changeQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <span
          style={{
            padding: 20,
            alignSelf: "center",
          }}
        >
          Card is empty
        </span>
      )}
    </div>
  );
}

export default Card;
