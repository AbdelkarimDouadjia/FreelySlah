import ShopCheckoutAreaForm from "./ShopCheckoutAreaForm.jsx";
import ShopCheckoutAreaInfo from "./ShopCheckoutAreaInfo.jsx";

export default function ShopCheckoutArea() {
  return (
    <>
      <section className="shop-checkout !pt-0 lg-b:py-[120px] py-[60px] px-0 relative">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row" data-wow-delay="300ms">
            <div className="col-md-7 col-lg-8">
              <ShopCheckoutAreaForm />
            </div>
            <div className="col-md-5 col-lg-4">
              <ShopCheckoutAreaInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
