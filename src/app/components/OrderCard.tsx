// src/app/components/OrderCard.tsx
interface OrderProps {
    orderId: string
    deliveryAddress: string
    status: string
  }
  
  const OrderCard = ({ orderId, deliveryAddress, status }: OrderProps) => {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3>Order ID: {orderId}</h3>
        <p>Delivery Address: {deliveryAddress}</p>
        <p>Status: {status}</p>
      </div>
    )
  }
  
  export default OrderCard
  