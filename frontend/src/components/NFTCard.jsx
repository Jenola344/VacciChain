export default function NFTCard({ record }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '1.25rem',
      marginBottom: '1rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent)' }}>
          💉 {record.vaccine_name}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>#{record.token_id}</span>
      </div>
      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
        Date: {record.date_administered}
      </p>
      <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
        Issuer: {record.issuer?.slice(0, 8)}…{record.issuer?.slice(-4)}
      </p>
    </div>
  );
}
