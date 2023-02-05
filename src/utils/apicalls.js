import store from "../store/store";
// const baseUrl=process.env.REACT_APP_BASE_PATH
export const postCall = async (url, data, signal) => {
    try {
        const {
            auth: { token },
        } = store.getState();

        const requestOptions = {
            method: "POST",
            signal: signal,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(process.env.REACT_APP_BASE_PATH + url, requestOptions);
        return await response.json();
    } catch (err) {
        if (signal) {
            if (!signal.aborted) {
                return { error: err };
            }
        } else {
            return { error: err };
        }
    }
};
