
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [donationRaised, setDonationRaised] = useState(0);
  const [intern, setIntern] = useState({ name: '', referralCode: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [donationRes, internRes] = await Promise.all([
          fetch('http://localhost:5000/donations'),
          fetch('http://localhost:5000/intern')
        ]);

        if (!donationRes.ok || !internRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const donationData = await donationRes.json();
        const internData = await internRes.json();

        setDonationRaised(donationData.totalDonation);
        setIntern(internData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCopyReferral = () => {
    navigator.clipboard.writeText(intern.referralCode);
    alert('Referral code copied to clipboard!');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', background: 'plum', fontFamily: 'sans-serif',minWidth: '100vw' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Intern Dashboard</h1>

      <div style={{
        margin: '0 auto',
        maxWidth: '500px',
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '8px', color: '#333' }}>Welcome, {intern.name || 'Intern'} 👋</h2>

        <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#666' }}>Referral Code</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'monospace', background: '#f3f4f6', padding: '6px 12px', borderRadius: '6px', border: '1px solid #ccc' }}>{intern.referralCode}</span>
          <button onClick={handleCopyReferral} style={{ padding: '6px 12px', background: 'purple', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Copy</button>
        </div>

        <h2 style={{ fontSize: '20px', marginBottom: '16px', color: '#333' }}>Total Donations Raised</h2>
        {loading ? (
          <p style={{ fontSize: '18px', color: '#888' }}>Loading...</p>
        ) : error ? (
          <p style={{ fontSize: '18px', color: 'red' }}>{error}</p>
        ) : (
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#10b981' }}>
            ₹{donationRaised.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
