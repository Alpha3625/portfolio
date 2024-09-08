import './StubEmptyList.scss';
import { BsEmojiFrownFill } from "react-icons/bs";

const StubEmptyList = () => {
    return (
        <p className="stub-empty-list">
            There's nothing here yet <BsEmojiFrownFill className="BsEmojiFrownFill" />
        </p>
    );
};

export default StubEmptyList;