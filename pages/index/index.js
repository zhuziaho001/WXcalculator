Page({
  data: {
    firstnumber:1,
    secondnumber:2,
    thirdnumber:0
  },
  method_firstnumber_setData(e) {
    this.setData({
      firstnumber:e.detail.value
    })
    console.log(this.data.firstnumber);
  },
  method_secondnumber_setData(e) {
    this.setData({
      secondnumber:e.detail.value
    })
    console.log(this.data.secondnumber);
  },
  method_add(e) {
    console.log(e);
    const sum=e.currentTarget.dataset.e1+e.currentTarget.dataset.e2;
    this.setData({
      thirdnumber:sum
    })
  }


})