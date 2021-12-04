import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  
  type OrderSummaryItemProps = {
    label: string
    value?: number
    children?: React.ReactNode
  }
  
  const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrder = () => {
    return (
      <Stack spacing="8" borderWidth="2px" rounded="lg" padding="10" width="full" bg="gray.900">
        <Heading size="md">Encomenda</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={597} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {597}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="cyan" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Comprar
        </Button>
      </Stack>
    )
  }