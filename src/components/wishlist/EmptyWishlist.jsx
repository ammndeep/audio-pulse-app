import EmptyImg from "../../assets/empty-wishlist.png";
export default function EmptyWishlist() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <img
        src={EmptyImg}
        alt="Empty-cart"
        height={500}
        width={500}
        className="absolute top-24"
      />
    </div>
  );
}
