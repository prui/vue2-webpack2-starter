export default {
    //在此处设置常量
    BUS_EVENT: {
        REQUEST_FAILED: 'Event:request_failed',
        REQUEST_SUCCESS: 'Event:request_success',
        REQUEST_UNAUTHORIZED: 'Event:request_unauthorized',
        CONFIRM_ADD_TAG_USERS: 'Event:confirm-add-tag-users',
        EDIT_USER_TAG_ADMIN: 'Event:edit-user-tag-admin',
        HOME_CONTENT_LOADING_BEGIN: 'Event:home-content-loading-begin',
        HOME_CONTENT_LOADING_END: 'Event:home-content-loading-end'
    },
    REQUEST_MSG: {
        SUCCESS: '获取成功',
        FAILED: '请求失败',
        UNAUTHORIZED: '登录超时，请重新登录'
    },
    Message: {
        ADD_SUCCESS: '添加成功',
        DELETE_SUCCESS: '删除成功',
        EDIT_SUCCESS: '修改成功',
        FORM_ERROR: '请填写正确信息！'
    },
    VerifyReg: {
        numberReg: /^\d+$/,
        emailReg: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        telephoneReg: /^1[3-8]{1}[0-9]{9}$/,
        familyPhoneReg: /^0[0-9]{9,11}$/,
        ipReg: '^(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|[1-9])\\.' +
            '(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.' +
            '(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)\\.' +
            '(1\\d{2}|2[0-4]\\d|25[0-5]|[1-9]\\d|\\d)$'
    }
};