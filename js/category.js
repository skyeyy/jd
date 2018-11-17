 window.addEventListener('load', function() {
     //初始化左侧分类swiper内容滚动
     var swiper = new Swiper('.category-left .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
     });
     //初始化右侧分类swiper内容滚动
     var swiper = new Swiper('.category-right .swiper-container', {
         direction: 'vertical',
         slidesPerView: 'auto',
         freeMode: true,
         scrollbar: {
             el: '.swiper-scrollbar',
         },
         mousewheel: true,
     });
 })





 // 计算最大移动距离
 var maxHeight = $('.category-left .swiper-wrapper')[0].offsetHeight - $('.category-left ul')[0].offsetHeight;


 $('#main ul li').on('tap', function() {
     //  获取需要移动的距离
     var translateY = -this.offsetHeight * $(this).index();
     // 判断是否超出移动最大距离
     translateY = translateY < maxHeight ? maxHeight : translateY;
     // 开始移动
     $('.category-left .swiper-wrapper').css({
         transform: "translate3d(0," + translateY + "px, 0)",
         transition: 'all,.3s'
     });
     $(this).addClass('active').siblings().removeClass('active');

 });
