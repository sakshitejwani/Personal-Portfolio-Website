// =========================================
// Footer.jsx — Simple footer at the bottom
// =========================================

function Footer() {
  // Get the current year automatically
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid #e5e7eb',
      padding: '2rem',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '0.85rem',
      fontFamily: 'Inter, sans-serif',
    }}>
      <p>© {year} Sakshi Tejwani. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
