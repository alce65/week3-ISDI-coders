const useThis = {
  text: 'Como usar this',
  show: function () {
    console.log(this.text);
  },
  showAsync: () => {
    setTimeout(function () {
      console.log(this.text);
    }, 1000);
  },
  showAsyncBind: function () {
    setTimeout(
      function () {
        console.log(this.text);
      }.bind(this),
      1000
    );
  },
  showAsyncArrow: function () {
    setTimeout(() => {
      console.log(this.text);
    }, 1000);
  },
};

useThis.show();
useThis.showAsync();
useThis.showAsyncBind();
useThis.showAsyncArrow();
