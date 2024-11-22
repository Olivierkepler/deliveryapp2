// src/app/components/OrderTracking.tsx
const OrderTracking = ({ orderId }: { orderId: string }) => {
    // You can integrate real-time updates via WebSocket or other methods
    return (
      <div>
        <h3>Tracking Order {orderId}</h3>
        <p>Real-time updates will appear here.</p>
        {/* Add map or status updates here */}
      </div>
    )
  }
  
  export default OrderTracking
  