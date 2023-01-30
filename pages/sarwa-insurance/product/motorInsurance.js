import PolicyPage from "../../../components/Content/PolicyPage";
import Head from 'next/head'
const MotorInsurance = () => {
    return (
        <div>
            <Head>
                <title>Sarwa Insurance | Motor Insurance</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="SARWA Motor Insurance policy offers comprehensive coverage for your car. We aim at getting our policyholders back on the road as quickly as possible and with minimum hassle."/>

            </Head>
            <PolicyPage />
        </div>
    );
}
export default MotorInsurance;