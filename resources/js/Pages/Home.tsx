import React from "react";
import {Card} from "../component/Card";
import {Alert} from "rivet-react";
import 'rivet-uits/css/rivet.min.css'

const Home: React.FC<HomeProps> = ({blah}) => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <section className="section-home">
            <h1>
                yo yo Hello {foo} + {bar} + {blah}
            </h1>
            <Card>
                <h3>
                    This is card header
                </h3>
                <p>
                    <Alert variant="success">Success!</Alert>
                </p>
            </Card>
        </section>
    );
};

export interface HomeProps {
    blah: string;
}

export default Home;
