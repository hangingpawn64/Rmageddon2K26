import "./StepCard.css";

export default function StepCard({ stars, title, text }) {
  return (
    <div className="step">
      <div className="step__header">
        <div className="step__stars">
          {Array.from({ length: stars.length }).map((_, i) => (
            <span key={i} className="step__star" />
          ))}
        </div>

        <span className="step__title">{title}</span>
      </div>

      <p className="step__text">{text}</p>
    </div>
  );
}
