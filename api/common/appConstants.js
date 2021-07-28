
var config = require('./config');

var appConstants = {
    jwtSecret: config.JWT_SECRET,

    AWS_ACCESS_KEY_ID: config.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: config.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: config.AWS_REGION,
    AWS_BUCKET_NAME: config.AWS_BUCKET_NAME,

    ANDROID_PACKAGE_NAME: config.ANDROID_PACKAGE_NAME,
    IOS_BUNDLE_ID: config.IOS_BUNDLE_ID,
    IOS_APP_STORE_ID: config.IOS_APP_STORE_ID,
    FIREBASE_WEB_API_KEY: config.FIREBASE_WEB_API_KEY,
    sgKey: config.SEND_BIRD_KEY,
    BASE_URL: config.BASE_URL,
    FAMILY_TREE_WEB_VIEW_URL: config.FAMILY_TREE_WEB_VIEW_URL,
    RAZOR_PAY_KEY: config.RAZOR_PAY_ID,
    RAZOR_PAY_SECRET: config.RAZOR_PAY_SECRET,

    EMAIL: config.ADDRESS,
    EMAIL_PASS: config.PASSWORD,

    notificationSounds:{
        default:0,
        expanding:1,
        fold:2,
        selected:3,
        wind:4,
        chime:5,
        definite:6,
        dont_think_so:7,
        filling_your_inbox:8,
        plucky:9,
        quite_impressed:10,
        to_the_point:11,
        unconvinced:12,
        unsure:13
    },

    FAMILY_TREE_USER_Type : {
        ADMIN : 1,
        USER: 2
    },

    USER_GENDRER : {
        MALE : 1,
        FEMALE : 2
    },

    RELATION : {
        FATHER: 1,
        MOTHER: 2,
        BROTHER:3,
        SISTER: 4,
        SON: 5,
        DAUGHTER:6,
        PARTNER: 7
    },

    FILTER: {
        DAILY: 1,
        WEEK: 2,
        MONTH: 3,
        YEAR: 4
    },

    REQUEST_ACTION: {
        ACCEPT: 1,
        REJECT: 2,
        REMOVE: 3
    },

    RELIGION: {
        HINDUISM: 1,
        ISLAM: 2,
        CHRISTIANITY: 3,
        SIKHISM: 4,
        BUDDHISM: 5,
        JAINISM: 6,
        OTHER: 7
    },

    LogBy:{
        Normal:1,
        Google:2,
        Apple:3,
        Facebook: 4
    },

    TRENDING:{
        TOP10: 1,
        HOMETOWN: 2,
        CITY: 3,
        COUNTRY: 4
    },

    PUSH_TYPE: {
        LIKE: 1,
        COMMENT: 2,
        FOLLOW: 3,
        ADD_POST: 4,
        ADD_FAMILY: 5,
        ADD_EVENT: 6,
        ADD_REFERRAL: 7
    }
};

module.exports = appConstants;