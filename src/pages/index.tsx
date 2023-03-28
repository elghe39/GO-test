import Head from "next/head";
import Products from "@/components/product";
import Cart from "@/components/cart";
import { Box } from "@chakra-ui/layout";
import product from "../../data/shoes.json";
import cartItems from "../../data/cart.json";
import { useState } from "react";


export default function Home() {
  const [shoes, setShoes] = useState(product.shoes);
  const [cart, setCart] = useState(cartItems.cartItems);

  const onAddToCart = (product: any) => {
    setCart(current => [...current, product]);
  }

  return (
    <>
      <Head>
        <title>Golden Sneaker</title>
      </Head>
      <main>
        <Box
          className={"bg"}
          justifySelf={"center"}
          maxW={"800px"}
          mx={"auto"}
          px={"20px"}
          display={{ md: "flex" }}
          position={"relative"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          height={"100vh"}
        >
          <Products shoes={shoes} onAddToCart={onAddToCart}/>
          <Cart cart={cart}/>
        </Box>
      </main>
    </>
  );
}
