import React from "react";
import Font from "~/components/Font";

export default function Header({ title }: { title: string }) {
  return (
    <>
      <Font
        block={true}
        size="xSmall"
        uppercase={true}
        weight="xBold"
        color="gray-600"
        mb="small"
        mt="medium"
      >
        {title}
      </Font>
    </>
  );
}
