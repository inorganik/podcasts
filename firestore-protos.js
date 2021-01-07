module.exports = {
    path: './node_modules/@firebase/firestore/dist/protos',
    filter: /\.proto$/,
    pathTransform: function (path) {
        var name = path.split('./node_modules/@firebase/firestore/dist/')[1];
        return "file-loader?name=" + name + "!" + path;
    }
};
