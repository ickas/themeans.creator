"use client";

import ButtonLink from "../ui/ButtonLink";
import { useAnalytics } from "@/config/analytics";

export default function ButtonLinkOS() {
  const { pushEvent } = useAnalytics();

  return (
    <ButtonLink
      value="View on OpenSea"
      url="https://opensea.io/collection/themeanswhatdoyoumean"
      target="_blank"
      onClick={() => pushEvent("visit_os")}
      xl
      blue
    />
  );
}
