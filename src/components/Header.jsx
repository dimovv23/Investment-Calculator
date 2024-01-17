import moneyImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={moneyImage}
        alt="Green money bang with stacks of coins beside"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
