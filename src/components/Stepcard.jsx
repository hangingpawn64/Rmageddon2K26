import "./StepCard.css";

export default function StepCard({ stars, title, text }) {
  return (
    <div className="hero-step">
      <div className="hero-step-header">
        <div className="hero-step-stars">
          {Array.from({ length: stars.length }).map((_, i) => (
            <span key={i} className="hero-step-star" />
          ))}
        </div>

        <span className="hero-step-title">{title}</span>
      </div>

      <p className="hero-step-text">{text}</p>
    </div>
  );
}
