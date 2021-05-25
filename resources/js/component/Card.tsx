import React from "react";
import "./Card.scss";

export const Card: React.FC = ({children}) => {
    return (
        <section className="section-card">
            {children}
        </section>
    );
}
