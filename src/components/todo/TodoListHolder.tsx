import React from "react";

export default function TodoListHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-100 px-8 py-16 rounded-lg">{children}</div>;
}
