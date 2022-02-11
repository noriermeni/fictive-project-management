import {useEffect, useState} from "react";
import axios from "axios";
import {LOCAL_URL_API, URL_API} from "../utils/api";

export default function useData(path: string) {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (
            async function () {
                try {
                    const response = await axios.get(`${LOCAL_URL_API}${path}`);
                    setData(response.data);
                } catch (err: any) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }
        )();
    }, [path])

    return {data, error, loading};
}