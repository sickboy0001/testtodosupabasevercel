import React from "react";

type Props = {
  Title: string;
  Description: string;
};
function SubTitle(props: Props) {
  const { Title, Description } = props;
  return <div className="flex ">{Title}</div>;
}

export default SubTitle;
