// 判断是否是移动端
const isMobile = () => 'ontouchstart' in window;

// 对象去重
const dupObj = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);



