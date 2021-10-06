import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const BEST = [
  { name: "first", price: 3700, type: "Wood" },
  { name: "second", price: 50000, type: "Metal" },
  { name: "third", price: 1000, type: "Other" },
  { name: "forth", price: 15000, type: "Plastic" },
  { name: "fifth", price: 15000, type: "Plastic" },
]

const Products = ({ search, type, price }) => {
  const [filtered, setFiltered] = useState([])
  const [filters, setFilters] = useState({
    type: '',
    price: ''
  })

  useEffect(() => {
    setFiltered(type ? BEST.filter(item => item.type.toLocaleLowerCase() === type) : BEST)
  }, [type, price])

  return (
    <SimpleGrid
      w="full"
      columns={{
        base: 1,
        md: 2,
        xl: 3,
      }}
      spacing="6"
    >
      {filtered.filter(item => item.name.includes(search)).map((item) => (
        <GridItem key={item.name}>
          <Card value={item} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default Products;
