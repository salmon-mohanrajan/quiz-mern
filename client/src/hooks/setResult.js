import { postServerData } from '../helper/helper';
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async(dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error);
        
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error);
    }
} 

// insert user data
// export const usePublishResult = (resultData) => {
//     const { result, username } = resultData;
//     (async () => {
//         try {
//             if(result !== [] && !username) throw new Error("Couldn't get Result");
//             await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
//         } catch (error) {
//             console.log(error)
//         }
//     })();
// }
export const usePublishResult = async (resultData) => {
    const { result, username } = resultData;

    try {
        // Correct the condition to check if the result array is empty and if username is not provided
        if (result.length === 0 || !username) {
            throw new Error("Couldn't get Result");
        }

        // Post data to the server
        const response = await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData);
        
        // Optionally, you can handle the response if needed
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}
