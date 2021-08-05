module.exports = (function () {
    console.log("Env: ", process.env.NODE_ENV);

    switch (process.env.NODE_ENV) {
        case "development":
            return {
                DB_HOST: 'ec2-34-204-128-77.compute-1.amazonaws.com',
                DB_USER: 'mzeskakndzelmm',
                DB_PASSWORD: 'ff0267346ab66c5c5a33de8c30ff191f60ffd5315a20be007c68c1e6340f82e8',
                DB: 'd2tf61e8c4iuo9',
                PORT:3001
            };
            break;
        case "production":
                return {
                    DB_HOST: '',
                    DB_USER: '',
                    DB_PASSWORD: '',
                    DB: '',
                    PORT:3001
                };
                break;
        default:
            return {
                DB_HOST: 'ec2-34-204-128-77.compute-1.amazonaws.com',
                DB_USER: 'mzeskakndzelmm',
                DB_PASSWORD: 'ff0267346ab66c5c5a33de8c30ff191f60ffd5315a20be007c68c1e6340f82e8',
                DB: 'd2tf61e8c4iuo9',
                PORT:3001
            };
    }
})();