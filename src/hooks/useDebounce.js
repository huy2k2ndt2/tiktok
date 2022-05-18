import React, { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [debounceSearch, setDebounceSearch] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => setDebounceSearch(value), delay);

        return () => clearTimeout(timerId);
    }, [value]);

    return debounceSearch;
};

export default useDebounce;
