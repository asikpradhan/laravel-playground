import React from "react";
import {Card} from "../component/Card";

const Home = () => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <section className="section-home">
            <h1>
                yo yo Hello {foo} + {bar}
            </h1>
            <Card>
                <h3>
                    This is card header
                </h3>
                <p>
                    This is section body
                </p>
            </Card>
        </section>
    );
};

export default Home;
