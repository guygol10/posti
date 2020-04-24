export default class PromiseService {
    getDataAsPromise(data, errMessage) {

        return new Promise((resolve, reject) => {

            setInterval(() => {
                if (data.length > 0) {
                    resolve(data);

                } else {
                    reject(errMessage);
                }
            }, 500)
        })
    }
}