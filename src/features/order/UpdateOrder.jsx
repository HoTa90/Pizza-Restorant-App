import { useFetcher } from "react-router";
import Button from "../../ui/Button.jsx";

function UpdateOrder() {
  const fetcher = useFetcher();

  const isLoading =
    fetcher.state === "submitting" || fetcher.state === "loading";

  return (
    <fetcher.Form method="POST" className="text-right">
      <Button type={"primary"}>
        {isLoading ? "Updating your order..." : "Make Priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
