// src/app/components/OrderList.tsx
import OrderCard from './OrderCard'

const OrderList = ({ orders }: { orders: Array<any> }) => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          orderId={order.id}
          deliveryAddress={order.deliveryAddress}
          status={order.status}
        />
      ))}
    </div>
  )
}

export default OrderList
