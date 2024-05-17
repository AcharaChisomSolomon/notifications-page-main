const unreadMessages = document.querySelectorAll('.unread')
const unreadCountDisplay = document.getElementById('unread-count-display')

const markAllAsRead = document.getElementById('mark-as-read')

unreadCountDisplay.textContent = unreadMessages.length

unreadMessages.forEach(message => { 
    message.addEventListener('click', () => {
        message.classList.remove('unread')
        unreadCountDisplay.textContent = document.querySelectorAll('.unread').length
    })
})

markAllAsRead.addEventListener('click', () => { 
    unreadMessages.forEach(message => { 
        message.classList.remove('unread')
    })
    unreadCountDisplay.textContent = document.querySelectorAll('.unread').length
})