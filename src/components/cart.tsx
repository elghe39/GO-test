import { Box } from "@chakra-ui/layout";
import { Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function Cart(props: any) {
  const { cart, onDeleteItems, onPlus, onMinus, totalPrice } = props;
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
      <Flex
        justifyContent={"space-between"}
        fontSize={"24px"}
        fontWeight={700}
        my={"12px"}
        color={"#303841"}
        position={"relative"}
      >
        <Text>Your Cart</Text>
        <Text>${totalPrice.toFixed(2)}</Text>
      </Flex>
      <Box
        position={"relative"}
        h={"100%"}
        overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {cart.length == 0 ? (
          <Text fontSize={"14px"} my={"14px"} color={"#303841"}>
            Your cart is empty.
          </Text>
        ) : (
          cart.map((item: any) => (
            // eslint-disable-next-line react/jsx-key
            <Item
              item={item}
              onDeleteItems={onDeleteItems}
              onPlus={onPlus}
              onMinus={onMinus}
            ></Item>
          ))
        )}
        <Box h={"130px"}></Box>
      </Box>
    </Box>
  );
}

function Item(props: any) {
  const { item, onDeleteItems, onPlus, onMinus } = props;

  const [quantity, setQuantity] = useState(item.quantity);

  const handleDeleteItem = () => {
    onDeleteItems(item);
  };

  const handlePlusQuantity = () => {
    setQuantity((current) => current + 1);
    onPlus(item);
  };

  const handleMinusQuantity = () => {
    if (quantity == 1) {
      onDeleteItems(item);
    } else {
      setQuantity((current) => current - 1);
      onMinus(item);
    }
  };

  return (
    <Flex py={"20px"}>
      <Box
        w={"90px"}
        h={"90px"}
        borderRadius={"100%"}
        mr={"34px"}
        bgColor={item.color}
      >
        <Image
          alt={"Product image"}
          src={item.image}
          transform={"rotate(-28deg) translateY(-10px)"}
          filter={"drop-shadow(0 30px 20px rgba(0,0,0,.2))"}
        ></Image>
      </Box>

      <Box w={"180px"}>
        <Text
          color={"#303841"}
          fontSize={"14px"}
          fontWeight={700}
          lineHeight={1.5}
          mb={"10px"}
        >
          {item.name}
        </Text>
        <Text
          color={"#303841"}
          fontSize={"20px"}
          fontWeight={700}
          lineHeight={1.5}
          mb={"16px"}
        >
          ${item.price.toFixed(2)}
        </Text>
        <Flex justifyContent={"space-between"} h={"28px"}>
          <Flex>
            <Box
              display={"flex"}
              w={"28px"}
              h={"28px"}
              bgColor={"#eee"}
              borderRadius={"100%"}
              _hover={{ bgColor: "gray.300" }}
              onClick={handleMinusQuantity}
            >
              <Image
                src={"minus.png"}
                alt=""
                boxSize={"10px"}
                m={"auto"}
              ></Image>
            </Box>
            <Text
              w={"20px"}
              mx={"8px"}
              fontSize={"14px"}
              color={"#303841"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {quantity}
            </Text>
            <Box
              display={"flex"}
              w={"28px"}
              h={"28px"}
              bgColor={"#eee"}
              borderRadius={"100%"}
              _hover={{ bgColor: "gray.300" }}
              onClick={handlePlusQuantity}
            >
              <Image
                src={"plus.png"}
                alt=""
                boxSize={"10px"}
                m={"auto"}
              ></Image>
            </Box>
          </Flex>
          <Box
            display={"flex"}
            w={"28px"}
            h={"28px"}
            bgColor={"#f6c90e"}
            borderRadius={"100%"}
            _hover={{ bgColor: "yellow.400", boxShadow: "lg" }}
            onClick={handleDeleteItem}
          >
            <Image src={"trash.png"} alt="" boxSize={"16px"} m={"auto"}></Image>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
