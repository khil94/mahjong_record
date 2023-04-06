import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";
import { assertIsNode } from "../utils/global_functions";

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GNB({ children }: GlobalLayoutProps) {
  const [showMenu, setShowMenu] = useState(false);
  const sideRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const outClickHandler = ({ target }: MouseEvent) => {
    assertIsNode(target);
    if (!sideRef.current?.contains(target)) {
      setShowMenu(false);
      console.log("hi");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outClickHandler);
  });

  return (
    <div>
      <div ref={sideRef}>{children}</div>
    </div>
  );
}
