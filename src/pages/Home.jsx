import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.heading}>Delicious Food, Delivered Fast</h1>
          <p style={styles.subText}>
            Order your favorite meals from the best restaurants near you.
          </p>

          <div style={styles.buttonGroup}>
            <Link to="/foodlist">
              <button style={styles.primaryButton}>Explore Foods</button>
            </Link>

            <Link to="/login">
              <button style={styles.secondaryButton}>Login</button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://www.bitesbee.com/wp-content/uploads/2025/04/LIST-OF-FAST-FOOD-ITEMS-1.jpg"
            alt="food"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h3>⚡ Fast Delivery</h3>
          <p>Get your food delivered within 30 minutes.</p>
        </div>

        <div style={styles.featureCard}>
          <h3>🍔 Best Restaurants</h3>
          <p>Top-rated restaurants curated for quality and taste.</p>
        </div>

        <div style={styles.featureCard}>
          <h3>💳 Secure Payments</h3>
          <p>Multiple payment methods with secure checkout.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
  heroText: {
    maxWidth: "500px",
  },
  heading: {
    fontSize: "42px",
    marginBottom: "20px",
  },
  subText: {
    fontSize: "18px",
    marginBottom: "25px",
    color: "#555",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
  },
  primaryButton: {
    padding: "12px 25px",
    fontSize: "16px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "12px 25px",
    fontSize: "16px",
    background: "white",
    color: "#ff4d4d",
    border: "2px solid #ff4d4d",
    borderRadius: "8px",
    cursor: "pointer",
  },
  heroImage: {
    borderRadius: "15px",
    width: "100%",
    maxWidth: "500px",
  },
  features: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  featureCard: {
    flex: "1",
    minWidth: "250px",
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
};

export default Home;