import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
 onSelectOrder: (order: string) => void;
 selectedOrder: string;
}

const SortSelector = ({onSelectOrder, selectedOrder}: Props) => {
  const { data, error } = usePlatforms();
  const sortOrders =[
    {value: "", label:"Relevance"},
    {value: "-added", label:"Date added"},
    {value: "name", label:"Name"},
    {value: "-released", label:"Release date"},
    {value: "-metacritic", label:"Popularity"},
    {value: "-rating", label:"Average rating"},
  ];

  const currentOrder = sortOrders.find(sortOrder => sortOrder.value === selectedOrder);

  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${currentOrder?.label || "Relevance"}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
            <MenuItem onClick={() => onSelectOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
