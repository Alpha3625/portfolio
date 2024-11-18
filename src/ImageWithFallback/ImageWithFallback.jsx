import { useState } from 'react';
import StubPictures from '../components/ui/StubPictures/StubPictures';

function ImageWithFallback({ className, src, alt }) {
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        setHasError(true);
    };

    return (
        <div>
            {hasError ? (
                <StubPictures />
            ) : (
                <img className={className} src={src} alt={alt} onError={handleError} />
            )}
        </div>
    );
}

export default ImageWithFallback;