import React, { useEffect, useState } from "react";
import "./Crosshair.css";

export default function CrosshairCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [shooting, setShooting] = useState(false);


    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });

        const click = (e) => {
            setShooting(true);
            setTimeout(() => setShooting(false), 120);

            const x = e.clientX;
            const y = e.clientY;

            // ---- SMALL SPARK ----
            const spark = document.createElement("div");
            spark.className = "spark";
            spark.style.left = x + "px";
            spark.style.top = y + "px";
            document.body.appendChild(spark);
            spark.addEventListener("animationend", () => spark.remove());
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mousedown", click);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", click);
        };
    }, []);

    return (
        <div className={`crosshair ${shooting ? "recoil" : ""}`}
            style={{ left: pos.x, top: pos.y }}>
        </div>
    );
}
