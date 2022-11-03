// making about and home page show...
let navigationButtons = document.querySelector('.navigationButtons').children

let containerOfPages = document.querySelector('.containerOfPages').children

Array.from(navigationButtons).forEach((element,index)=> {
    element.addEventListener('click',()=>{
        for (const iterator of containerOfPages) {
            iterator.style.display = 'none'
            containerOfPages[index].style.display = 'flex'
            
        }
    })
   
});



// dark mode button functionality....
let darkModeOption = document.querySelector('.darkModeOption')
let darkModeButton = document.querySelector('.darkModeButton')
let body = document.querySelector('body')

darkModeButton.addEventListener('click', ()=>{
    // this(.slideNow) for click to slide the circle
    darkModeOption.classList.toggle('slideNow')

    // add class (dark) to body for dark mode...
    body.classList.toggle('dark')
    
})


// text change buttons,...
let textArea = document.querySelector('.textArea')
let uppercase = document.querySelector('.uppercase');
let lowercase = document.querySelector('.lowercase');
let capitalcase = document.querySelector('.capitalcase');
let clearText = document.querySelector('.clearText');
let copyText = document.querySelector('.copyText');

// notification text for change
let buttonType = document.querySelector('.buttonType')


uppercase.addEventListener('click', ()=>{
    textArea.value = textArea.value.toUpperCase()
    buttonType.innerText = 'Converted to UpperCase'
    slideNotiFunc()
    keypressFunc()
    
})

lowercase.addEventListener('click', ()=>{
    textArea.value = textArea.value.toLowerCase()
    buttonType.innerText = 'Converted to lowercase'
    slideNotiFunc()
    keypressFunc()
})

capitalcase.addEventListener('click', ()=>{
    let strings = textArea.value.split(" ")
    let newStrings = ''
    for (let iterator of strings) {
        
        newStrings += iterator.charAt(0).toUpperCase() + iterator.slice(1).toLowerCase() + ' '
    }

    if(textArea.value != ''){
        textArea.value = newStrings;
    }

    buttonType.innerText = ' Converted to Capitalcase '
    slideNotiFunc()
    keypressFunc()
})

clearText.addEventListener('click', ()=>{
    textArea.value = ''
    buttonType.innerText = 'TextBox is Cleared '
    slideNotiFunc()
    keypressFunc()

    
})

copyText.addEventListener('click', ()=>{
    buttonType.innerText = 'Copy to clipboard!'
    slideNotiFunc()
    
    textArea.select()
    document.execCommand('Copy')
    window.getSelection().removeAllRanges()
})


// making the preview
let textAreaPreview = document.querySelector('.textAreaPreview');

// counting....
let wordCount = document.querySelector('.wordCount')
let charCountWithSpace = document.querySelector('.charCountWithSpace')
let charCountWithoutSpace = document.querySelector('.charCountWithoutSpace')
let sentenceCount = document.querySelector('.sentenceCount')

textArea.addEventListener('input', keypressFunc)

function keypressFunc(){
    // put value in preview....
    textAreaPreview.innerText = textArea.value;
    if(textArea.value === ''){
        textAreaPreview.innerText = 'Enter something in the textbox above to preview it'
    }


    // counting....
    // word count
    let wordArr = textArea.value.split(' ')
    let newWordIterators = [ ]
    for (const iterator of wordArr) {
        if(iterator !== ''){
            newWordIterators.push(iterator) 
        }
    }
    wordCount.innerText = newWordIterators.length
    
    // char with space count
    charCountWithSpace.innerText = textArea.value.split('').length
    
    // char without space count
    let charWithoutSpaceCount = textArea.value.split('')
    let newIterators = ''
    for (const iterator of charWithoutSpaceCount) {
        if(iterator != ' '){
            
            newIterators += iterator
        }
    }
    
    charCountWithoutSpace.innerText = Array.from( newIterators).length
    
    // sentence count
    let letterArr = textArea.value.split('')
    let dotArr = []
    for (const iterator of letterArr) {
        if(iterator === '.'){
            dotArr.push(iterator)
        }
    }
    sentenceCount.innerText = dotArr.length
    
    // making words reading time calculator...
    let readingTime = document.querySelector('.readingTime')
    let speakingTime = document.querySelector('.speakingTime')
    let totalWords = newWordIterators.length
    
    let avgWPMRead = 265;
    readingTime.innerText = parseFloat(totalWords/avgWPMRead).toFixed(3)
    if(totalWords == 0){
        readingTime.innerText = 0
        
    }

    let avgWPMSpeak = 150;
    speakingTime.innerText = parseFloat(totalWords/avgWPMSpeak).toFixed(3)
    if(totalWords == 0){
        speakingTime.innerText = 0
        
    }
}


// making slide notification with style animation name add and remove...

let notification = document.querySelector('.notification');

let slideNotiFunc = function () {
    notification.style.animationName = ''
    setTimeout(() => {
        notification.style.animationName = 'slideNoti'
        
    }, 1);
} 


let x = document.querySelector('.x')
x.addEventListener('click', crossNotificationFunc)

function crossNotificationFunc(){
    
    notification.style.animationName = 'slideNotiOnCross'
        
}

