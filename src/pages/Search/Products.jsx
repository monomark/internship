import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const BEST = [
  { name: "first", price: 3700, type: "Wood" },
  { name: "second", price: 50000, type: "Metal" },
  { name: "third", price: 1000, type: "Other" },
  { name: "forth", price: 15000, type: "Plastic" },
  { name: "fifth", price: 15000, type: "Plastic" },
];

const Products = ({ search, type, price }) => {
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    let range = 0
    const object = {
      price: [],
      type: []
    }

    if (type) {
      BEST.filter(item => item.type.toLowerCase() === type).map(item => object.type.push(item))
    }
    if (price) {
      if (price === 'low') {
        range = 5000
      } else if (price === 'medium') {
        range = 20000
      } else if (price === 'free') {
        range = 0
      }
      BEST.filter(item => item.price < range).map(item => object.price.push(item))
    }

    function arrayUnique(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }
  
      return a;
  }
    const array = arrayUnique([...object.price, ...object.type])
    
    // object.price.length > 0 ? setFiltered(newArray) : setFiltered(BEST)
    array.length > 0 ? setFiltered([...array]) : setFiltered(BEST)
  }, [type, price])
  console.log(filtered)
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
