import React from "react"
const noop=()=> {};
function Label(props)  {
  const {selected='',child:item,onSelectItem=noop}=props;
  return(
    <label data-selected = {selected=item} onClick={onSelectItem}>
    {item}
    </label>
  );
}
export default Label();