import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    //method 1
    // const newGiftCard = {...giftCard};
    // newGiftCard.text = "Your coupon has been used";
    // newGiftCard.valid = false;
    // newGiftCard.instructions = "Please visit our restaurant to renew your gift card";
    // setGiftCard(newGiftCard);

    //method 2
    setGiftCard(prev => {
      return{
        ...prev,
        text: "Your coupon has been used",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card",
      }
    })
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
