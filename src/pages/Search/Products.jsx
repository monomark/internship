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
  const [filters, setFilters] = useState({
    name: '',
    type: ''
  })

  useEffect(() => {
    setFilters({ name: search, type })
  }, [type, search])

  const filtered = (item) => {
    let bool = true
    Object.keys(filters).map(key => {
      if (bool && key === 'name') {
        bool = item[key].includes(filters[key])
      }
      if (bool && key === 'type') {
        bool = item[key]?.toLowerCase() === filters[key]
      }
    })
    return bool
  }

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
      {BEST.filter(item => filtered(item) === true).map((item) => (
        <GridItem key={item.name}>
          <Card value={item} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default Products;
