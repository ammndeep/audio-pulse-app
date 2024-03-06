import EmptyCartImg from "../../assets/EmptyCart.png";
export default function CartEmpty() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl text-bold mt-20">Cart is Empty :-)</h1>
        <img src={EmptyCartImg} alt="Empty-cart" height={350} width={350} />
      </div>
    </>
  );
}
