import Head from "next/head";
import Products from "@/components/product";
import Cart from "@/components/cart";
import { Box } from "@chakra-ui/layout";
import product from "../../data/shoes.json";
import { useEffect, useState } from "react";

export default function Home() {
  const shoes = product.shoes;
  const [cart, setCart] = useState([]);
  const [addedShoes, setAddedShoes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cartItems") == undefined) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCart(cartItems);
    let oldCart: any[] = [];
    cartItems.forEach((item: any) => {
      oldCart.push(item.id);
      setTotalPrice(current => current + item.price*item.quantity);
    });
    setAddedShoes(oldCart);
  }, []);

  const onAddToCart = (product: any) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setAddedShoes((current) => [...current, product.id]);
    setTotalPrice(current => current + product.price);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const onDeleteItems = (deletedItem) => {
    setCart((current) => current.filter((item) => item.id != deletedItem.id));
    setAddedShoes((current) => current.filter((id) => id != deletedItem.id));
    const newCart = cart.filter((item) => item.id != deletedItem.id);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
    setTotalPrice(current => current - deletedItem.quantity*deletedItem.price);
  };

  const onPlus = (item: any) => {
    setTotalPrice(current => current + item.price);
    cart.forEach((product) => {
      if (product.id == item.id) {
        product.quantity = product.quantity + 1 ; 
      }
    })
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const onMinus = (item: any) => {
    setTotalPrice(current => current - item.price);
    cart.forEach((product) => {
      if (product.id == item.id) {
        product.quantity = product.quantity - 1 ; 
      }
    })
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

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
          <Products
            shoes={shoes}
            addedShoes={addedShoes}
            onAddToCart={onAddToCart}
          />
          <Cart
            cart={cart}
            onDeleteItems={onDeleteItems}
            onPlus={onPlus}
            onMinus={onMinus}
            totalPrice={totalPrice}
          />
        </Box>
      </main>
    </>
  );
}
