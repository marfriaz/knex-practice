console.log("Hey i ran!");

module.exports = {
  count: 0,
  run: function () {
    this.count++;
    console.log(this.count);
  },
};
