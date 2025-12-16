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

            // ---- BULLET SHELL ----
            const shell = document.createElement("div");
            shell.className = "shell";

            // random slight offset near crosshair
            shell.style.left = x + (Math.random() * 6 - 3) + "px";
            shell.style.top = y + (Math.random() * 6 - 3) + "px";

            // random rotation + direction
            const dir = Math.random() > 0.5 ? 1 : -1;
            shell.style.setProperty("--dir", dir);
            shell.style.setProperty("--rot", Math.random() * 360 + "deg");

            document.body.appendChild(shell);

            // remove after animation
            setTimeout(() => shell.remove(), 1200);

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