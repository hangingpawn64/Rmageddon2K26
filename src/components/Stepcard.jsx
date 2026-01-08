import "./StepCard.css";

export default function StepCard({ stars, title, text }) {
  return (
    <div className="step-card-item">
      <div className="step-card-header">
        <div className="step-card-stars">
          {Array.from({ length: stars.length }).map((_, i) => (
            <span key={i} className="step-card-star" />
          ))}
        </div>

        <span className="step-card-title">{title}</span>
      </div>

      <p className="step-card-text">{text}</p>
    </div>
  );
}
