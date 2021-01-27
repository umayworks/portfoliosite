const masks = ['U', 'M1', 'A', 'Y', 'D', 'E1', 'M', 'I', 'R', 'E', 'L']

masks.forEach((mask, index, el) => {
    const id = `#mask-${mask}`
    let path = document.querySelector(id)
    const length = path.getTotalLength()
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
})

