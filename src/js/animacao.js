const animationScroll  = new IntersectionObserver((Elements) =>{
    Elements.forEach((el)=>{
        if (el.isIntersecting) {
            el.target.classList.remove('offAnimacao')
            el.target.classList.add('onAnimacao')
        } else {
            el.target.classList.remove('onAnimacao')
            el.target.classList.add('offAnimacao')
        }
    });
})
export default animationScroll;