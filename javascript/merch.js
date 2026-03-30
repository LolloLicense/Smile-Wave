const merch = () =>{

    const tabButtons = document.querySelectorAll('.tab')

    const tabPanels = document.querySelectorAll('.panel')

    const changePanel = (event) => {
        const currentTab = event.target

        const currentTabId = event.target.dataset.tabId

        const currentPanel = document.querySelector(`.panel[data-tab-id="${currentTabId}"]`)

        tabButtons.forEach(button => button.classList.remove('tab--current'))
        tabPanels.forEach(panel => panel.classList.remove('panel--current'))

        currentTab.classList.add('tab--current')
        currentPanel.classList.add('panel--current')

        console.log(currentPanel)
    }

    tabButtons.forEach(button => button.addEventListener('click', changePanel))


}

merch()