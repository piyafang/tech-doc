# 可左右拖动，无bug 

# slider初始化
function sliderInit(){
  Swipe(document.getElementById('slider'), {
    auto: 3000,
    disableScroll: false,
    callback: function(index) {
      var swipeStatus = document.getElementById('swipe-status').children[0];
      swipeStatus.querySelector('.on') && (swipeStatus.querySelector('.on').className = '');
      var statusChildren = swipeStatus.children;
      var currentChildren = statusChildren[index] || statusChildren[index - statusChildren.length];
      currentChildren.className = 'on';
    }
  });
}
