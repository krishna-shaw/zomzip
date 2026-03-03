import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2>Welcome Back 👋</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>

      {/* Stats Section */}
      <div style={styles.statsContainer}>
        <div style={styles.card}>
          <h3>12</h3>
          <p>Orders Placed</p>
        </div>

        <div style={styles.card}>
          <h3>3</h3>
          <p>Active Deliveries</p>
        </div>

        <div style={styles.card}>
          <h3>₹ 2,450</h3>
          <p>Total Spent</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.actions}>
        

        <button style={styles.secondaryButton}>
          View Orders
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    minHeight: "100vh",
    background: "#f9f9f9",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  logoutButton: {
    padding: "8px 16px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    minWidth: "200px",
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },
  actions: {
    marginTop: "50px",
    display: "flex",
    gap: "20px",
  },
  primaryButton: {
    padding: "12px 25px",
    background: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "12px 25px",
    background: "white",
    color: "#ff4d4d",
    border: "2px solid #ff4d4d",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Dashboard;