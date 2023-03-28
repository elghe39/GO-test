import { Box } from "@chakra-ui/layout";
import { Image, Text, Flex, Button } from "@chakra-ui/react";

export default function Products(props: any) {
  const { shoes, onAddToCart } = props;

  return (
    <Box
      className={"card"}
      width={"360px"}
      height={"600px"}
      boxSizing={"border-box"}
      backgroundColor={"white"}
      borderRadius={"30px"}
      boxShadow={"base"}
      overflowY={"hidden"}
      px={"28px"}
      mb={"20px"}
      position={"relative"}
    >
      <Image
        src={"nike.png"}
        alt="logo Nike"
        w={"50px"}
        my={"12px"}
        position={"relative"}
      ></Image>
      <Text
        fontSize={"24px"}
        fontWeight={700}
        my={"14px"}
        color={"#303841"}
        mb={"-20px"}
        position={"relative"}
      >
        Our Products
      </Text>
      <Box
        mt={"30px"}
        h={"100%"}
        overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        position={"relative"}
      >
        {shoes.map((product: any) => (
          // eslint-disable-next-line react/jsx-key
          <Item product={product}></Item>
        ))}
        <Box h={"100px"}></Box>
      </Box>
    </Box>
  );
}

function Item(props: any) {
  const { product } = props;

  const handleAddToCart = (product: any) => {
    product.quantity = 1;
    console.log(product);
    // onAddToCart(product);
    return undefined;
  };

  return (
    <Box pb={"40px"}>
      <Box
        borderRadius={"30px"}
        h={"380px"}
        alignItems={"center"}
        overflow={"hidden"}
        bgColor={product.color}
      >
        <Image
          src={`${product.image}`}
          alt={"Product image"}
          transform={"rotate(-24deg)"}
          w={"100%"}
          ml={"-16px"}
          filter={"drop-shadow(0 30px 20px rgba(0,0,0,.2))"}
        ></Image>
      </Box>
      <Text
        fontSize={"20px"}
        fontWeight={700}
        m={"26px 0 20px"}
        lineHeight={1.5}
        color={"#303841"}
      >
        {product.name}
      </Text>
      <Text fontSize={"13px"} lineHeight={1.8} mb={"20px"} color={"#777"}>
        {product.description}
      </Text>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"18px"} fontWeight={700} color={"#303841"}>
          ${product.price.toFixed(2)}
        </Text>
        <Button
          fontSize={"14px"}
          bgColor={"#f6c90e"}
          color={"#303841"}
          fontWeight={700}
          boxSizing={"border-box"}
          borderRadius={"100px"}
          _hover={{
            bgColor: "yellow.400",
            boxShadow: "lg",
          }}
          // onSubmit={handleAddToCart(product)}
        >
          ADD TO CART
        </Button>
      </Flex>
    </Box>
  );
}
