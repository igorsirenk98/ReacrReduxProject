import { loadingStart, loadingEnd } from '../containers/controls/Loading/actions';
import { localhost, port } from '../constants/serverConfig';

const callApi = ([start, result], url) => {
    return (dispatch) => {
        dispatch(start());
        dispatch(loadingStart());
        return fetch(`${localhost}:${port}/${url}`)
            .then((res) => res.json())
            .then((res) => {
                dispatch(result(res, false));
                dispatch(loadingEnd());
                return res;
            })
            .catch((error) => {
                dispatch(result(error, true));
                dispatch(loadingEnd());
                return error;
            });
    }
}

export default callApi;