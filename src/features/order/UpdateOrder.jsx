import { useFetcher } from "react-router";
import Button from "../../ui/Button.jsx";
import { updateOrder } from "../../services/apiRestaurant.js";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="POST" className="text-right">
      <Button type={"primary"}>Make Priority</Button>
    </fetcher.Form>
  );
}


export default UpdateOrder;