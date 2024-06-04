import { useSearchParams } from "react-router-dom";
import Test from "../../components/TestComponent/TestComponent";

const TestPage = () => {
    const [searchParams] = useSearchParams();

    const wT = searchParams.get('withTimer') === 'true';
    const modifiable = searchParams.get('modifiable') === 'true';
    const interval = searchParams.get('interval');

    return (
        <Test
            withTimer={wT ?? false}
            modifiable={modifiable ?? true}
            interval={interval}
        />
    );
}

export default TestPage;