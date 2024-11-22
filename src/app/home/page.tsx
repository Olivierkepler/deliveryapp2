import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Delivery App</h1>
      <p>Your go-to app for fast and reliable deliveries.</p>
    </div>
  );
}
