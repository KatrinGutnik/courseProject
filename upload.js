const element = (tag, classes = [], content) =>{
    const node = document.createElement(tag)

    if (classes.length) {
        node.classList.add(...classes)
    }
    if (content) {
        node.textContent = content
    }
    return node
}

const noop = function (){
}


upload('#file', {
    multi: true,
    accept: ['png', '.jpeg', 'gif', 'jpg']
})
function upload(selector, options = {}) {
    let files =[]
    const onUpload = options.onUpload ?? noop
    const input = document.querySelector(selector)
    const preview = element('div', ['preview'])
    preview.classList.add('preview')
    const open = element('button', ['btn'], 'Start Now')


    if (options.multi) {
        input.setAttribute('multiple', true)
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }


    input.insertAdjacentElement('afterend', preview)
    input.insertAdjacentElement('afterend', open)
    const triggerInput = () => input.click()
    const changeHandler = event => {
        if (!event.target.files.length) {
            return
        }

        files = Array.from(event.target.files)

        preview.innerHTML = ''


        files.forEach(file => {
            if (!file.type.match('image')) {
                return
            }
            const reader = new FileReader()

            reader.onload = ev => {
                const src = ev.target.result
                preview.insertAdjacentHTML('afterbegin', `
                <div class="preview-image">
                <div class="preview-remove" data-name="${file.name}"><div class="loader"></div></div> 
                <img src="${src}" alt="${file.name}" />
            
                </div>     
              
                
                `)

            }
            reader.readAsDataURL(file)
        })
    }

    const removeHandler = event =>   {
        if (!event.target.dataset.name){
            return
        }
        const {name}  = event.target.dataset
        files = files.filter(file => file.name !== name)


        const block = preview.querySelector(`[data-name="${name}"]`).closest('.preview-image')

        block.classList.add('removing')
        setTimeout(() => block.remove(), 300)

    }

    open.addEventListener('click', triggerInput)
    input.addEventListener('change', changeHandler)

    preview.addEventListener('click', removeHandler)
}
