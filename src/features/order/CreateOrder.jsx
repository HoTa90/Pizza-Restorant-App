import { Form, useActionData, useNavigation } from "react-router";
import Button from "../../ui/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalPizzaPrice } from "../cart/cartSlice.js";
import EmptyCart from "../cart/EmptyCart.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice.js";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const formErrors = useActionData();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";
  const isSubmitting = navigation.state === "submitting";
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalPizzaPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const total = totalCartPrice + priorityPrice;
  console.log(user);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 ml-1 text-xs font-bold text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input w-full"
            />
            {addressStatus === "error" && (
              <p className="mt-2 ml-1 text-xs font-bold text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          {address === "" && (
            <span className="absolute right-[3px] top-[3px] z-10 md:right-[5px] md:top-[5px]">
              <Button
                type={"small"}
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get address
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex gap-5">
          <input
            className="h-6 w-6 accent-indigo-400 focus:ring focus:ring-indigo-400 focus:ring-offset-1 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? "Placing Order"
              : `Order now for ${formatCurrency(total)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
