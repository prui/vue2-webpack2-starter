import $q from '$q';
import Bus from '../EventBus';
import constant from '../../config/constant';
const SUCCESS_MSG = constant.REQUEST_MSG.SUCCESS;
const FAILED_MSG = constant.REQUEST_MSG.FAILED;
const UNAUTHORIZED_MSG = constant.REQUEST_MSG.UNAUTHORIZED;
const REQUEST_FAILED = constant.BUS_EVENT.REQUEST_FAILED;
const REQUEST_SUCCESS = constant.BUS_EVENT.REQUEST_SUCCESS;
const REQUEST_UNAUTHORIZED = constant.BUS_EVENT.REQUEST_UNAUTHORIZED;

class ResultHandler {
    constructor() {}

    successHandler(response) {
        if (response.data.status == 0) {
            Bus.$emit(REQUEST_SUCCESS);
            return response.data;
        } else {
            var message = response.data.message || FAILED_MSG;
            //   if (response.data.data && response.data.data.errcode == 81011) {
            //     message = '权限不够';
            //   }
            Bus.$emit(REQUEST_FAILED, message);
            return $q.reject(response);
        }
    }

    failHandler(error) {
        return $q.reject(error);
    }
}

let resultHandler = new ResultHandler();
module.exports = resultHandler;