module.exports = {
  path: './node_modules/@firebase/firestore/dist/protos',
  filter: /\.proto$/,
  pathTransform: (path: string) => {
    const name = path.split('./node_modules/@firebase/firestore/dist/')[1];
    return `file-loader?name=${name}!${path}`;
  }
};
